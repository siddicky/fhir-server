/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
HumanName
    A human's name with the ability to identify parts and usage.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class HumanName extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {code|undefined} [use],
     * @param {String|undefined} [text],
     * @param {String|undefined} [family],
     * @param {String[]|undefined} [given],
     * @param {String[]|undefined} [prefix],
     * @param {String[]|undefined} [suffix],
     * @param {Period|undefined} [period],
    */
    constructor(
        {
            id,
            extension,
            use,
            text,
            family,
            given,
            prefix,
            suffix,
            period,
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
         * @description Identifies the purpose for this name.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'use', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.use,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.use = undefined;
                    return;
                }
                this.__data.use = valueProvided;
            }
        });

        /**
         * @description Specifies the entire name as it should be displayed e.g. on an application UI.
    This may be provided instead of or as well as the specific parts.
         * @property {String|undefined}
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
                this.__data.text = valueProvided;
            }
        });

        /**
         * @description The part of a name that links to the genealogy. In some cultures (e.g.
    Eritrea) the family name of a son is the first name of his father.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'family', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.family,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.family = undefined;
                    return;
                }
                this.__data.family = valueProvided;
            }
        });

        /**
         * @description Given name.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'given', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.given,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.given = undefined;
                    return;
                }
                this.__data.given = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Part of the name that is acquired as a title due to academic, legal,
    employment or nobility status, etc. and that appears at the start of the name.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'prefix', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.prefix,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.prefix = undefined;
                    return;
                }
                this.__data.prefix = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Part of the name that is acquired as a title due to academic, legal,
    employment or nobility status, etc. and that appears at the end of the name.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'suffix', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.suffix,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.suffix = undefined;
                    return;
                }
                this.__data.suffix = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Indicates the period of time when this name was valid for the named person.
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




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            use,
            text,
            family,
            given,
            prefix,
            suffix,
            period,
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
            use: this.use,
            text: this.text,
            family: this.family,
            given: this.given,
            prefix: this.prefix,
            suffix: this.suffix,
            period: this.period && this.period.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.period) {this.period.updateReferences({fnUpdateReference});}
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
            use: this.use,
            text: this.text,
            family: this.family,
            given: this.given,
            prefix: this.prefix,
            suffix: this.suffix,
            period: this.period && this.period.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = HumanName;
