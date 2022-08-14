const {logDebug, logOperationAsync} = require('../common/logging');
const {isTrue} = require('../../utils/isTrue');
const {validateResource} = require('../../utils/validator.util');
const {BadRequestError} = require('../../utils/httpErrors');
const {processGraphAsync} = require('./graphHelpers');
const env = require('var');
const {validationsFailedCounter} = require('../../utils/prometheus.utils');
const {verifyHasValidScopesAsync} = require('../security/scopesValidator');

/**
 * Supports $graph
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceType
 * @return {Promise<{entry: {resource: Resource, fullUrl: string}[], id: string, resourceType: string}|{entry: *[], id: string, resourceType: string}>}
 */
module.exports.graph = async (requestInfo, args, resourceType) => {
    const currentOperationName = 'graph';

    /**
     * @type {number}
     */
    const startTime = Date.now();
    const {user, path, body} = requestInfo;

    await verifyHasValidScopesAsync({
        requestInfo,
        args,
        resourceType,
        startTime,
        action: currentOperationName,
        accessRequested: 'read'
    });

    try {
        /**
         * @type {string}
         */
        let {base_version, id} = args;

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

        // get GraphDefinition from body
        const graphDefinitionRaw = body;
        const operationOutcome = validateResource(graphDefinitionRaw, 'GraphDefinition', path);
        if (operationOutcome && operationOutcome.statusCode === 400) {
            validationsFailedCounter.inc({action: currentOperationName, resourceType}, 1);
            logDebug(user, 'GraphDefinition schema failed validation');
            return operationOutcome;
        }
        // noinspection UnnecessaryLocalVariableJS
        /**
         * @type {{entry: {resource: Resource, fullUrl: string}[], id: string, resourceType: string}|{entry: *[], id: string, resourceType: string}}
         */
        const result = await processGraphAsync(
            requestInfo,
            base_version,
            useAtlas,
            resourceType,
            id,
            graphDefinitionRaw,
            contained,
            hash_references
        );
        // const operationOutcomeResult = validateResource(result, 'Bundle', req.path);
        // if (operationOutcomeResult && operationOutcomeResult.statusCode === 400) {
        //     return operationOutcomeResult;
        // }
        await logOperationAsync({
            requestInfo,
            args,
            resourceType,
            startTime,
            message: 'operationCompleted',
            action: currentOperationName
        });
        return result;
    } catch (err) {
        await logOperationAsync({
            requestInfo,
            args,
            resourceType,
            startTime,
            message: 'operationFailed',
            action: currentOperationName,
            error: err
        });
        throw new BadRequestError(err);
    }
};
