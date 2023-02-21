/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');


/**
CoverageEligibilityResponse
    This resource provides eligibility and plan details from the processing of an
    CoverageEligibilityRequest resource.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class CoverageEligibilityResponse extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code} status,
     * @param {code[]} purpose,
     * @param {Reference} patient,
     * @param {date|undefined} [servicedDate],
     * @param {Period|undefined} [servicedPeriod],
     * @param {dateTime} created,
     * @param {Reference|undefined} [requestor],
     * @param {Reference} request,
     * @param {code} outcome,
     * @param {String|undefined} [disposition],
     * @param {Reference} insurer,
     * @param {CoverageEligibilityResponseInsurance[]|undefined} [insurance],
     * @param {String|undefined} [preAuthRef],
     * @param {CodeableConcept|undefined} [form],
     * @param {CoverageEligibilityResponseError[]|undefined} [error],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor(
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            purpose,
            patient,
            servicedDate,
            servicedPeriod,
            created,
            requestor,
            request,
            outcome,
            disposition,
            insurer,
            insurance,
            preAuthRef,
            form,
            error,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'id', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.id,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.id = undefined;
                    return;
                }
                this.__data.id = valueProvided;
            }
        });

        /**
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.meta = undefined;
                    return;
                }
                const Meta = require('../complex_types/meta.js');
                this.__data.meta = new Meta(valueProvided);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.implicitRules = undefined;
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.language = undefined;
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
        */
        Object.defineProperty(this, 'text', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.text,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.text = undefined;
                    return;
                }
                const Narrative = require('../complex_types/narrative.js');
                this.__data.text = new Narrative(valueProvided);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contained = undefined;
                    return;
                }
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.filter(v => v).map(v => {
                        const ResourceCreator = getResource('4_0_0', v.resourceType);
                        return new ResourceCreator(v);
                    });
                } else {
                const ResourceCreator = getResource('4_0_0', valueProvided.resourceType);
                this.__data.contained = [new ResourceCreator(valueProvided)];
                }
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
    there is a strict set of governance  applied to the definition and use of
    extensions. Though any implementer can define an extension, there is a set of
    requirements that SHALL be met as part of the definition of the extension.
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'extension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.extension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.extension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

    Modifier extensions SHALL NOT change the meaning of any elements on Resource
    or DomainResource (including cannot change the meaning of modifierExtension
    itself).
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'modifierExtension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.modifierExtension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A unique identifier assigned to this coverage eligiblity request.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.identifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The status of the resource instance.
         * @property {code}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.status = undefined;
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description Code to specify whether requesting: prior authorization requirements for some
    service categories or billing codes; benefits for coverages specified or
    discovered; discovery and return of coverages for the patient; and/or
    validation that the specified coverage is in-force at the date/period
    specified or 'now' if not specified.
         * @property {code[]}
        */
        Object.defineProperty(this, 'purpose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.purpose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.purpose = undefined;
                    return;
                }
                this.__data.purpose = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The party who is the beneficiary of the supplied coverage and for whom
    eligibility is sought.
         * @property {Reference}
        */
        Object.defineProperty(this, 'patient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.patient = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.patient = new Reference(valueProvided);
            }
        });

        /**
         * @description None
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'servicedDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.servicedDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.servicedDate = undefined;
                    return;
                }
                this.__data.servicedDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'servicedPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.servicedPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.servicedPeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.servicedPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description The date this resource was created.
         * @property {dateTime}
        */
        Object.defineProperty(this, 'created', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.created,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.created = undefined;
                    return;
                }
                this.__data.created = valueProvided;
            }
        });

        /**
         * @description The provider which is responsible for the request.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'requestor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestor = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.requestor = new Reference(valueProvided);
            }
        });

        /**
         * @description Reference to the original request resource.
         * @property {Reference}
        */
        Object.defineProperty(this, 'request', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.request,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.request = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.request = new Reference(valueProvided);
            }
        });

        /**
         * @description The outcome of the request processing.
         * @property {code}
        */
        Object.defineProperty(this, 'outcome', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outcome,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.outcome = undefined;
                    return;
                }
                this.__data.outcome = valueProvided;
            }
        });

        /**
         * @description A human readable description of the status of the adjudication.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'disposition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.disposition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.disposition = undefined;
                    return;
                }
                this.__data.disposition = valueProvided;
            }
        });

        /**
         * @description The Insurer who issued the coverage in question and is the author of the
    response.
         * @property {Reference}
        */
        Object.defineProperty(this, 'insurer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.insurer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.insurer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.insurer = new Reference(valueProvided);
            }
        });

        /**
         * @description Financial instruments for reimbursement for the health care products and
    services.
         * @property {CoverageEligibilityResponseInsurance[]|undefined}
        */
        Object.defineProperty(this, 'insurance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.insurance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.insurance = undefined;
                    return;
                }
                const CoverageEligibilityResponseInsurance = require('../backbone_elements/coverageEligibilityResponseInsurance.js');
                this.__data.insurance = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CoverageEligibilityResponseInsurance(v)) : [new CoverageEligibilityResponseInsurance(valueProvided)];
            }
        });

        /**
         * @description A reference from the Insurer to which these services pertain to be used on
    further communication and as proof that the request occurred.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'preAuthRef', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.preAuthRef,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.preAuthRef = undefined;
                    return;
                }
                this.__data.preAuthRef = valueProvided;
            }
        });

        /**
         * @description A code for the form to be used for printing the content.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'form', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.form,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.form = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.form = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Errors encountered during the processing of the request.
         * @property {CoverageEligibilityResponseError[]|undefined}
        */
        Object.defineProperty(this, 'error', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.error,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.error = undefined;
                    return;
                }
                const CoverageEligibilityResponseError = require('../backbone_elements/coverageEligibilityResponseError.js');
                this.__data.error = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CoverageEligibilityResponseError(v)) : [new CoverageEligibilityResponseError(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            purpose,
            patient,
            servicedDate,
            servicedPeriod,
            created,
            requestor,
            request,
            outcome,
            disposition,
            insurer,
            insurance,
            preAuthRef,
            form,
            error,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'CoverageEligibilityResponse',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType() {
        return 'CoverageEligibilityResponse';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code} status,
     * @param {code[]} purpose,
     * @param {Reference} patient,
     * @param {date|undefined} [servicedDate],
     * @param {Period|undefined} [servicedPeriod],
     * @param {dateTime} created,
     * @param {Reference|undefined} [requestor],
     * @param {Reference} request,
     * @param {code} outcome,
     * @param {String|undefined} [disposition],
     * @param {Reference} insurer,
     * @param {CoverageEligibilityResponseInsurance[]|undefined} [insurance],
     * @param {String|undefined} [preAuthRef],
     * @param {CodeableConcept|undefined} [form],
     * @param {CoverageEligibilityResponseError[]|undefined} [error],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {CoverageEligibilityResponse}
    */
    create(
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            purpose,
            patient,
            servicedDate,
            servicedPeriod,
            created,
            requestor,
            request,
            outcome,
            disposition,
            insurer,
            insurance,
            preAuthRef,
            form,
            error,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new CoverageEligibilityResponse({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            purpose,
            patient,
            servicedDate,
            servicedPeriod,
            created,
            requestor,
            request,
            outcome,
            disposition,
            insurer,
            insurance,
            preAuthRef,
            form,
            error,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {CoverageEligibilityResponse}
    */
    clone() {
        return new CoverageEligibilityResponse(this.toJSONInternal());
    }


    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            status: this.status,
            purpose: this.purpose,
            patient: this.patient && this.patient.toJSON(),
            servicedDate: this.servicedDate,
            servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
            created: this.created,
            requestor: this.requestor && this.requestor.toJSON(),
            request: this.request && this.request.toJSON(),
            outcome: this.outcome,
            disposition: this.disposition,
            insurer: this.insurer && this.insurer.toJSON(),
            insurance: this.insurance && this.insurance.map(v => v.toJSON()),
            preAuthRef: this.preAuthRef,
            form: this.form && this.form.toJSON(),
            error: this.error && this.error.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.meta) {await this.meta.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.text) {await this.text.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.contained) { async.each(this.contained, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.extension) { async.each(this.extension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.identifier) { async.each(this.identifier, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.patient) {await this.patient.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.servicedPeriod) {await this.servicedPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.requestor) {await this.requestor.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.request) {await this.request.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.insurer) {await this.insurer.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.insurance) { async.each(this.insurance, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.form) {await this.form.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.error) { async.each(this.error, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            status: this.status,
            purpose: this.purpose,
            patient: this.patient && this.patient.toJSONInternal(),
            servicedDate: this.servicedDate,
            servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSONInternal(),
            created: this.created,
            requestor: this.requestor && this.requestor.toJSONInternal(),
            request: this.request && this.request.toJSONInternal(),
            outcome: this.outcome,
            disposition: this.disposition,
            insurer: this.insurer && this.insurer.toJSONInternal(),
            insurance: this.insurance && this.insurance.map(v => v.toJSONInternal()),
            preAuthRef: this.preAuthRef,
            form: this.form && this.form.toJSONInternal(),
            error: this.error && this.error.map(v => v.toJSONInternal()),
        };


        if (this._access) {
            json._access = this._access;
        }
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = CoverageEligibilityResponse;
