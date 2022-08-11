const {logOperation} = require('../common/logging');
const practitionerEverythingGraph = require('../../graphs/practitioner/everything.json');
const organizationEverythingGraph = require('../../graphs/organization/everything.json');
const slotEverythingGraph = require('../../graphs/slot/everything.json');
const {BadRequestError} = require('../../utils/httpErrors');
const {graph} = require('../graph/graph');
const {verifyHasValidScopes} = require('../security/scopesValidator');
/**
 * does a FHIR $everything
 * @param {import('../../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceType
 */
module.exports.everything = async (requestInfo, args, resourceType) => {
    const currentOperationName = 'everything';
    /**
     * @type {number}
     */
    const startTime = Date.now();
    verifyHasValidScopes({
        requestInfo,
        args,
        resourceType,
        startTime,
        action: currentOperationName,
        accessRequested: 'read'
    });

    try {
        let {id} = args;

        let query = {};
        query.id = id;
        // Grab an instance of our DB and collection
        if (resourceType === 'Practitioner') {
            requestInfo.body = practitionerEverythingGraph;
            const result = await graph(requestInfo, args, resourceType);
            logOperation({
                requestInfo,
                args,
                resourceType,
                startTime,
                message: 'operationCompleted',
                action: currentOperationName
            });
            return result;
        } else if (resourceType === 'Organization') {
            requestInfo.body = organizationEverythingGraph;
            const result = await graph(requestInfo, args, resourceType);
            logOperation({
                requestInfo,
                args,
                resourceType,
                startTime,
                message: 'operationCompleted',
                action: currentOperationName
            });
            return result;
        } else if (resourceType === 'Slot') {
            requestInfo.body = slotEverythingGraph;
            const result = await graph(requestInfo, args, resourceType);
            logOperation({
                requestInfo,
                args,
                resourceType,
                startTime,
                message: 'operationCompleted',
                action: currentOperationName
            });
            return result;
        } else {
            // noinspection ExceptionCaughtLocallyJS
            throw new Error('$everything is not supported for resource: ' + resourceType);
        }
    } catch (err) {
        logOperation({
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
