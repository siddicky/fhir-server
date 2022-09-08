/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ObservationDefinition.QualifiedInterval
    Set of definitional characteristics for a kind of observation or measurement
    produced or consumed by an orderable health care service.
*/
class ObservationDefinitionQualifiedInterval extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code|undefined} [category],
     * @param {Range|undefined} [range],
     * @param {CodeableConcept|undefined} [context],
     * @param {CodeableConcept[]|undefined} [appliesTo],
     * @param {code|undefined} [gender],
     * @param {Range|undefined} [age],
     * @param {Range|undefined} [gestationalAge],
     * @param {String|undefined} [condition],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            category,
            range,
            context,
            appliesTo,
            gender,
            age,
            gestationalAge,
            condition,
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
         * @description The category of interval of values for continuous or ordinal observations
    conforming to this ObservationDefinition.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'category', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.category,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.category = valueProvided;
            }
        });

        /**
         * @description The low and high values determining the interval. There may be only one of the
    two.
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'range', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.range,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.range = new Range(valueProvided);
            }
        });

        /**
         * @description Codes to indicate the health context the range applies to. For example, the
    normal or therapeutic range.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'context', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.context,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.context = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Codes to indicate the target population this reference range applies to.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'appliesTo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.appliesTo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.appliesTo = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Sex of the population the range applies to.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'gender', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.gender,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.gender = valueProvided;
            }
        });

        /**
         * @description The age at which this reference range is applicable. This is a neonatal age
    (e.g. number of weeks at term) if the meaning says so.
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'age', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.age,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.age = new Range(valueProvided);
            }
        });

        /**
         * @description The gestational age to which this reference range is applicable, in the
    context of pregnancy.
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'gestationalAge', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.gestationalAge,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.gestationalAge = new Range(valueProvided);
            }
        });

        /**
         * @description Text based condition for which the reference range is valid.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.condition = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            category,
            range,
            context,
            appliesTo,
            gender,
            age,
            gestationalAge,
            condition,
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
            category: this.category,
            range: this.range && this.range.toJSON(),
            context: this.context && this.context.toJSON(),
            appliesTo: this.appliesTo && this.appliesTo.map(v => v.toJSON()),
            gender: this.gender,
            age: this.age && this.age.toJSON(),
            gestationalAge: this.gestationalAge && this.gestationalAge.toJSON(),
            condition: this.condition,
        });
    }
}

module.exports = ObservationDefinitionQualifiedInterval;