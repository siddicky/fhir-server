/* eslint-disable no-unused-vars */
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
const {createBundle} = require('./createBundle');
const {constructQuery} = require('./constructQuery');
const {streamResourcesFromCursor} = require('./streamResourcesFromCursor');
const {streamBundleFromCursor} = require('./streamBundleFromCursor');
const {fhirContentTypes} = require('../../utils/contentTypes');


/**
 * does a FHIR Search
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {import('http').ServerResponse} res
 * @param {Object} args
 * @param {string} resourceName
 * @param {string} collection_name
 * @return {Resource[] | {entry:{resource: Resource}[]}} array of resources or a bundle
 */
module.exports.searchStreaming = async (requestInfo, res, args, resourceName, collection_name) => {
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
    let db = (useAtlas && globals.has(ATLAS_CLIENT_DB))
        ? globals.get(ATLAS_CLIENT_DB) : globals.get(CLIENT_DB);
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

        /**
         * @type {number}
         */
        const stopTime = Date.now();

        const useNdJson = requestInfo.accept.includes(fhirContentTypes.ndJson);

        let resourceIds = [];

        if (cursor !== null) { // usually means the two-step optimization found no results
            if (useNdJson) {
                resourceIds = await streamResourcesFromCursor(cursor, res, user, scope, args, Resource, resourceName,
                    fhirContentTypes.ndJson);
            } else {
                // if env.RETURN_BUNDLE is set then return as a Bundle
                if (env.RETURN_BUNDLE || args['_bundle']) {
                    resourceIds = await streamBundleFromCursor(cursor, url,
                        (last_id, stopTime1) => createBundle(
                            url,
                            last_id,
                            [],
                            base_version,
                            total_count,
                            args,
                            originalQuery,
                            mongoCollectionName,
                            originalOptions,
                            columns,
                            stopTime1,
                            startTime,
                            useTwoStepSearchOptimization,
                            indexHint,
                            cursorBatchSize,
                            user,
                            useAtlas
                        ),
                        res, user, scope, args, Resource, resourceName);
                } else {
                    resourceIds = await streamResourcesFromCursor(cursor, res, user, scope, args, Resource, resourceName);
                }
            }
            if (resourceIds.length > 0) {
                if (resourceName !== 'AuditEvent') {
                    // log access to audit logs
                    await logAuditEntry(
                        requestInfo,
                        base_version,
                        resourceName,
                        'read',
                        args,
                        resourceIds
                    );
                }
            }
        } else { // no records found
            if (useNdJson) {
                // empty response
                res.type(fhirContentTypes.ndJson);
                res.status(200).end();
            } else {
                // return empty bundle
                if (env.RETURN_BUNDLE || args['_bundle']) {
                    /**
                     * @type {Resource}
                     */
                    const bundle = createBundle(
                        url,
                        null,
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
                    res.type(fhirContentTypes.fhirJson).json(bundle.toJSON());
                } else {
                    res.type(fhirContentTypes.fhirJson).json([]);
                }
            }
        }
    } catch
        (e) {
        throw new MongoError(e.message, e, mongoCollectionName, query, options);
    }
}
;