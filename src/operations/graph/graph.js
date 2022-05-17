const {logRequest, logDebug, logError} = require('../common/logging');
const {
    verifyHasValidScopes
} = require('../security/scopes');
const {isTrue} = require('../../utils/isTrue');
const globals = require('../../globals');
const {CLIENT_DB, AUDIT_EVENT_CLIENT_DB, ATLAS_CLIENT_DB} = require('../../constants');
const {validateResource} = require('../../utils/validator.util');
const {BadRequestError} = require('../../utils/httpErrors');
const {processGraph} = require('./graphHelpers');
const {oldGraph} = require('./oldgraph');
const env = require('var');

/**
 * Supports $graph
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceName
 * @param {string} collection_name
 * @return {Promise<{entry: {resource: Resource, fullUrl: string}[], id: string, resourceType: string}|{entry: *[], id: string, resourceType: string}>}
 */
module.exports.graph = async (requestInfo, args, resourceName, collection_name) => {
    const user = requestInfo.user;
    const scope = requestInfo.scope;
    const path = requestInfo.path;
    const host = requestInfo.host;
    const body = requestInfo.body;

    if (
        isTrue(args['_useOldGraph']) || (isTrue(env.USE_OLD_GRAPH) && !isTrue(args['_useNewGraph']))
    ) {
        return oldGraph(args, user, scope, body, path, host, resourceName, collection_name);
    }

    logRequest(user, `${resourceName} >>> graph`);
    verifyHasValidScopes(resourceName, 'read', user, scope);

    try {
        /**
         * @type {string}
         */
        let {base_version, id} = args;

        logRequest(user, `id=${id}`);

        id = id.split(',');
        /**
         * @type {boolean}
         */
        const contained = isTrue(args['contained']);
        /**
         * @type {boolean}
         */
        const hash_references = isTrue(args['_hash_references']);
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
        let db = (resourceName === 'AuditEvent') ?
            globals.get(AUDIT_EVENT_CLIENT_DB) : (useAtlas && globals.has(ATLAS_CLIENT_DB)) ?
                globals.get(ATLAS_CLIENT_DB) : globals.get(CLIENT_DB);

        // get GraphDefinition from body
        const graphDefinitionRaw = body;
        logDebug(user, '--- validate schema of GraphDefinition ----');
        const operationOutcome = validateResource(graphDefinitionRaw, 'GraphDefinition', path);
        if (operationOutcome && operationOutcome.statusCode === 400) {
            logDebug(user, 'GraphDefinition schema failed validation');
            return operationOutcome;
        }
        // noinspection UnnecessaryLocalVariableJS
        /**
         * @type {{entry: {resource: Resource, fullUrl: string}[], id: string, resourceType: string}|{entry: *[], id: string, resourceType: string}}
         */
        const result = await processGraph(
            requestInfo,
            db,
            collection_name,
            base_version,
            resourceName,
            id,
            graphDefinitionRaw,
            contained,
            hash_references
        );
        // const operationOutcomeResult = validateResource(result, 'Bundle', req.path);
        // if (operationOutcomeResult && operationOutcomeResult.statusCode === 400) {
        //     return operationOutcomeResult;
        // }
        return result;
    } catch (err) {
        logError(user, `Error with ${resourceName}.graph: ${err} `);
        throw new BadRequestError(err);
    }
};
