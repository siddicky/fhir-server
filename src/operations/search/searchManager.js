const {buildStu3SearchQuery} = require('../query/stu3');
const {buildDstu2SearchQuery} = require('../query/dstu2');
const {buildR4SearchQuery} = require('../query/r4');
const {isTrue} = require('../../utils/isTrue');
const env = require('var');
const {getResource} = require('../common/getResource');
const moment = require('moment-timezone');
const {mongoQueryAndOptionsStringify, mongoQueryStringify} = require('../../utils/mongoQueryStringify');
const {logDebug, logError} = require('../common/logging');
const deepcopy = require('deepcopy');
const {searchLimitForIds, limit} = require('../../utils/searchForm.util');
const {createReadableMongoStream} = require('../streaming/mongoStreamReader');
const {pipeline} = require('stream/promises');
const {ResourcePreparerTransform} = require('../streaming/resourcePreparerTransform');
const {Transform} = require('stream');
const {findIndexForFields} = require('../../indexes/indexHinter');
const {FhirBundleWriter} = require('../streaming/fhirBundleWriter');
const {HttpResponseWriter} = require('../streaming/responseWriter');
const {ResourceIdTracker} = require('../streaming/resourceIdTracker');
const {ObjectChunker} = require('../streaming/objectChunker');
const {fhirContentTypes} = require('../../utils/contentTypes');
const {FhirResourceWriter} = require('../streaming/fhirResourceWriter');
const {FhirResourceNdJsonWriter} = require('../streaming/fhirResourceNdJsonWriter');
const {DatabaseQueryFactory} = require('../../dataLayer/databaseQueryFactory');
const {ResourceLocatorFactory} = require('../common/resourceLocatorFactory');
const {assertTypeEquals, assertIsValid} = require('../../utils/assertType');
const {SecurityTagManager} = require('../common/securityTagManager');
const {ResourcePreparer} = require('../common/resourcePreparer');
const {VERSIONS} = require('@asymmetrik/node-fhir-server-core').constants;
const BWELL_PLATFORM_MEMBER_ID_SYSTEM = 'https://icanbwell.com/Bwell_Platform/member_id';
const BWELL_FHIR_MEMBER_ID_SYSTEM = 'https://www.icanbwell.com/member_id';
const idProjection = {id: 1, _id: 0};

class SearchManager {
    /**
     * constructor
     * @param {DatabaseQueryFactory} databaseQueryFactory
     * @param {ResourceLocatorFactory} resourceLocatorFactory
     * @param {SecurityTagManager} securityTagManager
     * @param {ResourcePreparer} resourcePreparer
     */
    constructor(
        {
            databaseQueryFactory,
            resourceLocatorFactory,
            securityTagManager,
            resourcePreparer
        }
    ) {
        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);
        /**
         * @type {ResourceLocatorFactory}
         */
        this.resourceLocatorFactory = resourceLocatorFactory;
        assertTypeEquals(resourceLocatorFactory, ResourceLocatorFactory);
        /**
         * @type {SecurityTagManager}
         */
        this.securityTagManager = securityTagManager;
        assertTypeEquals(securityTagManager, SecurityTagManager);

        /**
         * @type {ResourcePreparer}
         */
        this.resourcePreparer = resourcePreparer;
        assertTypeEquals(resourcePreparer, ResourcePreparer);
    }

    /**
     * constructs a mongo query
     * @param {string | null} user
     * @param {string | null} scope
     * @param {boolean | null} isUser
     * @param {string[] | null} patients
     * @param {Object?} args
     * @param {string} resourceType
     * @param {boolean} useAccessIndex
     * @param {boolean} filter
     * @returns {{base_version, columns: Set, query: import('mongodb').Document}}
     */
    constructQuery(
        {
            user, scope,
            isUser,
            patients,
            args,
            resourceType,
            useAccessIndex,
            filter = true
        }
    ) {
        /**
         * @type {string[]}
         */
        let securityTags = this.securityTagManager.getSecurityTagsFromScope({user, scope});
        /**
         * @type {string}
         */
        let {base_version} = args;
        /**
         * @type {import('mongodb').Document}
         */
        let query;

        /**
         * @type {Set}
         */
        let columns;

        // eslint-disable-next-line no-useless-catch
        try {
            if (base_version === VERSIONS['3_0_1']) {
                query = buildStu3SearchQuery(args);
            } else if (base_version === VERSIONS['1_0_2']) {
                query = buildDstu2SearchQuery(args);
            } else {
                ({query, columns} = buildR4SearchQuery(resourceType, args));
            }
        } catch (e) {
            throw e;
        }
        query = this.securityTagManager.getQueryWithSecurityTags(
            {
                resourceType, securityTags, query, useAccessIndex
            });
        if (isTrue(env.ENABLE_PATIENT_FILTERING) && isUser && filter) {
            query = this.securityTagManager.getQueryWithPatientFilter({patients, query, resourceType});
        }
        return {base_version, query, columns};
    }

    /**
     * creates a bundle from the given resources
     * @param {string | null} originalUrl
     * @param {string | null} host
     * @param {string | null} protocol
     * @param {string | null} last_id
     * @param {Resource[]} resources
     * @param {string} base_version
     * @param {number|null} total_count
     * @param {Object} args
     * @param {import('mongodb').Document|import('mongodb').Document[]} originalQuery
     * @param {string} collectionName
     * @param {import('mongodb').FindOneOptions | import('mongodb').FindOneOptions[]} originalOptions
     * @param {Set} columns
     * @param {number} stopTime
     * @param {number} startTime
     * @param {boolean} useTwoStepSearchOptimization
     * @param {string|null} indexHint
     * @param {number | null} cursorBatchSize
     * @param {string | null} user
     * @param {boolean | null} useAtlas
     * @return {{entry: {resource: Resource}[]}}
     */
    createBundle(
        {
            originalUrl,
            host,
            protocol,
            last_id,
            resources,
            base_version,
            total_count,
            args,
            originalQuery,
            collectionName,
            originalOptions,
            columns,
            stopTime,
            startTime,
            useTwoStepSearchOptimization,
            indexHint,
            cursorBatchSize,
            user,
            useAtlas
        }) {
        /**
         * array of links
         * @type {[{relation:string, url: string}]}
         */
        let link = [];
        // find id of last resource
        if (originalUrl) {
            if (last_id) {
                // have to use a base url or URL() errors
                const baseUrl = 'https://example.org';
                /**
                 * url to get next page
                 * @type {URL}
                 */
                const nextUrl = new URL(originalUrl, baseUrl);
                // add or update the id:above param
                nextUrl.searchParams.set('id:above', `${last_id}`);
                // remove the _getpagesoffset param since that will skip again from this id
                nextUrl.searchParams.delete('_getpagesoffset');
                link = [
                    {
                        relation: 'self',
                        url: `${protocol}`.concat('://', `${host}`, `${originalUrl}`),
                    },
                    {
                        relation: 'next',
                        url: `${protocol}`.concat('://', `${host}`, `${nextUrl.toString().replace(baseUrl, '')}`),
                    },
                ];
            } else {
                link = [
                    {
                        relation: 'self',
                        url: `${protocol}`.concat('://', `${host}`, `${originalUrl}`),
                    },
                ];
            }
        }
        /**
         * @type {function({Object}):Resource}
         */
        const Bundle = getResource(base_version, 'bundle');
        /**
         * @type {{resource: Resource}[]}
         */
        const entries = resources.map((resource) => {
            return {resource: resource};
        });
        // noinspection JSValidateTypes
        /**
         * @type {{entry: {resource: Resource}[]}}
         */
        const bundle = new Bundle({
            type: 'searchset',
            timestamp: moment.utc().format('YYYY-MM-DDThh:mm:ss.sss') + 'Z',
            entry: entries,
            total: total_count,
            link: link,
        });

        if (args['_debug'] || env.LOGLEVEL === 'DEBUG') {
            /**
             * @type {[{[system]: string|undefined, [display]: string|undefined, [code]: string|undefined}]}
             */
            const tag = [
                {
                    system: 'https://www.icanbwell.com/query',
                    display: mongoQueryAndOptionsStringify(collectionName, originalQuery, originalOptions),
                },
                {
                    system: 'https://www.icanbwell.com/queryCollection',
                    code: collectionName,
                },
                {
                    system: 'https://www.icanbwell.com/queryOptions',
                    display: originalOptions ? mongoQueryStringify(originalOptions) : null,
                },
                {
                    system: 'https://www.icanbwell.com/queryFields',
                    display: columns ? mongoQueryStringify(Array.from(columns)) : null,
                },
                {
                    system: 'https://www.icanbwell.com/queryTime',
                    display: `${(stopTime - startTime) / 1000}`,
                },
                {
                    system: 'https://www.icanbwell.com/queryOptimization',
                    display: `{'useTwoStepSearchOptimization':${useTwoStepSearchOptimization}}`,
                },
            ];
            if (indexHint) {
                tag.push({
                    system: 'https://www.icanbwell.com/queryIndexHint',
                    code: indexHint,
                });
            }
            if (useAtlas) {
                tag.push({
                    system: 'https://www.icanbwell.com/queryUseAtlas',
                    code: useAtlas ? '1' : 0,
                });
            }
            if (cursorBatchSize && cursorBatchSize > 0) {
                tag.push({
                    system: 'https://www.icanbwell.com/queryCursorBatchSize',
                    display: `${cursorBatchSize}`,
                });
            }
            bundle['meta'] = {
                tag: tag,
            };
            logDebug(user, JSON.stringify(bundle));
        }
        return bundle;
    }

    /**
     * @typedef GetCursorResult
     * @type {object}
     * @property {number | null} cursorBatchSize
     * @property {DatabasePartitionedCursor|null} cursor
     * @property {string | null} indexHint
     * @property {boolean} useTwoStepSearchOptimization
     * @property {Set} columns
     * @property {number | null} total_count
     * @property {import('mongodb').Document} query
     * @property {import('mongodb').FindOneOptions} options
     * @property {Resource[]} resources
     * @property {import('mongodb').Document|import('mongodb').Document[]} originalQuery
     * @property {import('mongodb').FindOneOptions|import('mongodb').FindOneOptions[]} originalOptions
     */

    /**
     * Create the query and gets the cursor from mongo
     * @param {string} resourceType
     * @param {string} base_version
     * @param {boolean|null} useAtlas
     * @param {Object?} args
     * @param {Set} columns
     * @param {Object} options
     * @param {import('mongodb').Document} query
     * @param {boolean} useAtlas
     * @param {number} maxMongoTimeMS
     * @param {string | null} user
     * @param {boolean} isStreaming
     * @param {boolean} useAccessIndex
     * @returns {Promise<GetCursorResult>}
     */
    async getCursorForQueryAsync(
        {
            resourceType,
            base_version,
            useAtlas,
            args,
            columns,
            options,
            query,
            maxMongoTimeMS,
            user,
            isStreaming,
            useAccessIndex
        }
    ) {
        // if _elements=x,y,z is in url parameters then restrict mongo query to project only those fields
        if (args['_elements']) {
            const __ret = this.handleElementsQuery(
                {
                    args, columns, resourceType, options, useAccessIndex
                });
            columns = __ret.columns;
            options = __ret.options;
        }
        // if _sort is specified then add sort criteria to mongo query
        if (args['_sort']) {
            const __ret = this.handleSortQuery({args, columns, options});
            columns = __ret.columns;
            options = __ret.options;
        }

        // if _count is specified then limit mongo query to that
        if (args['_count']) {
            const __ret = this.handleCountOption({args, options, isStreaming});
            options = __ret.options;
        } else {
            this.setDefaultLimit({args, options});
        }

        // for consistency in results while paging, always sort by id
        // https://docs.mongodb.com/manual/reference/method/cursor.sort/#sort-cursor-consistent-sorting
        const defaultSortId = env.DEFAULT_SORT_ID || 'id';
        columns.add(defaultSortId);
        if (!('sort' in options)) {
            options['sort'] = {};
        }
        // add id to end if not present in sort
        if (!(`${defaultSortId}` in options['sort'])) {
            options['sort'][`${defaultSortId}`] = 1;
        }

        /**
         * queries for logging
         * @type {Object|Object[]}
         */
        let originalQuery = deepcopy(query);
        /**
         * options for logging
         * @type {Object|Object[]}
         */
        let originalOptions = deepcopy(options);

        /**
         * whether to use the two-step optimization
         * In the two-step optimization we request the ids first and then request the documents for those ids
         *  This can be faster in large tables as both queries can then be satisfied by indexes
         * @type {boolean}
         */
        const useTwoStepSearchOptimization =
            !args['_elements'] &&
            !args['id'] &&
            (isTrue(env.USE_TWO_STEP_SEARCH_OPTIMIZATION) || args['_useTwoStepOptimization']);
        if (isTrue(useTwoStepSearchOptimization)) {
            const __ret = await this.handleTwoStepSearchOptimizationAsync(
                {
                    resourceType,
                    base_version,
                    useAtlas,
                    options,
                    originalQuery,
                    query,
                    originalOptions,
                    maxMongoTimeMS
                }
            );
            options = __ret.options;
            originalQuery = __ret.originalQuery;
            query = __ret.query;
            originalOptions = __ret.originalOptions;
            if (query === null) {
                // no ids were found so no need to query
                return {
                    columns,
                    options,
                    query,
                    originalQuery,
                    originalOptions,
                    useTwoStepSearchOptimization,
                    resources: [],
                    total_count: 0,
                    indexHint: null,
                    cursorBatchSize: 0,
                    cursor: null
                };
            }
        }

        /**
         * resources to return
         * @type {Resource[]}
         */
        let resources = [];
        /**
         * @type {number}
         */
        let total_count = 0;
        /**
         * which index hint to use (if any)
         * @type {string|null}
         */
        let indexHint = null;
        /**
         * @type {int | null}
         */
        let cursorBatchSize = null;
        // run the query and get the results
        // Now run the query to get a cursor we will enumerate next
        /**
         * @type {DatabasePartitionedCursor}
         */
        let cursorQuery = await this.databaseQueryFactory.createQuery(resourceType, base_version, useAtlas)
            .findAsync(query, options);

        if (isStreaming) {
            cursorQuery = cursorQuery.maxTimeMS(60 * 60 * 1000); // if streaming then set time out to an hour
        } else {
            cursorQuery = cursorQuery.maxTimeMS(maxMongoTimeMS);
        }

        // avoid double sorting since Mongo gives you different results
        if (useTwoStepSearchOptimization && !options['sort']) {
            const sortOption =
                originalOptions[0] && originalOptions[0].sort ? originalOptions[0].sort : null;
            if (sortOption !== null) {
                cursorQuery = cursorQuery.sort(sortOption);
            }
        }

        // set batch size if specified
        if (env.MONGO_BATCH_SIZE || args['_cursorBatchSize']) {
            // https://www.dbkoda.com/blog/2017/10/01/bulk-operations-in-mongoDB
            const __ret = this.setCursorBatchSize({args, cursorQuery});
            cursorBatchSize = __ret.cursorBatchSize;
            cursorQuery = __ret.cursorQuery;
        }
        /**
         * @type {DatabasePartitionedCursor}
         */
        let cursor = cursorQuery;

        // find columns being queried and match them to an index
        if (isTrue(env.SET_INDEX_HINTS) || args['_setIndexHint']) {
            // TODO: handle index hints for multiple collections
            const collectionNamesForQueryForResourceType = this.resourceLocatorFactory.createResourceLocator(
                resourceType, base_version, useAtlas)
                .getCollectionNamesForQuery();
            const __ret = this.setIndexHint(
                {
                    indexHint,
                    mongoCollectionName: collectionNamesForQueryForResourceType[0],
                    columns,
                    cursor,
                    user
                }
            );
            indexHint = __ret.indexHint;
            cursor = __ret.cursor;
        }

        // if _total is specified then ask mongo for the total else set total to 0
        if (args['_total'] && ['accurate', 'estimate'].includes(args['_total'])) {
            total_count = await this.handleGetTotalsAsync(
                {
                    resourceType, base_version,
                    useAtlas, args, query, maxMongoTimeMS
                });
        }

        return {
            columns,
            options,
            query,
            originalQuery,
            originalOptions,
            useTwoStepSearchOptimization,
            resources,
            total_count,
            indexHint,
            cursorBatchSize,
            cursor
        };
    }

    /**
     * Gets Patient id from identifiers
     * @param {string} base_version
     * @param {boolean} useAtlas
     * @param {string} fhirPersonId
     * @param {string} personSystem
     * @param {string} patientSystem
     * @return {Promise<string[]>}
     */
    async getPatientIdsByPersonIdentifiersAsync(
        {
            base_version, useAtlas, fhirPersonId,
            // eslint-disable-next-line no-unused-vars
            personSystem = BWELL_FHIR_MEMBER_ID_SYSTEM,
            patientSystem = BWELL_PLATFORM_MEMBER_ID_SYSTEM
        }
    ) {
        /**
         * @type {string[]}
         */
        let result = [];
        if (fhirPersonId) {
            /**
             * @type {Resource | null}
             */
            let person = await this.databaseQueryFactory.createQuery(
                'Person', base_version, useAtlas)
                .findOneAsync({id: fhirPersonId});
            // Finds Patients by platform member ids and returns an array with the found patient ids
            if (person.identifier && person.identifier.length > 0) {
                let memberId = person.identifier.filter(identifier => {
                    return identifier.type.coding.some(coding => {
                            return coding.system === 'https://www.icanbwell.com' && coding.code === 'member_id';
                        }
                    );
                });
                /**
                 * @type {DatabasePartitionedCursor}
                 */
                let cursor = await this.databaseQueryFactory.createQuery(
                    'Patient', base_version, useAtlas)
                    .findAsync(
                        {
                            identifier: {
                                $elemMatch: {
                                    'system': patientSystem,
                                    'value': {$in: memberId.map(id => id.value)}
                                }
                            }
                        },
                    );
                cursor = cursor.project(idProjection);
                result = await cursor.map(p => p.id).toArray();
            }
        }
        return result;
    }

    /**
     * Handle count: https://www.hl7.org/fhir/search.html#count
     * @param {Object} args
     * @param {Object} options
     * @param {boolean} isStreaming
     * @return {{options: Object}} columns selected and changed options
     */
    handleCountOption({args, options, isStreaming}) {
        /**
         * @type {number}
         */
        const nPerPage = Number(args['_count']);

        // if _getpagesoffset is specified then skip to the page starting with that offset
        if (args['_getpagesoffset']) {
            /**
             * @type {number}
             */
            const pageNumber = Number(args['_getpagesoffset']);
            options['skip'] = pageNumber > 0 ? pageNumber * nPerPage : 0;
        }
        // cap it at searchLimitForIds to avoid running out of memory
        options['limit'] = isStreaming ? nPerPage : Math.min(nPerPage, searchLimitForIds);

        return {options: options};
    }

    /**
     * Handle when the caller pass in _elements: https://www.hl7.org/fhir/search.html#elements
     * @param {Object} args
     * @param {Set} columns
     * @param {string} resourceType
     * @param {Object} options
     * @param {boolean} useAccessIndex
     * @return {{columns:Set, options: Object}} columns selected and changed options
     */
    handleElementsQuery(
        {
            args, columns, resourceType, options,
            // eslint-disable-next-line no-unused-vars
            useAccessIndex
        }
    ) {
        // GET [base]/Observation?_elements=status,date,category
        /**
         * @type {string}
         */
        const properties_to_return_as_csv = args['_elements'];
        /**
         * @type {string[]}
         */
        const properties_to_return_list = properties_to_return_as_csv.split(',');
        if (properties_to_return_list.length > 0) {
            /**
             * @type {import('mongodb').Document}
             */
            const projection = {};
            for (const property of properties_to_return_list) {
                projection[`${property}`] = 1;
                columns.add(property);
            }
            // this is a hack for the CQL Evaluator since it does not request these fields but expects them
            if (resourceType === 'Library') {
                projection['id'] = 1;
                projection['url'] = 1;
            }
            // also exclude _id so if there is a covering index the query can be satisfied from the covering index
            projection['_id'] = 0;
            if (!useAccessIndex || properties_to_return_list.length > 1 || properties_to_return_list[0] !== 'id') {
                // special optimization when only ids are requested so the query can be satisfied by covering index
                // always add meta column, so we can do security checks
                projection['meta.security.system'] = 1;
                projection['meta.security.code'] = 1;
            }
            options['projection'] = projection;
        }

        return {columns: columns, options: options};
    }

    /**
     * handle request to return totals for the query
     * @param {string} resourceType
     * @param {string} base_version
     * @param {boolean|null} useAtlas
     * @param {Object} args
     * @param {Object} query
     * @param {number} maxMongoTimeMS
     * @return {Promise<number>}
     */
    async handleGetTotalsAsync(
        {
            resourceType, base_version, useAtlas,
            args, query, maxMongoTimeMS
        }
    ) {
        // https://www.hl7.org/fhir/search.html#total
        // if _total is passed then calculate the total count for matching records also
        // don't use the options since they set a limit and skip
        if (args['_total'] === 'estimate') {
            return await this.databaseQueryFactory.createQuery(resourceType, base_version, useAtlas)
                .estimatedDocumentCountAsync(query, {maxTimeMS: maxMongoTimeMS});
        } else {
            return await this.databaseQueryFactory.createQuery(resourceType, base_version, useAtlas)
                .exactDocumentCountAsync(query, {maxTimeMS: maxMongoTimeMS});
        }
    }

    /**
     * handles sort: https://www.hl7.org/fhir/search.html#sort
     * @param {Object} args
     * @param {Set} columns
     * @param {Object} options
     * @return {{columns:Set, options: Object}} columns selected and changed options
     */
    handleSortQuery(
        {
            args, columns, options
        }
    ) {
        // GET [base]/Observation?_sort=status,-date,category
        // Each item in the comma separated list is a search parameter, optionally with a '-' prefix.
        // The prefix indicates decreasing order; in its absence, the parameter is applied in increasing order.
        /**
         * @type {string[]}
         */
        const sort_properties_list = Array.isArray(args['_sort']) ? args['_sort'] : args['_sort'].split(',');
        if (sort_properties_list.length > 0) {
            /**
             * @type {import('mongodb').Sort}
             */
            const sort = {};
            /**
             * @type {string}
             */
            for (const sortProperty of sort_properties_list) {
                if (sortProperty.startsWith('-')) {
                    /**
                     * @type {string}
                     */
                    const sortPropertyWithoutMinus = sortProperty.substring(1);
                    sort[`${sortPropertyWithoutMinus}`] = -1;
                    columns.add(sortPropertyWithoutMinus);
                } else {
                    sort[`${sortProperty}`] = 1;
                    columns.add(sortProperty);
                }
            }
            options['sort'] = sort;
        }
        return {columns: columns, options: options};
    }

    /**
     * implements a two-step optimization by first retrieving ids and then requesting the data for those ids
     * @param {string} resourceType
     * @param {string} base_version
     * @param {boolean|null} useAtlas
     * @param {Object} options
     * @param {Object|Object[]} originalQuery
     * @param {Object} query
     * @param {Object} originalOptions
     * @param {number} maxMongoTimeMS
     * @return {Promise<{query: Object, options: Object, originalQuery: (Object|Object[]), originalOptions: Object}>}
     */
    async handleTwoStepSearchOptimizationAsync(
        {
            resourceType,
            base_version,
            useAtlas,
            options,
            originalQuery,
            query,
            originalOptions,
            maxMongoTimeMS
        }
    ) {
        // first get just the ids
        const projection = {};
        projection['_id'] = 0;
        projection['id'] = 1;
        options['projection'] = projection;
        originalQuery = [query];
        originalOptions = [options];
        const sortOption = originalOptions[0] && originalOptions[0].sort ? originalOptions[0].sort : {};

        /**
         * @type {DatabasePartitionedCursor}
         */
        const cursor = await this.databaseQueryFactory.createQuery(
            resourceType, base_version, useAtlas)
            .findAsync(query, options);
        /**
         * @type {import('mongodb').DefaultSchema[]}
         */
        let idResults = await cursor
            .sort(sortOption)
            .maxTimeMS(maxMongoTimeMS)
            .toArray();
        if (idResults.length > 0) {
            // now get the documents for those ids.  We can clear all the other query parameters
            query = idResults.length === 1 ?
                {id: idResults.map((r) => r.id)[0]} :
                {id: {$in: idResults.map((r) => r.id)}};
            // query = getQueryWithSecurityTags(securityTags, query);
            options = {}; // reset options since we'll be looking by id
            originalQuery.push(query);
            originalOptions.push(options);
        } else {
            // no results
            query = null; //no need to query
        }
        return {options, originalQuery, query, originalOptions};
    }

    /**
     * Reads resources from Mongo cursor
     * @param {DatabasePartitionedCursor} cursor
     * @param {string | null} user
     * @param {string | null} scope
     * @param {Object?} args
     * @param {(Object) => Resource} ResourceCreator
     * @param {string} resourceType
     * @param {boolean} useAccessIndex
     * @returns {Promise<Resource[]>}
     */
    async readResourcesFromCursorAsync(
        {
            cursor, user, scope,
            args, ResourceCreator, resourceType,
            useAccessIndex
        }
    ) {
        /**
         * resources to return
         * @type {Resource[]}
         */
        const resources = [];

        // noinspection JSUnresolvedFunction
        /**
         * https://mongodb.github.io/node-mongodb-native/4.5/classes/FindCursor.html#stream
         * https://mongodb.github.io/node-mongodb-native/4.5/interfaces/CursorStreamOptions.html
         * @type {Readable}
         */
        // We do not use the Mongo stream since we can create our own stream below with more control
        // const cursorStream = cursor.stream();

        /**
         * @type {AbortController}
         */
        const ac = new AbortController();

        try {
            // https://mongodb.github.io/node-mongodb-native/4.5/classes/FindCursor.html
            // https://nodejs.org/docs/latest-v16.x/api/stream.html#streams-compatibility-with-async-generators-and-async-iterators
            // https://nodejs.org/docs/latest-v16.x/api/stream.html#additional-notes

            const readableMongoStream = createReadableMongoStream({cursor, signal: ac.signal});
            // readableMongoStream.on('close', () => {
            //     // console.log('Mongo read stream was closed');
            //     // ac.abort();
            // });

            await pipeline(
                readableMongoStream,
                // new ObjectChunker(batchObjectCount),
                new ResourcePreparerTransform(
                    {
                        user, scope, args, ResourceCreator, resourceType, useAccessIndex, signal: ac.signal,
                        resourcePreparer: this.resourcePreparer
                    }
                ),
                // NOTE: do not use an async generator as the last writer otherwise the pipeline will hang
                new Transform({
                    writableObjectMode: true,

                    transform(chunk, encoding, callback) {
                        if (ac.signal.aborted) {
                            callback();
                            return;
                        }
                        resources.push(chunk);
                        callback();
                    }
                }),
            );
        } catch (e) {
            logError(user, e);
            ac.abort();
            throw e;
        }
        // logDebug(user, 'Done with loading resources');
        return resources;
    }

    /**
     * sets cursor batch size based on args or environment variables
     * @param {Object} args
     * @param {DatabasePartitionedCursor} cursorQuery
     * @return {{cursorBatchSize: number, cursorQuery: DatabasePartitionedCursor}}
     */
    setCursorBatchSize({args, cursorQuery}) {
        const cursorBatchSize = args['_cursorBatchSize'] ?
            parseInt(args['_cursorBatchSize']) :
            parseInt(env.MONGO_BATCH_SIZE);
        if (cursorBatchSize > 0) {
            cursorQuery = cursorQuery.batchSize(cursorBatchSize);
        }
        return {cursorBatchSize, cursorQuery};
    }

    /**
     * set default sort options
     * @param {Object} args
     * @param {Object} options
     */
    setDefaultLimit(
        {
            args,
            options
        }
    ) {
        // set a limit so the server does not come down due to volume of data
        if (!args['id'] && !args['_elements']) {
            options['limit'] = limit;
        } else {
            options['limit'] = searchLimitForIds;
        }
    }

    /**
     * sets the index hint
     * @param {string|null} indexHint
     * @param {string} mongoCollectionName
     * @param {Set} columns
     * @param {DatabasePartitionedCursor} cursor
     * @param {string | null} user
     * @return {{cursor: DatabasePartitionedCursor, indexHint: (string|null)}}
     */
    setIndexHint(
        {
            indexHint,
            mongoCollectionName,
            columns,
            cursor,
            user
        }
    ) {
        indexHint = findIndexForFields(mongoCollectionName, Array.from(columns));
        if (indexHint) {
            cursor = cursor.hint(indexHint);
            logDebug(
                user,
                `Using index hint ${indexHint} for columns [${Array.from(columns).join(',')}]`
            );
        }
        return {indexHint, cursor};
    }

    /**
     * Reads resources from Mongo cursor and writes to response
     * @type {object}
     * @param {DatabasePartitionedCursor} cursor
     * @param {string|null} requestId
     * @param {string | null} url
     * @param {function (string | null, number): {entry: {resource: Resource}[]}} fnBundle
     * @param {import('http').ServerResponse} res
     * @param {string | null} user
     * @param {string | null} scope
     * @param {Object|null} args
     * @param {function (?Object): Resource} ResourceCreator
     * @param {string} resourceType
     * @param {boolean} useAccessIndex
     * @param {number} batchObjectCount
     * @returns {Promise<string[]>}
     */
    async streamBundleFromCursorAsync(
        {
            requestId,
            cursor, url, fnBundle,
            res, user, scope,
            args, ResourceCreator, resourceType,
            useAccessIndex,
            batchObjectCount
        }
    ) {
        assertIsValid(requestId);
        /**
         * @type {AbortController}
         */
        const ac = new AbortController();

        /**
         * @type {FhirBundleWriter}
         */
        const fhirBundleWriter = new FhirBundleWriter({fnBundle, url, signal: ac.signal});

        /**
         * @type {{id: string[]}}
         */
        const tracker = {
            id: []
        };

        function onResponseClose() {
            ac.abort();
        }

        // if response is closed then abort the pipeline
        res.on('close', onResponseClose);

        /**
         * @type {HttpResponseWriter}
         */
        const responseWriter = new HttpResponseWriter(
            {
                requestId, response: res, contentType: 'application/fhir+json', signal: ac.signal
            }
        );

        const resourcePreparerTransform = new ResourcePreparerTransform(
            {
                user, scope, args, ResourceCreator, resourceType, useAccessIndex, signal: ac.signal,
                resourcePreparer: this.resourcePreparer
            }
        );
        const resourceIdTracker = new ResourceIdTracker({tracker, signal: ac.signal});

        const objectChunker = new ObjectChunker({chunkSize: batchObjectCount, signal: ac.signal});

        try {
            const readableMongoStream = createReadableMongoStream({cursor, signal: ac.signal});
            // readableMongoStream.on('close', () => {
            //     // console.log('Mongo read stream was closed');
            //     // ac.abort();
            // });
            // https://nodejs.org/docs/latest-v16.x/api/stream.html#streams-compatibility-with-async-generators-and-async-iterators
            await pipeline(
                readableMongoStream,
                objectChunker,
                resourcePreparerTransform,
                resourceIdTracker,
                fhirBundleWriter,
                responseWriter
            );
        } catch (e) {
            logError(user, e);
            ac.abort();
            throw e;
        } finally {
            res.removeListener('close', onResponseClose);
        }
        if (!res.writableEnded) {
            res.end();
        }
        return tracker.id;
    }

    /**
     * Reads resources from Mongo cursor and writes to response
     * @param {DatabasePartitionedCursor} cursor
     * @param {string|null} requestId
     * @param {import('http').ServerResponse} res
     * @param {string | null} user
     * @param {string | null} scope
     * @param {Object|null} args
     * @param {function (?Object): Resource} ResourceCreator
     * @param {string} resourceType
     * @param {boolean} useAccessIndex
     * @param {string} contentType
     * @param {number} batchObjectCount
     * @returns {Promise<string[]>} ids of resources streamed
     */
    async streamResourcesFromCursorAsync(
        {
            requestId,
            cursor,
            res,
            user,
            scope,
            args,
            ResourceCreator,
            resourceType,
            useAccessIndex,
            contentType = 'application/fhir+json',
            batchObjectCount = 1
        }
    ) {
        assertIsValid(requestId);
        /**
         * @type {boolean}
         */
        const useJson = contentType !== fhirContentTypes.ndJson;

        /**
         * @type {{id: *[]}}
         */
        const tracker = {
            id: []
        };

        /**
         * @type {AbortController}
         */
        const ac = new AbortController();

        function onResponseClose() {
            ac.abort();
        }

        // if response is closed then abort the pipeline
        res.on('close', onResponseClose);

        // res.on('error', (err) => {
        //     console.error(err);
        // });
        /**
         * @type {FhirResourceWriter|FhirResourceNdJsonWriter}
         */
        const fhirWriter = useJson ?
            new FhirResourceWriter({signal: ac.signal}) :
            new FhirResourceNdJsonWriter({signal: ac.signal});

        /**
         * @type {HttpResponseWriter}
         */
        const responseWriter = new HttpResponseWriter(
            {
                requestId, response: res, contentType, signal: ac.signal
            }
        );
        /**
         * @type {ResourcePreparerTransform}
         */
        const resourcePreparerTransform = new ResourcePreparerTransform(
            {
                user, scope, args, ResourceCreator, resourceType, useAccessIndex, signal: ac.signal,
                resourcePreparer: this.resourcePreparer
            }
        );
        /**
         * @type {ResourceIdTracker}
         */
        const resourceIdTracker = new ResourceIdTracker({tracker, signal: ac.signal});

        // function sleep(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        // }

        try {
            const readableMongoStream = createReadableMongoStream({cursor, signal: ac.signal});
            // readableMongoStream.on('close', () => {
            //     // console.log('Mongo read stream was closed');
            //     // ac.abort();
            // });

            const objectChunker = new ObjectChunker({chunkSize: batchObjectCount, signal: ac.signal});

            // now setup and run the pipeline
            await pipeline(
                readableMongoStream,
                objectChunker,
                // new Transform({
                //     objectMode: true,
                //     transform(chunk, encoding, callback) {
                //         sleep(60 * 1000).then(callback);
                //     }
                // }),
                resourcePreparerTransform,
                resourceIdTracker,
                fhirWriter,
                responseWriter,
                // res.type(contentType)
            );
        } catch (e) {
            logError(user, e);
            ac.abort();
            throw e;
        } finally {
            res.removeListener('close', onResponseClose);
        }
        if (!res.writableEnded) {
            res.end();
        }
        return tracker.id;
    }

    /**
     * Gets linked patients
     * @param {string} base_version
     * @param {boolean} useAtlas
     * @param {boolean | null} isUser
     * @param {string} fhirPersonId
     * @return {Promise<string[]>}
     */
    async getLinkedPatientsAsync(
        {
            base_version, useAtlas, isUser, fhirPersonId
        }
    ) {
        if (isTrue(env.ENABLE_PATIENT_FILTERING) && isUser) {
            return await this.getPatientIdsByPersonIdentifiersAsync(
                {
                    base_version, useAtlas, fhirPersonId
                });
        }
        return [];
    }
}


module.exports = {
    SearchManager
};
