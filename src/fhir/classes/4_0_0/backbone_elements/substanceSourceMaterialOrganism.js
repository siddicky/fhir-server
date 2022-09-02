/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
SubstanceSourceMaterial.Organism
    Source material shall capture information on the taxonomic and anatomical
    origins as well as the fraction of a material that can result in or can be
    modified to form a substance. This set of data elements shall be used to
    define polymer substances isolated from biological matrices. Taxonomic and
    anatomical origins shall be described using a controlled vocabulary as
    required. This information is captured for naturally derived polymers ( .
    starch) and structurally diverse substances. For Organisms belonging to the
    Kingdom Plantae the Substance level defines the fresh material of a single
    species or infraspecies, the Herbal Drug and the Herbal preparation. For
    Herbal preparations, the fraction information will be captured at the
    Substance information level and additional information for herbal extracts
    will be captured at the Specified Substance Group 1 information level. See for
    further explanation the Substance Class: Structurally Diverse and the herbal
    annex.
*/
class SubstanceSourceMaterialOrganism extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [family],
     * @param {CodeableConcept|undefined} [genus],
     * @param {CodeableConcept|undefined} [species],
     * @param {CodeableConcept|undefined} [intraspecificType],
     * @param {String|undefined} [intraspecificDescription],
     * @param {SubstanceSourceMaterialAuthor[]|undefined} [author],
     * @param {SubstanceSourceMaterialHybrid|undefined} [hybrid],
     * @param {SubstanceSourceMaterialOrganismGeneral|undefined} [organismGeneral],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            family,
            genus,
            species,
            intraspecificType,
            intraspecificDescription,
            author,
            hybrid,
            organismGeneral,
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
         * @description The family of an organism shall be specified.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'family', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.family,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.family = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The genus of an organism shall be specified; refers to the Latin epithet of
    the genus element of the plant/animal scientific name; it is present in names
    for genera, species and infraspecies.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'genus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.genus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.genus = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The species of an organism shall be specified; refers to the Latin epithet of
    the species of the plant/animal; it is present in names for species and
    infraspecies.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'species', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.species,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.species = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The Intraspecific type of an organism shall be specified.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'intraspecificType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.intraspecificType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.intraspecificType = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The intraspecific description of an organism shall be specified based on a
    controlled vocabulary. For Influenza Vaccine, the intraspecific description
    shall contain the syntax of the antigen in line with the WHO convention.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'intraspecificDescription', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.intraspecificDescription,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.intraspecificDescription = valueProvided;
            }
        });

        /**
         * @description 4.9.13.6.1 Author type (Conditional).
         * @property {SubstanceSourceMaterialAuthor[]|undefined}
        */
        Object.defineProperty(this, 'author', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.author,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSourceMaterialAuthor = require('../backbone_elements/substanceSourceMaterialAuthor.js');
                this.__data.author = Array.isArray(valueProvided) ? valueProvided.map(v => new SubstanceSourceMaterialAuthor(v)) : [new SubstanceSourceMaterialAuthor(valueProvided)];
            }
        });

        /**
         * @description 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
         * @property {SubstanceSourceMaterialHybrid|undefined}
        */
        Object.defineProperty(this, 'hybrid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.hybrid,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSourceMaterialHybrid = require('../backbone_elements/substanceSourceMaterialHybrid.js');
                this.__data.hybrid = new SubstanceSourceMaterialHybrid(valueProvided);
            }
        });

        /**
         * @description 4.9.13.7.1 Kingdom (Conditional).
         * @property {SubstanceSourceMaterialOrganismGeneral|undefined}
        */
        Object.defineProperty(this, 'organismGeneral', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.organismGeneral,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let SubstanceSourceMaterialOrganismGeneral = require('../backbone_elements/substanceSourceMaterialOrganismGeneral.js');
                this.__data.organismGeneral = new SubstanceSourceMaterialOrganismGeneral(valueProvided);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            family,
            genus,
            species,
            intraspecificType,
            intraspecificDescription,
            author,
            hybrid,
            organismGeneral,
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
            family: this.family && this.family.toJSON(),
            genus: this.genus && this.genus.toJSON(),
            species: this.species && this.species.toJSON(),
            intraspecificType: this.intraspecificType && this.intraspecificType.toJSON(),
            intraspecificDescription: this.intraspecificDescription,
            author: this.author && this.author.map(v => v.toJSON()),
            hybrid: this.hybrid && this.hybrid.toJSON(),
            organismGeneral: this.organismGeneral && this.organismGeneral.toJSON(),
        });
    }
}

module.exports = SubstanceSourceMaterialOrganism;
