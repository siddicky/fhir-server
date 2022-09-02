/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
MedicinalProductAuthorization
    The regulatory authorization of a medicinal product.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class MedicinalProductAuthorization extends Resource {
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
     * @param {Reference|undefined} [subject],
     * @param {CodeableConcept[]|undefined} [country],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {CodeableConcept|undefined} [status],
     * @param {dateTime|undefined} [statusDate],
     * @param {dateTime|undefined} [restoreDate],
     * @param {Period|undefined} [validityPeriod],
     * @param {Period|undefined} [dataExclusivityPeriod],
     * @param {dateTime|undefined} [dateOfFirstAuthorization],
     * @param {dateTime|undefined} [internationalBirthDate],
     * @param {CodeableConcept|undefined} [legalBasis],
     * @param {MedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined} [jurisdictionalAuthorization],
     * @param {Reference|undefined} [holder],
     * @param {Reference|undefined} [regulator],
     * @param {MedicinalProductAuthorizationProcedure|undefined} [procedure],
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
            subject,
            country,
            jurisdiction,
            status,
            statusDate,
            restoreDate,
            validityPeriod,
            dataExclusivityPeriod,
            dateOfFirstAuthorization,
            internationalBirthDate,
            legalBasis,
            jurisdictionalAuthorization,
            holder,
            regulator,
            procedure,
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
                    return;
                }
                let Meta = require('../complex_types/meta.js');
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
                    return;
                }
                let Narrative = require('../complex_types/narrative.js');
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
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.map(v => {
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Business identifier for the marketing authorization, as assigned by a
    regulator.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The medicinal product that is being authorized.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'subject', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subject,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subject = new Reference(valueProvided);
            }
        });

        /**
         * @description The country in which the marketing authorization has been granted.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'country', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.country,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.country = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Jurisdiction within a country.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'jurisdiction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.jurisdiction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.jurisdiction = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description The status of the marketing authorization.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.status = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The date at which the given status has become applicable.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'statusDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.statusDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.statusDate = valueProvided;
            }
        });

        /**
         * @description The date when a suspended the marketing or the marketing authorization of the
    product is anticipated to be restored.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'restoreDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.restoreDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.restoreDate = valueProvided;
            }
        });

        /**
         * @description The beginning of the time period in which the marketing authorization is in
    the specific status shall be specified A complete date consisting of day,
    month and year shall be specified using the ISO 8601 date format.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'validityPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validityPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.validityPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description A period of time after authorization before generic product applicatiosn can
    be submitted.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'dataExclusivityPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dataExclusivityPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.dataExclusivityPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description The date when the first authorization was granted by a Medicines Regulatory
    Agency.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'dateOfFirstAuthorization', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dateOfFirstAuthorization,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.dateOfFirstAuthorization = valueProvided;
            }
        });

        /**
         * @description Date of first marketing authorization for a company's new medicinal product in
    any country in the World.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'internationalBirthDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.internationalBirthDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.internationalBirthDate = valueProvided;
            }
        });

        /**
         * @description The legal framework against which this authorization is granted.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'legalBasis', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.legalBasis,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.legalBasis = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Authorization in areas within a country.
         * @property {MedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined}
        */
        Object.defineProperty(this, 'jurisdictionalAuthorization', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.jurisdictionalAuthorization,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicinalProductAuthorizationJurisdictionalAuthorization = require('../backbone_elements/medicinalProductAuthorizationJurisdictionalAuthorization.js');
                this.__data.jurisdictionalAuthorization = Array.isArray(valueProvided) ? valueProvided.map(v => new MedicinalProductAuthorizationJurisdictionalAuthorization(v)) : [new MedicinalProductAuthorizationJurisdictionalAuthorization(valueProvided)];
            }
        });

        /**
         * @description Marketing Authorization Holder.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'holder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.holder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.holder = new Reference(valueProvided);
            }
        });

        /**
         * @description Medicines Regulatory Agency.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'regulator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.regulator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.regulator = new Reference(valueProvided);
            }
        });

        /**
         * @description The regulatory procedure for granting or amending a marketing authorization.
         * @property {MedicinalProductAuthorizationProcedure|undefined}
        */
        Object.defineProperty(this, 'procedure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.procedure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicinalProductAuthorizationProcedure = require('../backbone_elements/medicinalProductAuthorizationProcedure.js');
                this.__data.procedure = new MedicinalProductAuthorizationProcedure(valueProvided);
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
            subject,
            country,
            jurisdiction,
            status,
            statusDate,
            restoreDate,
            validityPeriod,
            dataExclusivityPeriod,
            dateOfFirstAuthorization,
            internationalBirthDate,
            legalBasis,
            jurisdictionalAuthorization,
            holder,
            regulator,
            procedure,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'MedicinalProductAuthorization',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'MedicinalProductAuthorization';
    }

    /**
     * @description Creates a blank new resource
     * @returns {MedicinalProductAuthorization}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {Reference|undefined} [subject],
     * @param {CodeableConcept[]|undefined} [country],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {CodeableConcept|undefined} [status],
     * @param {dateTime|undefined} [statusDate],
     * @param {dateTime|undefined} [restoreDate],
     * @param {Period|undefined} [validityPeriod],
     * @param {Period|undefined} [dataExclusivityPeriod],
     * @param {dateTime|undefined} [dateOfFirstAuthorization],
     * @param {dateTime|undefined} [internationalBirthDate],
     * @param {CodeableConcept|undefined} [legalBasis],
     * @param {MedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined} [jurisdictionalAuthorization],
     * @param {Reference|undefined} [holder],
     * @param {Reference|undefined} [regulator],
     * @param {MedicinalProductAuthorizationProcedure|undefined} [procedure],
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
            subject,
            country,
            jurisdiction,
            status,
            statusDate,
            restoreDate,
            validityPeriod,
            dataExclusivityPeriod,
            dateOfFirstAuthorization,
            internationalBirthDate,
            legalBasis,
            jurisdictionalAuthorization,
            holder,
            regulator,
            procedure,
        }
    ) {
        return new MedicinalProductAuthorization({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            subject,
            country,
            jurisdiction,
            status,
            statusDate,
            restoreDate,
            validityPeriod,
            dataExclusivityPeriod,
            dateOfFirstAuthorization,
            internationalBirthDate,
            legalBasis,
            jurisdictionalAuthorization,
            holder,
            regulator,
            procedure,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {MedicinalProductAuthorization}
    */
    copy() {
        return new MedicinalProductAuthorization(this.toJSON());
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
            subject: this.subject && this.subject.toJSON(),
            country: this.country && this.country.map(v => v.toJSON()),
            jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
            status: this.status && this.status.toJSON(),
            statusDate: this.statusDate,
            restoreDate: this.restoreDate,
            validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
            dataExclusivityPeriod: this.dataExclusivityPeriod && this.dataExclusivityPeriod.toJSON(),
            dateOfFirstAuthorization: this.dateOfFirstAuthorization,
            internationalBirthDate: this.internationalBirthDate,
            legalBasis: this.legalBasis && this.legalBasis.toJSON(),
            jurisdictionalAuthorization: this.jurisdictionalAuthorization && this.jurisdictionalAuthorization.map(v => v.toJSON()),
            holder: this.holder && this.holder.toJSON(),
            regulator: this.regulator && this.regulator.toJSON(),
            procedure: this.procedure && this.procedure.toJSON(),
        });
    }
}

module.exports = MedicinalProductAuthorization;
