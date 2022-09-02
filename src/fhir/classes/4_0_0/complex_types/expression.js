/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Expression
    A expression that is evaluated in a specified context and returns a value. The
    context of use of the expression must specify the context in which the
    expression is evaluated, and how the result of the expression is used.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Expression extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {String|undefined} [description],
     * @param {id|undefined} [name],
     * @param {code} language,
     * @param {String|undefined} [expression],
     * @param {uri|undefined} [reference],
    */
    constructor(
        {
            id,
            extension,
            description,
            name,
            language,
            expression,
            reference,
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
         * @description A brief, natural language description of the condition that effectively
    communicates the intended semantics.
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

        /**
         * @description A short name assigned to the expression to allow for multiple reuse of the
    expression in the context where it is defined.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description The media type of the language for the expression.
         * @property {code}
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
         * @description An expression in the specified language that returns a value.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'expression', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.expression,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.expression = valueProvided;
            }
        });

        /**
         * @description A URI that defines where the expression is found.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'reference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.reference = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            description,
            name,
            language,
            expression,
            reference,
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
            description: this.description,
            name: this.name,
            language: this.language,
            expression: this.expression,
            reference: this.reference,
        });
    }
}

module.exports = Expression;
