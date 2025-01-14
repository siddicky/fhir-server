const {validateResource} = require('../../utils/validator.util');
const {validationsFailedCounter} = require('../../utils/prometheus.utils');
const sendToS3 = require('../../utils/aws-s3');
const Resource = require('../../fhir/classes/4_0_0/resources/resource');
const {getCircularReplacer} = require('../../utils/getCircularReplacer');
const {assertTypeEquals} = require('../../utils/assertType');
const {ConfigManager} = require('../../utils/configManager');
const {RemoteFhirValidator} = require('../../utils/remoteFhirValidator');
const OperationOutcomeIssue = require('../../fhir/classes/4_0_0/backbone_elements/operationOutcomeIssue');
const {DatabaseQueryFactory} = require('../../dataLayer/databaseQueryFactory');
const {VERSIONS} = require('../../middleware/fhir/utils/constants');
const {DatabaseUpdateFactory} = require('../../dataLayer/databaseUpdateFactory');
const StructureDefinition = require('../../fhir/classes/4_0_0/resources/structureDefinition');
const {SecurityTagSystem} = require('../../utils/securityTagSystem');
const Meta = require('../../fhir/classes/4_0_0/complex_types/meta');
const Coding = require('../../fhir/classes/4_0_0/complex_types/coding');
const { BadRequestError } = require('../../utils/httpErrors');

class ResourceValidator {
    /**
     * constructor
     * @param {ConfigManager} configManager
     * @param {RemoteFhirValidator} remoteFhirValidator
     * @param {DatabaseQueryFactory} databaseQueryFactory
     * @param {DatabaseUpdateFactory} databaseUpdateFactory
     */
    constructor(
        {
            configManager,
            remoteFhirValidator,
            databaseQueryFactory,
            databaseUpdateFactory
        }
    ) {
        /**
         * @type {ConfigManager}
         */
        this.configManager = configManager;
        assertTypeEquals(configManager, ConfigManager);

        /**
         * @type {RemoteFhirValidator}
         */
        this.remoteFhirValidator = remoteFhirValidator;
        assertTypeEquals(remoteFhirValidator, RemoteFhirValidator);

        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);

        /**
         * @type {DatabaseUpdateFactory}
         */
        this.databaseUpdateFactory = databaseUpdateFactory;
        assertTypeEquals(databaseUpdateFactory, DatabaseUpdateFactory);
    }

    /**
     * validates a resource
     * @param {string} id
     * @param {string} resourceType
     * @param {Object|Resource} resourceToValidate
     * @param {string} path
     * @param {string} currentDate
     * @param {Object} resourceObj
     * @param {boolean|undefined} useRemoteFhirValidatorIfAvailable
     * @param {string|undefined} profile
     * @returns {OperationOutcome | null}
     */
    async validateResourceAsync(
        {
            id,
            resourceType,
            resourceToValidate,
            path,
            currentDate,
            resourceObj = null,
            useRemoteFhirValidatorIfAvailable = false,
            profile
        }
    ) {
        const resourceToValidateJson = (resourceToValidate instanceof Resource) ? resourceToValidate.toJSON() : resourceToValidate;
        /**
         * @type {OperationOutcome | null}
         */
        const validationOperationOutcome = this.configManager.fhirValidationUrl && useRemoteFhirValidatorIfAvailable ?
            await this.validateResourceFromServerAsync(
                {
                    resourceBody: resourceToValidateJson,
                    resourceName: resourceType,
                    path,
                    resourceObj,
                    profile
                }
            ) : validateResource(
                {
                    resourceBody: resourceToValidateJson,
                    resourceName: resourceType,
                    path,
                    resourceObj
                }
            );
        if (validationOperationOutcome) {
            validationsFailedCounter.inc({action: 'validate', resourceType: resourceType}, 1);
            validationOperationOutcome['expression'] = [
                resourceType + '/' + id
            ];
            if (!(validationOperationOutcome['details']) || !(validationOperationOutcome['details']['text'])) {
                validationOperationOutcome['details'] = {
                    text: JSON.stringify(resourceToValidateJson, getCircularReplacer())
                };
            } else {
                validationOperationOutcome['details']['text'] = validationOperationOutcome['details']['text'] +
                    ',' + JSON.stringify(resourceToValidateJson, getCircularReplacer());
            }

            if (this.configManager.logValidationFailures) {
                await sendToS3('validation_failures',
                    resourceType,
                    resourceToValidateJson,
                    currentDate,
                    id,
                    'merge');
                await sendToS3('validation_failures',
                    resourceType,
                    validationOperationOutcome,
                    currentDate,
                    id,
                    'merge_failure');
            }
            return validationOperationOutcome;
        }
        return null;
    }

    /**
     * @function validateResourceFromServerAsync
     * @description - validates name is correct for resource body and resource body conforms to FHIR specification
     * @param {Object} resourceBody - payload of req.body
     * @param {string} resourceName - name of resource in url
     * @param {string} path - req.path from express
     * @param {Object} resourceObj - fhir resource object
     * @param {string|undefined} profile
     * @returns {OperationOutcome|null} Response<null|OperationOutcome> - either null if no errors or response to send client.
     */
    async validateResourceFromServerAsync(
        {
            resourceBody,
            resourceName,
            path,
            resourceObj = null,
            profile
        }) {
        const resourceToValidateJson = (resourceBody instanceof Resource) ? resourceBody.toJSON() : resourceBody;

        if (profile) {
            // see if profile exists in our fhir server already
            /**
             * @type {DatabaseQueryManager}
             */
            const databaseQueryManager = this.databaseQueryFactory.createQuery(
                {resourceType: 'StructureDefinition', base_version: VERSIONS['4_0_0']}
            );
            /**
             * @type {Resource|null}
             */
            const profileResource = await databaseQueryManager.findOneAsync(
                {
                    query: {url: profile}
                }
            );
            if (profileResource) {
                // profile found in our fhir server, so use it
                const profileJson1 = profileResource.toJSON();
                await this.remoteFhirValidator.updateProfileAsync({profileJson: profileJson1});
            } else {
                // profile not found in our fhir server, so fetch from remote fhir server
                const profileJson = await this.remoteFhirValidator
                    .fetchProfileAsync({ url: profile })
                    .catch((error) => {
                        if (error.response && error.response.status === 404) {
                            // handle 404 error
                            throw new BadRequestError(
                                new Error(
                                    `Unable to fetch profile details from passed param profile = '${profile}'`
                                )
                            );
                        } else {
                            throw error;
                        }
                    });
                if (profileJson) {
                    // write to our fhir server
                    /**
                     * @type {StructureDefinition}
                     */
                    const profileResourceNew = new StructureDefinition(profileJson);
                    if (!profileResourceNew.meta) {
                        profileResourceNew.meta = new Meta({});
                    }
                    if (profileResourceNew.meta.security) {
                        profileResourceNew.meta.security.push(
                            new Coding({
                                system: SecurityTagSystem.owner,
                                code: profileResourceNew.publisher || 'profile',
                            })
                        );
                    } else {
                        profileResourceNew.meta.security = [
                            new Coding({
                                system: SecurityTagSystem.owner,
                                code: profileResourceNew.publisher || 'profile',
                            }),
                        ];
                    }
                    if (!profileResourceNew.meta.source) {
                        profileResourceNew.meta.source = profileResourceNew.url;
                    }
                    const databaseUpdateManager =
                        this.databaseUpdateFactory.createDatabaseUpdateManager({
                            resourceType: 'StructureDefinition',
                            base_version: VERSIONS['4_0_0'],
                        });
                    await databaseUpdateManager.replaceOneAsync({
                        doc: profileResourceNew,
                    });
                    await this.remoteFhirValidator.updateProfileAsync({
                        profileJson: profileResourceNew.toJSON(),
                    });
                }
            }
        }
        // first read the profiles specified in the resource and send to fhir validator
        if (resourceToValidateJson.meta && resourceToValidateJson.meta.profile && resourceToValidateJson.meta.profile.length > 0) {
            /**
             * @type {string[]}
             */
            const metaProfiles = resourceToValidateJson.meta.profile;
            for (let i = 0; i < metaProfiles.length; i++) {
                // eslint-disable-next-line security/detect-object-injection
                const metaProfile = metaProfiles[i];
                const profileJson = await this.remoteFhirValidator
                    .fetchProfileAsync({ url: metaProfile })
                    .catch((error) => {
                        if (error.response && error.response.status === 404) {
                            // handle 404 error
                            throw new BadRequestError(
                                new Error(
                                    `Unable to fetch profile details for resource at ${resourceToValidateJson.resourceType}.meta.profile[${i}] = '${metaProfile}'`
                                )
                            );
                        } else {
                            throw error;
                        }
                    });
                if (profileJson) {
                    await this.remoteFhirValidator.updateProfileAsync({ profileJson });
                }
            }
        }
        /**
         * @type {OperationOutcome|null}
         */
        const operationOutcome = await this.remoteFhirValidator.validateResourceAsync(
            {
                resourceBody: resourceToValidateJson,
                resourceName,
                path,
                resourceObj,
                profile
            }
        );
        if (operationOutcome && operationOutcome.issue && operationOutcome.issue.length > 0) {
            // remove any warnings avoid noise
            operationOutcome.issue = operationOutcome.issue.filter(issue => issue.severity === 'error');
        }
        if (!operationOutcome.issue || operationOutcome.issue.length === 0) {
            operationOutcome.issue = new OperationOutcomeIssue({
                'code': 'informational',
                'details': {
                    'text': 'OK'
                },
                'expression': [
                    'Practitioner'
                ],
                'severity': 'information'
            });
        }
        return operationOutcome;
    }

}

module.exports = {
    ResourceValidator
};
