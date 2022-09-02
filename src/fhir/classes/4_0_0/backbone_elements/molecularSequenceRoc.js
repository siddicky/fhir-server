/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MolecularSequence.Roc
    Raw data describing a biological sequence.
*/
class MolecularSequenceRoc extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int[]|undefined} [score],
     * @param {Int[]|undefined} [numTP],
     * @param {Int[]|undefined} [numFP],
     * @param {Int[]|undefined} [numFN],
     * @param {decimal[]|undefined} [precision],
     * @param {decimal[]|undefined} [sensitivity],
     * @param {decimal[]|undefined} [fMeasure],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            score,
            numTP,
            numFP,
            numFN,
            precision,
            sensitivity,
            fMeasure,
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
         * @description Invidual data point representing the GQ (genotype quality) score threshold.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'score', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.score,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.score = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The number of true positives if the GQ score threshold was set to "score"
    field value.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'numTP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numTP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.numTP = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The number of false positives if the GQ score threshold was set to "score"
    field value.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'numFP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numFP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.numFP = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The number of false negatives if the GQ score threshold was set to "score"
    field value.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'numFN', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numFN,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.numFN = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Calculated precision if the GQ score threshold was set to "score" field value.
         * @property {decimal[]|undefined}
        */
        Object.defineProperty(this, 'precision', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.precision,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.precision = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Calculated sensitivity if the GQ score threshold was set to "score" field
    value.
         * @property {decimal[]|undefined}
        */
        Object.defineProperty(this, 'sensitivity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sensitivity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.sensitivity = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Calculated fScore if the GQ score threshold was set to "score" field value.
         * @property {decimal[]|undefined}
        */
        Object.defineProperty(this, 'fMeasure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fMeasure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.fMeasure = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            score,
            numTP,
            numFP,
            numFN,
            precision,
            sensitivity,
            fMeasure,
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
            score: this.score,
            numTP: this.numTP,
            numFP: this.numFP,
            numFN: this.numFN,
            precision: this.precision,
            sensitivity: this.sensitivity,
            fMeasure: this.fMeasure,
        });
    }
}

module.exports = MolecularSequenceRoc;
