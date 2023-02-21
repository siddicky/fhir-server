/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
MedicinalProductIngredient.Strength
    An ingredient of a manufactured item or pharmaceutical product.
*/
class MedicinalProductIngredientStrength extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Ratio} presentation,
     * @param {Ratio|undefined} [presentationLowLimit],
     * @param {Ratio|undefined} [concentration],
     * @param {Ratio|undefined} [concentrationLowLimit],
     * @param {String|undefined} [measurementPoint],
     * @param {CodeableConcept[]|undefined} [country],
     * @param {MedicinalProductIngredientReferenceStrength[]|undefined} [referenceStrength],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            presentation,
            presentationLowLimit,
            concentration,
            concentrationLowLimit,
            measurementPoint,
            country,
            referenceStrength,
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
         * @description The quantity of substance in the unit of presentation, or in the volume (or
    mass) of the single pharmaceutical product or manufactured item.
         * @property {Ratio}
        */
        Object.defineProperty(this, 'presentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.presentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.presentation = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.presentation = new Ratio(valueProvided);
            }
        });

        /**
         * @description A lower limit for the quantity of substance in the unit of presentation. For
    use when there is a range of strengths, this is the lower limit, with the
    presentation attribute becoming the upper limit.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'presentationLowLimit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.presentationLowLimit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.presentationLowLimit = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.presentationLowLimit = new Ratio(valueProvided);
            }
        });

        /**
         * @description The strength per unitary volume (or mass).
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'concentration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.concentration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.concentration = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.concentration = new Ratio(valueProvided);
            }
        });

        /**
         * @description A lower limit for the strength per unitary volume (or mass), for when there is
    a range. The concentration attribute then becomes the upper limit.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'concentrationLowLimit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.concentrationLowLimit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.concentrationLowLimit = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.concentrationLowLimit = new Ratio(valueProvided);
            }
        });

        /**
         * @description For when strength is measured at a particular point or distance.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'measurementPoint', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.measurementPoint,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.measurementPoint = undefined;
                    return;
                }
                this.__data.measurementPoint = valueProvided;
            }
        });

        /**
         * @description The country or countries for which the strength range applies.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'country', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.country,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.country = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.country = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Strength expressed in terms of a reference substance.
         * @property {MedicinalProductIngredientReferenceStrength[]|undefined}
        */
        Object.defineProperty(this, 'referenceStrength', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceStrength,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceStrength = undefined;
                    return;
                }
                const MedicinalProductIngredientReferenceStrength = require('../backbone_elements/medicinalProductIngredientReferenceStrength.js');
                this.__data.referenceStrength = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicinalProductIngredientReferenceStrength(v)) : [new MedicinalProductIngredientReferenceStrength(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            presentation,
            presentationLowLimit,
            concentration,
            concentrationLowLimit,
            measurementPoint,
            country,
            referenceStrength,
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
            presentation: this.presentation && this.presentation.toJSON(),
            presentationLowLimit: this.presentationLowLimit && this.presentationLowLimit.toJSON(),
            concentration: this.concentration && this.concentration.toJSON(),
            concentrationLowLimit: this.concentrationLowLimit && this.concentrationLowLimit.toJSON(),
            measurementPoint: this.measurementPoint,
            country: this.country && this.country.map(v => v.toJSON()),
            referenceStrength: this.referenceStrength && this.referenceStrength.map(v => v.toJSON()),
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
            if (this.presentation) {await this.presentation.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.presentationLowLimit) {await this.presentationLowLimit.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.concentration) {await this.concentration.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.concentrationLowLimit) {await this.concentrationLowLimit.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.country) { async.each(this.country, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.referenceStrength) { async.each(this.referenceStrength, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
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
            presentation: this.presentation && this.presentation.toJSONInternal(),
            presentationLowLimit: this.presentationLowLimit && this.presentationLowLimit.toJSONInternal(),
            concentration: this.concentration && this.concentration.toJSONInternal(),
            concentrationLowLimit: this.concentrationLowLimit && this.concentrationLowLimit.toJSONInternal(),
            measurementPoint: this.measurementPoint,
            country: this.country && this.country.map(v => v.toJSONInternal()),
            referenceStrength: this.referenceStrength && this.referenceStrength.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = MedicinalProductIngredientStrength;
