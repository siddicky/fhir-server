/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
Coverage
    Financial instrument which may be used to reimburse or pay for health care
    products and services. Includes both insurance and self-payment.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Coverage extends Resource {
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
     * @param {CodeableConcept|undefined} [type],
     * @param {Reference|undefined} [policyHolder],
     * @param {Reference|undefined} [subscriber],
     * @param {String|undefined} [subscriberId],
     * @param {Reference} beneficiary,
     * @param {String|undefined} [dependent],
     * @param {CodeableConcept|undefined} [relationship],
     * @param {Period|undefined} [period],
     * @param {Reference[]} payor,
     * @param {CoverageClass[]|undefined} [class_],
     * @param {Int|undefined} [order],
     * @param {String|undefined} [network],
     * @param {CoverageCostToBeneficiary[]|undefined} [costToBeneficiary],
     * @param {Boolean|undefined} [subrogation],
     * @param {Reference[]|undefined} [contract],
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
            type,
            policyHolder,
            subscriber,
            subscriberId,
            beneficiary,
            dependent,
            relationship,
            period,
            payor,
            'class': class_,
            order,
            network,
            costToBeneficiary,
            subrogation,
            contract,
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
         * @description A unique identifier assigned to this coverage.
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
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description The type of coverage: social program, medical plan, accident coverage (workers
    compensation, auto), group health or payment by an individual or organization.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The party who 'owns' the insurance policy.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'policyHolder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.policyHolder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.policyHolder = new Reference(valueProvided);
            }
        });

        /**
         * @description The party who has signed-up for or 'owns' the contractual relationship to the
    policy or to whom the benefit of the policy for services rendered to them or
    their family is due.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'subscriber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subscriber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subscriber = new Reference(valueProvided);
            }
        });

        /**
         * @description The insurer assigned ID for the Subscriber.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'subscriberId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subscriberId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.subscriberId = valueProvided;
            }
        });

        /**
         * @description The party who benefits from the insurance coverage; the patient when products
    and/or services are provided.
         * @property {Reference}
        */
        Object.defineProperty(this, 'beneficiary', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.beneficiary,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.beneficiary = new Reference(valueProvided);
            }
        });

        /**
         * @description A unique identifier for a dependent under the coverage.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'dependent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dependent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.dependent = valueProvided;
            }
        });

        /**
         * @description The relationship of beneficiary (patient) to the subscriber.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'relationship', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relationship,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.relationship = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Time period during which the coverage is in force. A missing start date
    indicates the start date isn't known, a missing end date means the coverage is
    continuing to be in force.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'period', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.period,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.period = new Period(valueProvided);
            }
        });

        /**
         * @description The program or plan underwriter or payor including both insurance and non-
    insurance agreements, such as patient-pay agreements.
         * @property {Reference[]}
        */
        Object.defineProperty(this, 'payor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.payor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.payor = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description A suite of underwriter specific classifiers.
         * @property {CoverageClass[]|undefined}
        */
        Object.defineProperty(this, 'class', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.class,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CoverageClass = require('../backbone_elements/coverageClass.js');
                this.__data.class = Array.isArray(valueProvided) ? valueProvided.map(v => new CoverageClass(v)) : [new CoverageClass(valueProvided)];
            }
        });

        /**
         * @description The order of applicability of this coverage relative to other coverages which
    are currently in force. Note, there may be gaps in the numbering and this does
    not imply primary, secondary etc. as the specific positioning of coverages
    depends upon the episode of care.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'order', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.order,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.order = valueProvided;
            }
        });

        /**
         * @description The insurer-specific identifier for the insurer-defined network of providers
    to which the beneficiary may seek treatment which will be covered at the 'in-
    network' rate, otherwise 'out of network' terms and conditions apply.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'network', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.network,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.network = valueProvided;
            }
        });

        /**
         * @description A suite of codes indicating the cost category and associated amount which have
    been detailed in the policy and may have been  included on the health card.
         * @property {CoverageCostToBeneficiary[]|undefined}
        */
        Object.defineProperty(this, 'costToBeneficiary', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.costToBeneficiary,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CoverageCostToBeneficiary = require('../backbone_elements/coverageCostToBeneficiary.js');
                this.__data.costToBeneficiary = Array.isArray(valueProvided) ? valueProvided.map(v => new CoverageCostToBeneficiary(v)) : [new CoverageCostToBeneficiary(valueProvided)];
            }
        });

        /**
         * @description When 'subrogation=true' this insurance instance has been included not for
    adjudication but to provide insurers with the details to recover costs.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'subrogation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subrogation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.subrogation = valueProvided;
            }
        });

        /**
         * @description The policy(s) which constitute this insurance coverage.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'contract', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contract,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.contract = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
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
            type,
            policyHolder,
            subscriber,
            subscriberId,
            beneficiary,
            dependent,
            relationship,
            period,
            payor,
            'class': class_,
            order,
            network,
            costToBeneficiary,
            subrogation,
            contract,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'Coverage',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'Coverage';
    }

    /**
     * @description Creates a blank new resource
     * @returns {Coverage}
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
     * @param {CodeableConcept|undefined} [type],
     * @param {Reference|undefined} [policyHolder],
     * @param {Reference|undefined} [subscriber],
     * @param {String|undefined} [subscriberId],
     * @param {Reference} beneficiary,
     * @param {String|undefined} [dependent],
     * @param {CodeableConcept|undefined} [relationship],
     * @param {Period|undefined} [period],
     * @param {Reference[]} payor,
     * @param {CoverageClass[]|undefined} [class_],
     * @param {Int|undefined} [order],
     * @param {String|undefined} [network],
     * @param {CoverageCostToBeneficiary[]|undefined} [costToBeneficiary],
     * @param {Boolean|undefined} [subrogation],
     * @param {Reference[]|undefined} [contract],
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
            type,
            policyHolder,
            subscriber,
            subscriberId,
            beneficiary,
            dependent,
            relationship,
            period,
            payor,
            'class': class_,
            order,
            network,
            costToBeneficiary,
            subrogation,
            contract,
        }
    ) {
        return new Coverage({
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
            type,
            policyHolder,
            subscriber,
            subscriberId,
            beneficiary,
            dependent,
            relationship,
            period,
            payor,
            'class': class_,
            order,
            network,
            costToBeneficiary,
            subrogation,
            contract,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Coverage}
    */
    copy() {
        return new Coverage(this.toJSON());
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
            type: this.type && this.type.toJSON(),
            policyHolder: this.policyHolder && this.policyHolder.toJSON(),
            subscriber: this.subscriber && this.subscriber.toJSON(),
            subscriberId: this.subscriberId,
            beneficiary: this.beneficiary && this.beneficiary.toJSON(),
            dependent: this.dependent,
            relationship: this.relationship && this.relationship.toJSON(),
            period: this.period && this.period.toJSON(),
            payor: this.payor && this.payor.map(v => v.toJSON()),
            class: this.class && this.class.map(v => v.toJSON()),
            order: this.order,
            network: this.network,
            costToBeneficiary: this.costToBeneficiary && this.costToBeneficiary.map(v => v.toJSON()),
            subrogation: this.subrogation,
            contract: this.contract && this.contract.map(v => v.toJSON()),
        });
    }
}

module.exports = Coverage;
