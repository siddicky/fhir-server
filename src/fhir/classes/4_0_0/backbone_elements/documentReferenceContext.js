/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
DocumentReference.Context
    A reference to a document of any kind for any purpose. Provides metadata about
    the document so that the document can be discovered and managed. The scope of
    a document is any seralized object with a mime-type, so includes formal
    patient centric documents (CDA), cliical notes, scanned paper, and non-patient
    specific documents like policy text.
*/
class DocumentReferenceContext extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference[]|undefined} [encounter],
     * @param {CodeableConcept[]|undefined} [event],
     * @param {Period|undefined} [period],
     * @param {CodeableConcept|undefined} [facilityType],
     * @param {CodeableConcept|undefined} [practiceSetting],
     * @param {Reference|undefined} [sourcePatientInfo],
     * @param {Reference[]|undefined} [related],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            encounter,
            event,
            period,
            facilityType,
            practiceSetting,
            sourcePatientInfo,
            related,
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
                    this.__data.id = undefined;
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
                    this.__data.extension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Describes the clinical encounter or type of care that the document content is
    associated with.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'encounter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.encounter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.encounter = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.encounter = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description This list of codes represents the main clinical acts, such as a colonoscopy or
    an appendectomy, being documented. In some cases, the event is inherent in the
    type Code, such as a "History and Physical Report" in which the procedure
    being documented is necessarily a "History and Physical" act.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'event', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.event,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.event = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.event = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description The time period over which the service that is described by the document was
    provided.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'period', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.period,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.period = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.period = new Period(valueProvided);
            }
        });

        /**
         * @description The kind of facility where the patient was seen.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'facilityType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.facilityType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.facilityType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.facilityType = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description This property may convey specifics about the practice setting where the
    content was created, often reflecting the clinical specialty.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'practiceSetting', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.practiceSetting,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.practiceSetting = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.practiceSetting = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The Patient Information as known when the document was published. May be a
    reference to a version specific, or contained.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'sourcePatientInfo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourcePatientInfo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourcePatientInfo = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.sourcePatientInfo = new Reference(valueProvided);
            }
        });

        /**
         * @description Related identifiers or resources associated with the DocumentReference.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'related', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.related,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.related = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.related = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            encounter,
            event,
            period,
            facilityType,
            practiceSetting,
            sourcePatientInfo,
            related,
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
            encounter: this.encounter && this.encounter.map(v => v.toJSON()),
            event: this.event && this.event.map(v => v.toJSON()),
            period: this.period && this.period.toJSON(),
            facilityType: this.facilityType && this.facilityType.toJSON(),
            practiceSetting: this.practiceSetting && this.practiceSetting.toJSON(),
            sourcePatientInfo: this.sourcePatientInfo && this.sourcePatientInfo.toJSON(),
            related: this.related && this.related.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.encounter) {this.encounter.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.event) {this.event.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.period) {this.period.updateReferences({fnUpdateReference});}
            if (this.facilityType) {this.facilityType.updateReferences({fnUpdateReference});}
            if (this.practiceSetting) {this.practiceSetting.updateReferences({fnUpdateReference});}
            if (this.sourcePatientInfo) {this.sourcePatientInfo.updateReferences({fnUpdateReference});}
            if (this.related) {this.related.forEach(v => v.updateReferences({fnUpdateReference}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            encounter: this.encounter && this.encounter.map(v => v.toJSONInternal()),
            event: this.event && this.event.map(v => v.toJSONInternal()),
            period: this.period && this.period.toJSONInternal(),
            facilityType: this.facilityType && this.facilityType.toJSONInternal(),
            practiceSetting: this.practiceSetting && this.practiceSetting.toJSONInternal(),
            sourcePatientInfo: this.sourcePatientInfo && this.sourcePatientInfo.toJSONInternal(),
            related: this.related && this.related.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = DocumentReferenceContext;
