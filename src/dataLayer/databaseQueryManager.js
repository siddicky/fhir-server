const {DatabasePartitionedCursor} = require('./databasePartitionedCursor');
const {ResourceLocatorFactory} = require('../operations/common/resourceLocatorFactory');
const {ResourceLocator} = require('../operations/common/resourceLocator');
const {assertTypeEquals} = require('../utils/assertType');
const {getResource} = require('../operations/common/getResource');
const {RethrownError} = require('../utils/rethrownError');
const BundleEntry = require('../fhir/classes/4_0_0/backbone_elements/bundleEntry');
const BundleRequest = require('../fhir/classes/4_0_0/backbone_elements/bundleRequest');
const moment = require('moment-timezone');
const {getCircularReplacer} = require('../utils/getCircularReplacer');

/**
 * @typedef FindOneAndUpdateResult
 * @type {object}
 * @property {boolean|null} created
 * @property {Error|null} error
 */

/**
 * @typedef DeleteManyResult
 * @type {object}
 * @property {number|null} deletedCount
 * @property {Error|null} error
 */


/**
 * This class manages access to the database by finding the appropriate partitioned collection to use for the
 * provided resourceType
 */
class DatabaseQueryManager {
    /**
     * Constructor
     * @param {ResourceLocatorFactory} resourceLocatorFactory
     * @param {string} resourceType
     * @param {string} base_version
     */
    constructor({resourceLocatorFactory, resourceType, base_version}) {
        assertTypeEquals(resourceLocatorFactory, ResourceLocatorFactory);
        /**
         * @type {string}
         * @private
         */
        this._resourceType = resourceType;
        /**
         * @type {string}
         * @private
         */
        this._base_version = base_version;
        /**
         * @type {ResourceLocator}
         */
        this.resourceLocator = resourceLocatorFactory.createResourceLocator({
            resourceType: this._resourceType,
            base_version: this._base_version
        });
        assertTypeEquals(this.resourceLocator, ResourceLocator);
    }

    /**
     * Finds one resource by looking in multiple partitions of a resource type
     * @param {import('mongodb').Filter<import('mongodb').DefaultSchema>} query
     * @param {import('mongodb').FindOptions<import('mongodb').DefaultSchema>} options
     * @return {Promise<Resource|null>}
     */
    async findOneAsync({query, options = null}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({
                query
            });
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type { Promise<Resource|null>}
                 */
                const resource = await collection.findOne(query, options);
                if (resource !== null) {
                    const ResourceCreator = getResource(this._base_version, this._resourceType);
                    return new ResourceCreator(resource);
                }
            }
            return null;
        } catch (e) {
            throw new RethrownError({
                message: 'Error in findOneAsync(): ' + `query: ${JSON.stringify(query)}`, error: e,
                args: {query, options}
            });
        }
    }

    /**
     * Deletes resources
     * @param {import('mongodb').Filter<import('mongodb').DefaultSchema>} query
     * @param {string} requestId
     * @param {import('mongodb').DeleteOptions} options
     * @return {Promise<DeleteManyResult>}
     */
    async deleteManyAsync({query, requestId, options = {}}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({
                query
            });
            let deletedCount = 0;
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type {DatabasePartitionedCursor}
                 */
                const resourcesCursor = await this.findAsync({
                    query, options
                });
                // find the history collection for each
                while (await resourcesCursor.hasNext()) {
                    /**
                     * @type {Resource|null}
                     */
                    const resource = await resourcesCursor.next();
                    if (resource) {
                        /**
                         * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>}
                         */
                        const historyCollection = await this.resourceLocator.getOrCreateHistoryCollectionAsync(resource);
                        /**
                         * @type {Resource}
                         */
                        const historyResource = resource.clone();
                        historyResource.meta.lastUpdated = new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'));
                        await historyCollection.insertOne(new BundleEntry({
                            id: historyResource.id,
                            resource: historyResource,
                            request: new BundleRequest(
                                {
                                    id: requestId,
                                    method: 'DELETE',
                                    url: `${this._base_version}/${resource.resourceType}/${resource.id}`
                                }
                            )
                        }));
                    }
                }
                /**
                 * @type {import('mongodb').DeleteWriteOpResultObject}
                 */
                const result = await collection.deleteMany(query, options);
                deletedCount += result.deletedCount;

            }
            return {deletedCount: deletedCount, error: null};
        } catch (e) {
            throw new RethrownError({
                message: 'Error in deleteManyAsync(): ' + `query: ${JSON.stringify(query)}`, error: e,
                args: {query, requestId, options}
            });
        }
    }

    /**
     * Returns a DatabasePartitionedCursor by executing the query
     * @param {import('mongodb').Filter<import('mongodb').DefaultSchema>} query
     * @param {import('mongodb').FindOptions<import('mongodb').DefaultSchema>} options
     * @return {DatabasePartitionedCursor}
     */
    async findAsync({query, options = null}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({query});
            /**
             * @type {CursorInfo[]}
             */
            const cursors = [];
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type {import('mongodb').FindCursor<import('mongodb').WithId<import('mongodb').DefaultSchema>>}
                 */
                const cursor = collection.find(query, options);
                cursors.push({cursor, db: collection.dbName, collection: collection.collectionName});
            }
            return new DatabasePartitionedCursor({
                base_version: this._base_version, resourceType: this._resourceType, cursors,
                query
            });
        } catch (e) {
            throw new RethrownError({
                message: 'Error in findAsync(): ' + `query: ${JSON.stringify(query)}`, error: e,
                args: {query, options}
            });
        }
    }

    /**
     * Returns a DatabasePartitionedCursor by executing the query
     * @param {import('mongodb').Filter<import('mongodb').DefaultSchema>} query
     * @param projection
     * @param {import('mongodb').FindOptions<import('mongodb').DefaultSchema>} options
     * @return {DatabasePartitionedCursor}
     */
    async findUsingAggregationAsync({query, projection, options = null}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({query});
            /**
             * @type {CursorInfo[]}
             */
            const cursors = [];
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type {AggregationCursor<Document>}
                 */
                const cursor = collection.aggregate(
                    [
                        {
                            $match: query,
                        },
                        {
                            $project: projection,

                        }
                    ],
                    options,
                );
                cursors.push({cursor, db: collection.dbName, collection: collection.collectionName});
            }
            return new DatabasePartitionedCursor({
                base_version: this._base_version, resourceType: this._resourceType, cursors,
                query
            });
        } catch (e) {
            throw new RethrownError({
                message: 'Error in findUsingAggregationAsync(): ' + `query: ${JSON.stringify(query)}`, error: e,
                args: {query, options}
            });
        }
    }

    /**
     * Gets estimated count of ALL documents in a collection.  This does not accept a query
     * @param {import('mongodb').EstimatedDocumentCountOptions} options
     * @return {Promise<*>}
     */
    async estimatedDocumentCountAsync({options}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({
                query: undefined
            });
            let count = 0;
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * https://mongodb.github.io/node-mongodb-native/4.9/classes/Collection.html#estimatedDocumentCount
                 * @type {number}
                 */
                const countInCollection = await collection.estimatedDocumentCount(options);
                count += countInCollection;
            }
            return count;
        } catch (e) {
            throw new RethrownError({
                message: 'Error in estimatedDocumentCountAsync(): ' + `options: ${JSON.stringify(options)}`, error: e,
                args: {options}
            });
        }
    }

    /**
     * Gets exact count
     * @param {import('mongodb').FilterQuery<import('mongodb').DefaultSchema>|null} query
     * @param { import('mongodb').MongoCountPreferences|null} options
     * @return {Promise<*>}
     */
    async exactDocumentCountAsync({query, options}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsForQueryAsync({
                query: undefined
            });
            let count = 0;
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type {number}
                 */
                const countInCollection = await collection.countDocuments(query, options);
                count += countInCollection;
            }
            return count;
        } catch (e) {
            throw new RethrownError({
                message: 'Error in exactDocumentCountAsync(): ' + `query: ${JSON.stringify(query)}`, error: e,
                args: {query, options}
            });
        }
    }

    /**
     * Finds and returns subset of passed in resources that exist in the database
     * @param {Resource[]} resources
     * @return {Promise<DatabasePartitionedCursor>}
     */
    async findResourcesInDatabaseAsync({resources}) {
        try {
            /**
             * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
             */
            const collections = await this.resourceLocator.getOrCreateCollectionsAsync({resources: resources});
            const query = {
                id: {$in: resources.map(r => r.id)}
            };
            const options = {};
            /**
             * @type {CursorInfo[]}
             */
            const cursors = [];
            for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
                /**
                 * @type {import('mongodb').FindCursor<import('mongodb').WithId<import('mongodb').DefaultSchema>>}
                 */
                const cursor = collection.find(query, options);
                cursors.push({cursor, db: collection.dbName, collection: collection.collectionName});
            }
            return new DatabasePartitionedCursor({
                base_version: this._base_version, resourceType: this._resourceType, cursors,
                query
            });
        } catch (e) {
            throw new RethrownError({
                message: 'Error in findResourcesInDatabaseAsync(): ' + `resources: ${JSON.stringify(resources, getCircularReplacer())}`,
                error: e,
                args: {resources}
            });
        }
    }
}

module.exports = {
    DatabaseQueryManager
};
