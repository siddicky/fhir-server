/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Population
    A populatioof people with some set of grouping criteria.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Population extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Range|undefined} [ageRange],
     * @param {CodeableConcept|undefined} [ageCodeableConcept],
     * @param {CodeableConcept|undefined} [gender],
     * @param {CodeableConcept|undefined} [race],
     * @param {CodeableConcept|undefined} [physiologicalCondition],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            ageRange,
            ageCodeableConcept,
            gender,
            race,
            physiologicalCondition,
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
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'ageRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ageRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ageRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                this.__data.ageRange = new Range(valueProvided);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'ageCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ageCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ageCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.ageCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The gender of the specific population.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'gender', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.gender,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.gender = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.gender = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Race of the specific population.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'race', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.race,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.race = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.race = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The existing physiological conditions of the specific population to which this
    applies.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'physiologicalCondition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.physiologicalCondition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.physiologicalCondition = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.physiologicalCondition = new CodeableConcept(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            ageRange,
            ageCodeableConcept,
            gender,
            race,
            physiologicalCondition,
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
            ageRange: this.ageRange && this.ageRange.toJSON(),
            ageCodeableConcept: this.ageCodeableConcept && this.ageCodeableConcept.toJSON(),
            gender: this.gender && this.gender.toJSON(),
            race: this.race && this.race.toJSON(),
            physiologicalCondition: this.physiologicalCondition && this.physiologicalCondition.toJSON(),
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
            if (this.ageRange) {this.ageRange.updateReferences({fnUpdateReference});}
            if (this.ageCodeableConcept) {this.ageCodeableConcept.updateReferences({fnUpdateReference});}
            if (this.gender) {this.gender.updateReferences({fnUpdateReference});}
            if (this.race) {this.race.updateReferences({fnUpdateReference});}
            if (this.physiologicalCondition) {this.physiologicalCondition.updateReferences({fnUpdateReference});}
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
            ageRange: this.ageRange && this.ageRange.toJSONInternal(),
            ageCodeableConcept: this.ageCodeableConcept && this.ageCodeableConcept.toJSONInternal(),
            gender: this.gender && this.gender.toJSONInternal(),
            race: this.race && this.race.toJSONInternal(),
            physiologicalCondition: this.physiologicalCondition && this.physiologicalCondition.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = Population;
