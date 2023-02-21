/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
Specimen.Container
    A sample to be used for analysis.
*/
class SpecimenContainer extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {String|undefined} [description],
     * @param {CodeableConcept|undefined} [type],
     * @param {Quantity|undefined} [capacity],
     * @param {Quantity|undefined} [specimenQuantity],
     * @param {CodeableConcept|undefined} [additiveCodeableConcept],
     * @param {Reference|undefined} [additiveReference],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            identifier,
            description,
            type,
            capacity,
            specimenQuantity,
            additiveCodeableConcept,
            additiveReference,
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
         * @description Id for container. There may be multiple; a manufacturer's bar code, lab
    assigned identifier, etc. The container ID may differ from the specimen id in
    some circumstances.
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
         * @description Textual description of the container.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description The type of container associated with the specimen (e.g. slide, aliquot,
    etc.).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The capacity (volume or other measure) the container may contain.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'capacity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.capacity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.capacity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.capacity = new Quantity(valueProvided);
            }
        });

        /**
         * @description The quantity of specimen in the container; may be volume, dimensions, or other
    appropriate measurements, depending on the specimen type.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'specimenQuantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specimenQuantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.specimenQuantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.specimenQuantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'additiveCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additiveCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additiveCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.additiveCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'additiveReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additiveReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additiveReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.additiveReference = new Reference(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            description,
            type,
            capacity,
            specimenQuantity,
            additiveCodeableConcept,
            additiveReference,
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            description: this.description,
            type: this.type && this.type.toJSON(),
            capacity: this.capacity && this.capacity.toJSON(),
            specimenQuantity: this.specimenQuantity && this.specimenQuantity.toJSON(),
            additiveCodeableConcept: this.additiveCodeableConcept && this.additiveCodeableConcept.toJSON(),
            additiveReference: this.additiveReference && this.additiveReference.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.identifier) { async.each(this.identifier, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.capacity) {await this.capacity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.specimenQuantity) {await this.specimenQuantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.additiveCodeableConcept) {await this.additiveCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.additiveReference) {await this.additiveReference.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            description: this.description,
            type: this.type && this.type.toJSONInternal(),
            capacity: this.capacity && this.capacity.toJSONInternal(),
            specimenQuantity: this.specimenQuantity && this.specimenQuantity.toJSONInternal(),
            additiveCodeableConcept: this.additiveCodeableConcept && this.additiveCodeableConcept.toJSONInternal(),
            additiveReference: this.additiveReference && this.additiveReference.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = SpecimenContainer;
