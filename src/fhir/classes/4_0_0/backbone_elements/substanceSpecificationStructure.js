/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
SubstanceSpecification.Structure
    The detailed description of a substance, typically at a level beyond what is
    used for prescribing.
*/
class SubstanceSpecificationStructure extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [stereochemistry],
     * @param {CodeableConcept|undefined} [opticalActivity],
     * @param {String|undefined} [molecularFormula],
     * @param {String|undefined} [molecularFormulaByMoiety],
     * @param {SubstanceSpecificationIsotope[]|undefined} [isotope],
     * @param {SubstanceSpecificationMolecularWeight|undefined} [molecularWeight],
     * @param {Reference[]|undefined} [source],
     * @param {SubstanceSpecificationRepresentation[]|undefined} [representation],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            stereochemistry,
            opticalActivity,
            molecularFormula,
            molecularFormulaByMoiety,
            isotope,
            molecularWeight,
            source,
            representation,
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
         * @description Stereochemistry type.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'stereochemistry', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.stereochemistry,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.stereochemistry = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Optical activity type.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'opticalActivity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.opticalActivity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.opticalActivity = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Molecular formula.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'molecularFormula', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.molecularFormula,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.molecularFormula = valueProvided;
            }
        });

        /**
         * @description Specified per moiety according to the Hill system, i.e. first C, then H, then
    alphabetical, each moiety separated by a dot.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'molecularFormulaByMoiety', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.molecularFormulaByMoiety,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.molecularFormulaByMoiety = valueProvided;
            }
        });

        /**
         * @description Applicable for single substances that contain a radionuclide or a non-natural
    isotopic ratio.
         * @property {SubstanceSpecificationIsotope[]|undefined}
        */
        Object.defineProperty(this, 'isotope', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.isotope,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSpecificationIsotope = require('../backbone_elements/substanceSpecificationIsotope.js');
                this.__data.isotope = Array.isArray(valueProvided) ? valueProvided.map(v => new SubstanceSpecificationIsotope(v)) : [new SubstanceSpecificationIsotope(valueProvided)];
            }
        });

        /**
         * @description The molecular weight or weight range (for proteins, polymers or nucleic
    acids).
         * @property {SubstanceSpecificationMolecularWeight|undefined}
        */
        Object.defineProperty(this, 'molecularWeight', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.molecularWeight,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSpecificationMolecularWeight = require('../backbone_elements/substanceSpecificationMolecularWeight.js');
                this.__data.molecularWeight = new SubstanceSpecificationMolecularWeight(valueProvided);
            }
        });

        /**
         * @description Supporting literature.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.source = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Molecular structural representation.
         * @property {SubstanceSpecificationRepresentation[]|undefined}
        */
        Object.defineProperty(this, 'representation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.representation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSpecificationRepresentation = require('../backbone_elements/substanceSpecificationRepresentation.js');
                this.__data.representation = Array.isArray(valueProvided) ? valueProvided.map(v => new SubstanceSpecificationRepresentation(v)) : [new SubstanceSpecificationRepresentation(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            stereochemistry,
            opticalActivity,
            molecularFormula,
            molecularFormulaByMoiety,
            isotope,
            molecularWeight,
            source,
            representation,
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
            stereochemistry: this.stereochemistry && this.stereochemistry.toJSON(),
            opticalActivity: this.opticalActivity && this.opticalActivity.toJSON(),
            molecularFormula: this.molecularFormula,
            molecularFormulaByMoiety: this.molecularFormulaByMoiety,
            isotope: this.isotope && this.isotope.map(v => v.toJSON()),
            molecularWeight: this.molecularWeight && this.molecularWeight.toJSON(),
            source: this.source && this.source.map(v => v.toJSON()),
            representation: this.representation && this.representation.map(v => v.toJSON()),
        });
    }
}

module.exports = SubstanceSpecificationStructure;
