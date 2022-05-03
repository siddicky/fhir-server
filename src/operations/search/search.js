const globals = require('../../globals');
const {CLIENT_DB, ATLAS_CLIENT_DB} = require('../../constants');
const env = require('var');
const {MongoError} = require('../../utils/mongoErrors');
const {
    verifyHasValidScopes,
} = require('../security/scopes');
const {getResource} = require('../common/getResource');
const {logRequest, logDebug} = require('../common/logging');
const {isTrue} = require('../../utils/isTrue');
const {logAuditEntry} = require('../../utils/auditLogger');
const {searchOld} = require('./searchOld');
const {getCursorForQuery} = require('./getCursorForQuery');
const {readResourcesFromCursor} = require('./readResourcesFromCursor');
const {createBundle} = require('./createBundle');
const {constructQuery} = require('./constructQuery');


/**
 * does a FHIR Search
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceName
 * @param {string} collection_name
 * @return {Resource[] | {entry:{resource: Resource}[]}} array of resources or a bundle
 */
module.exports.search = async (requestInfo, args, resourceName, collection_name) => {
    if (isTrue(env.OLD_SEARCH) || isTrue(args['_useOldSearch'])) {
        return searchOld(requestInfo, args, resourceName, collection_name);
    }
    /**
     * @type {number}
     */
    const startTime = Date.now();
    /**
     * @type {string | null}
     */
    const user = requestInfo.user;
    /**
     * @type {string | null}
     */
    const scope = requestInfo.scope;
    /**
     * @type {string | null}
     */
    const url = requestInfo.originalUrl;
    logRequest(user, resourceName + ' >>> search' + ' scope:' + scope);
    // logRequest('user: ' + req.user);
    // logRequest('scope: ' + req.authInfo.scope);
    verifyHasValidScopes(resourceName, 'read', user, scope);
    logRequest(user, '---- args ----');
    logRequest(user, JSON.stringify(args));
    logRequest(user, '--------');

    let {base_version, query, columns} = constructQuery(user, scope, args, resourceName);

    /**
     * @type {boolean}
     */
    const useAtlas = (isTrue(env.USE_ATLAS) || isTrue(args['_useAtlas']));

    // Grab an instance of our DB and collection
    // noinspection JSValidateTypes
    /**
     * mongo db connection
     * @type {import('mongodb').Db}
     */
    let db = (useAtlas && globals.has(ATLAS_CLIENT_DB)) ? globals.get(ATLAS_CLIENT_DB) : globals.get(CLIENT_DB);
    /**
     * @type {string}
     */
    const mongoCollectionName = `${collection_name}_${base_version}`;
    /**
     * mongo collection
     * @type {import('mongodb').Collection}
     */
    let collection = db.collection(mongoCollectionName);
    /**
     * @type {function(?Object): Resource}
     */
    let Resource = getResource(base_version, resourceName);

    logDebug(user, '---- query ----');
    logDebug(user, JSON.stringify(query));
    logDebug(user, '--------');

    /**
     * @type {import('mongodb').FindOneOptions}
     */
    let options = {};

    // Query our collection for this observation
    /**
     * @type {number}
     */
    const maxMongoTimeMS = env.MONGO_TIMEOUT ? parseInt(env.MONGO_TIMEOUT) : 30 * 1000;

    try {
        const __ret = await getCursorForQuery(args, columns, resourceName, options, query, useAtlas, collection,
            maxMongoTimeMS, user, mongoCollectionName);
        columns = __ret.columns;
        options = __ret.options;
        query = __ret.query;
        let originalQuery = __ret.originalQuery;
        let originalOptions = __ret.originalOptions;
        const useTwoStepSearchOptimization = __ret.useTwoStepSearchOptimization;
        let resources = __ret.resources;
        let total_count = __ret.total_count;
        let indexHint = __ret.indexHint;
        let cursorBatchSize = __ret.cursorBatchSize;
        let cursor = __ret.cursor;

        if (cursor !== null) { // usually means the two-step optimization found no results
            logDebug(user, JSON.stringify(originalQuery) + ' , ' + originalOptions ? JSON.stringify(originalOptions) : null);
            resources = await readResourcesFromCursor(cursor, user, scope, args, Resource, resourceName);

            if (resources.length > 0) {
                if (resourceName !== 'AuditEvent') {
                    // log access to audit logs
                    await logAuditEntry(
                        requestInfo,
                        base_version,
                        resourceName,
                        'read',
                        args,
                        resources.map((r) => r['id'])
                    );
                }
            }
        }

        /**
         * @type {number}
         */
        const stopTime = Date.now();

        // if env.RETURN_BUNDLE is set then return as a Bundle
        if (env.RETURN_BUNDLE || args['_bundle']) {
            /**
             * id of last resource in the list
             * @type {?string}
             */
            const last_id = resources.length > 0 ? resources[resources.length - 1].id : null;
            return createBundle(
                url,
                last_id,
                resources,
                base_version,
                total_count,
                args,
                originalQuery,
                mongoCollectionName,
                originalOptions,
                columns,
                stopTime,
                startTime,
                useTwoStepSearchOptimization,
                indexHint,
                cursorBatchSize,
                user,
                useAtlas
            );
        } else {
            return resources;
        }
    } catch (e) {
        throw new MongoError(e.message, e, mongoCollectionName, query, options);
    }
};
