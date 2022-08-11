const {logOperation} = require('../common/logging');
const {validateResource} = require('../../utils/validator.util');
const {doesResourceHaveAccessTags} = require('../security/scopes');
const {validationsFailedCounter} = require('../../utils/prometheus.utils');
/**
 * does a FHIR Validate
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceType
 */
module.exports.validate = async (requestInfo, args, resourceType) => {
    /**
     * @type {number}
     */
    const startTime = Date.now();
    const path = requestInfo.path;

    // no auth check needed to call validate

    let resource_incoming = requestInfo.body;

    const operationOutcome = validateResource(resource_incoming, resourceType, path);
    const currentOperationName = 'validate';
    if (operationOutcome && operationOutcome.statusCode === 400) {
        validationsFailedCounter.inc({action: currentOperationName, resourceType}, 1);
        logOperation({requestInfo, args, resourceType, startTime, message: 'operationCompleted', action: currentOperationName});
        return operationOutcome;
    }

    if (!doesResourceHaveAccessTags(resource_incoming)) {
        return {
            resourceType: 'OperationOutcome',
            issue: [
                {
                    severity: 'error',
                    code: 'invalid',
                    details: {
                        text: 'Resource is missing a security access tag with system: https://www.icanbwell.com/access'
                    },
                    expression: [
                        resourceType
                    ]
                }
            ]
        };
    }
    logOperation({requestInfo, args, resourceType, startTime, message: 'operationCompleted', action: currentOperationName});
    return {
        resourceType: 'OperationOutcome',
        issue: [
            {
                severity: 'information',
                code: 'informational',
                details: {
                    text: 'OK'
                },
                expression: [
                    resourceType
                ]
            }
        ]
    };
};
