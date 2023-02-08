/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ObservationDefinition.QuantitativeDetails
    Set of definitional characteristics for a kind of observation or measurement
    produced or consumed by an orderable health care service.
*/
class ObservationDefinitionQuantitativeDetails extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [customaryUnit],
     * @param {CodeableConcept|undefined} [unit],
     * @param {decimal|undefined} [conversionFactor],
     * @param {Int|undefined} [decimalPrecision],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            customaryUnit,
            unit,
            conversionFactor,
            decimalPrecision,
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
         * @description Customary unit used to report quantitative results of observations conforming
    to this ObservationDefinition.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'customaryUnit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.customaryUnit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.customaryUnit = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.customaryUnit = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description SI unit used to report quantitative results of observations conforming to this
    ObservationDefinition.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'unit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unit = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.unit = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Factor for converting value expressed with SI unit to value expressed with
    customary unit.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'conversionFactor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.conversionFactor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.conversionFactor = undefined;
                    return;
                }
                this.__data.conversionFactor = valueProvided;
            }
        });

        /**
         * @description Number of digits after decimal separator when the results of such observations
    are of type Quantity.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'decimalPrecision', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.decimalPrecision,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.decimalPrecision = undefined;
                    return;
                }
                this.__data.decimalPrecision = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            customaryUnit,
            unit,
            conversionFactor,
            decimalPrecision,
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
            customaryUnit: this.customaryUnit && this.customaryUnit.toJSON(),
            unit: this.unit && this.unit.toJSON(),
            conversionFactor: this.conversionFactor,
            decimalPrecision: this.decimalPrecision,
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
            if (this.customaryUnit) {this.customaryUnit.updateReferences({fnUpdateReference});}
            if (this.unit) {this.unit.updateReferences({fnUpdateReference});}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();


        return removeNull(json);
    }
}

module.exports = ObservationDefinitionQuantitativeDetails;
