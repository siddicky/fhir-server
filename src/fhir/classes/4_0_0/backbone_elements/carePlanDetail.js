/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
CarePlan.Detail
    Describes the intention of how one or more practitioners intend to deliver
    care for a particular patient, group or community for a period of time,
    possibly limited to care for a specific condition or set of conditions.
*/
class CarePlanDetail extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code|undefined} [kind],
     * @param {canonical[]|undefined} [instantiatesCanonical],
     * @param {uri[]|undefined} [instantiatesUri],
     * @param {CodeableConcept|undefined} [code],
     * @param {CodeableConcept[]|undefined} [reasonCode],
     * @param {Reference[]|undefined} [reasonReference],
     * @param {Reference[]|undefined} [goal],
     * @param {code} status,
     * @param {CodeableConcept|undefined} [statusReason],
     * @param {Boolean|undefined} [doNotPerform],
     * @param {Timing|undefined} [scheduledTiming],
     * @param {Period|undefined} [scheduledPeriod],
     * @param {String|undefined} [scheduledString],
     * @param {Reference|undefined} [location],
     * @param {Reference[]|undefined} [performer],
     * @param {CodeableConcept|undefined} [productCodeableConcept],
     * @param {Reference|undefined} [productReference],
     * @param {Quantity|undefined} [dailyAmount],
     * @param {Quantity|undefined} [quantity],
     * @param {String|undefined} [description],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            kind,
            instantiatesCanonical,
            instantiatesUri,
            code,
            reasonCode,
            reasonReference,
            goal,
            status,
            statusReason,
            doNotPerform,
            scheduledTiming,
            scheduledPeriod,
            scheduledString,
            location,
            performer,
            productCodeableConcept,
            productReference,
            dailyAmount,
            quantity,
            description,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description None
         * @property {String|undefined}
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
         * @description May be used to represent additional information that is not part of the basic
    definition of the element. To make the use of extensions safe and manageable,
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
    definition of the element and that modifies the understanding of the element
    in which it is contained and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer can define an extension, there is a set of requirements that SHALL
    be met as part of the definition of the extension. Applications processing a
    resource are required to check for modifier extensions.

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
         * @description A description of the kind of resource the in-line definition of a care plan
    activity is representing.  The CarePlan.activity.detail is an in-line
    definition when a resource is not referenced using
    CarePlan.activity.reference.  For example, a MedicationRequest, a
    ServiceRequest, or a CommunicationRequest.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'kind', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.kind,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.kind = valueProvided;
            }
        });

        /**
         * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other
    definition that is adhered to in whole or in part by this CarePlan activity.
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.instantiatesCanonical = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The URL pointing to an externally maintained protocol, guideline,
    questionnaire or other definition that is adhered to in whole or in part by
    this CarePlan activity.
         * @property {uri[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.instantiatesUri = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Detailed description of the type of planned activity; e.g. what lab test, what
    procedure, what kind of encounter.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Provides the rationale that drove the inclusion of this particular activity as
    part of the plan or the reason why the activity was prohibited.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'reasonCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reasonCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.reasonCode = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Indicates another resource, such as the health condition(s), whose existence
    justifies this request and drove the inclusion of this particular activity as
    part of the plan.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'reasonReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reasonReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.reasonReference = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Internal reference that identifies the goals that this activity is intended to
    contribute towards meeting.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'goal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.goal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.goal = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Identifies what progress is being made for the specific activity.
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
         * @description Provides reason why the activity isn't yet started, is on hold, was cancelled,
    etc.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'statusReason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.statusReason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.statusReason = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description If true, indicates that the described activity is one that must NOT be engaged
    in when following the plan.  If false, or missing, indicates that the
    described activity is one that should be engaged in when following the plan.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'doNotPerform', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.doNotPerform,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.doNotPerform = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'scheduledTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.scheduledTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Timing = require('../backbone_elements/timing.js');
                this.__data.scheduledTiming = new Timing(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'scheduledPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.scheduledPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.scheduledPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'scheduledString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.scheduledString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.scheduledString = valueProvided;
            }
        });

        /**
         * @description Identifies the facility where the activity will occur; e.g. home, hospital,
    specific clinic, etc.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'location', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.location,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.location = new Reference(valueProvided);
            }
        });

        /**
         * @description Identifies who's expected to be involved in the activity.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.performer = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'productCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.productCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'productReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.productReference = new Reference(valueProvided);
            }
        });

        /**
         * @description Identifies the quantity expected to be consumed in a given day.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'dailyAmount', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dailyAmount,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.dailyAmount = new Quantity(valueProvided);
            }
        });

        /**
         * @description Identifies the quantity expected to be supplied, administered or consumed by
    the subject.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description This provides a textual description of constraints on the intended activity
    occurrence, including relation to other activities.  It may also include
    objectives, pre-conditions and end-conditions.  Finally, it may convey
    specifics about the activity such as body site, method, route, etc.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            kind,
            instantiatesCanonical,
            instantiatesUri,
            code,
            reasonCode,
            reasonReference,
            goal,
            status,
            statusReason,
            doNotPerform,
            scheduledTiming,
            scheduledPeriod,
            scheduledString,
            location,
            performer,
            productCodeableConcept,
            productReference,
            dailyAmount,
            quantity,
            description,
        });

    }



    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            kind: this.kind,
            instantiatesCanonical: this.instantiatesCanonical,
            instantiatesUri: this.instantiatesUri,
            code: this.code && this.code.toJSON(),
            reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
            reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
            goal: this.goal && this.goal.map(v => v.toJSON()),
            status: this.status,
            statusReason: this.statusReason && this.statusReason.toJSON(),
            doNotPerform: this.doNotPerform,
            scheduledTiming: this.scheduledTiming && this.scheduledTiming.toJSON(),
            scheduledPeriod: this.scheduledPeriod && this.scheduledPeriod.toJSON(),
            scheduledString: this.scheduledString,
            location: this.location && this.location.toJSON(),
            performer: this.performer && this.performer.map(v => v.toJSON()),
            productCodeableConcept: this.productCodeableConcept && this.productCodeableConcept.toJSON(),
            productReference: this.productReference && this.productReference.toJSON(),
            dailyAmount: this.dailyAmount && this.dailyAmount.toJSON(),
            quantity: this.quantity && this.quantity.toJSON(),
            description: this.description,
        });
    }
}

module.exports = CarePlanDetail;
