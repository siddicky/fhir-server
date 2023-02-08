/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
SubstancePolymer.Repeat
    Todo.
*/
class SubstancePolymerRepeat extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int|undefined} [numberOfUnits],
     * @param {String|undefined} [averageMolecularFormula],
     * @param {CodeableConcept|undefined} [repeatUnitAmountType],
     * @param {SubstancePolymerRepeatUnit[]|undefined} [repeatUnit],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            numberOfUnits,
            averageMolecularFormula,
            repeatUnitAmountType,
            repeatUnit,
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
         * @description Todo.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'numberOfUnits', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numberOfUnits,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.numberOfUnits = undefined;
                    return;
                }
                this.__data.numberOfUnits = valueProvided;
            }
        });

        /**
         * @description Todo.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'averageMolecularFormula', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.averageMolecularFormula,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.averageMolecularFormula = undefined;
                    return;
                }
                this.__data.averageMolecularFormula = valueProvided;
            }
        });

        /**
         * @description Todo.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'repeatUnitAmountType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.repeatUnitAmountType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.repeatUnitAmountType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.repeatUnitAmountType = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Todo.
         * @property {SubstancePolymerRepeatUnit[]|undefined}
        */
        Object.defineProperty(this, 'repeatUnit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.repeatUnit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.repeatUnit = undefined;
                    return;
                }
                const SubstancePolymerRepeatUnit = require('../backbone_elements/substancePolymerRepeatUnit.js');
                this.__data.repeatUnit = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new SubstancePolymerRepeatUnit(v)) : [new SubstancePolymerRepeatUnit(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            numberOfUnits,
            averageMolecularFormula,
            repeatUnitAmountType,
            repeatUnit,
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
            numberOfUnits: this.numberOfUnits,
            averageMolecularFormula: this.averageMolecularFormula,
            repeatUnitAmountType: this.repeatUnitAmountType && this.repeatUnitAmountType.toJSON(),
            repeatUnit: this.repeatUnit && this.repeatUnit.map(v => v.toJSON()),
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
            if (this.repeatUnitAmountType) {this.repeatUnitAmountType.updateReferences({fnUpdateReference});}
            if (this.repeatUnit) {this.repeatUnit.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = SubstancePolymerRepeat;
