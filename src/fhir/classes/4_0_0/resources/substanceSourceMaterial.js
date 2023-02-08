/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
SubstanceSourceMaterial
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
    If the element is present, it must have either a @value, an @id, or extensions
*/
class SubstanceSourceMaterial extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [sourceMaterialClass],
     * @param {CodeableConcept|undefined} [sourceMaterialType],
     * @param {CodeableConcept|undefined} [sourceMaterialState],
     * @param {Identifier|undefined} [organismId],
     * @param {String|undefined} [organismName],
     * @param {Identifier[]|undefined} [parentSubstanceId],
     * @param {String[]|undefined} [parentSubstanceName],
     * @param {CodeableConcept[]|undefined} [countryOfOrigin],
     * @param {String[]|undefined} [geographicalLocation],
     * @param {CodeableConcept|undefined} [developmentStage],
     * @param {SubstanceSourceMaterialFractionDescription[]|undefined} [fractionDescription],
     * @param {SubstanceSourceMaterialOrganism|undefined} [organism],
     * @param {SubstanceSourceMaterialPartDescription[]|undefined} [partDescription],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor(
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            sourceMaterialClass,
            sourceMaterialType,
            sourceMaterialState,
            organismId,
            organismName,
            parentSubstanceId,
            parentSubstanceName,
            countryOfOrigin,
            geographicalLocation,
            developmentStage,
            fractionDescription,
            organism,
            partDescription,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
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
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.meta = undefined;
                    return;
                }
                const Meta = require('../complex_types/meta.js');
                this.__data.meta = new Meta(valueProvided);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.implicitRules = undefined;
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.language = undefined;
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
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
                const Narrative = require('../complex_types/narrative.js');
                this.__data.text = new Narrative(valueProvided);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contained = undefined;
                    return;
                }
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.filter(v => v).map(v => {
                        const ResourceCreator = getResource('4_0_0', v.resourceType);
                        return new ResourceCreator(v);
                    });
                } else {
                const ResourceCreator = getResource('4_0_0', valueProvided.resourceType);
                this.__data.contained = [new ResourceCreator(valueProvided)];
                }
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
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
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

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
         * @description General high level classification of the source material specific to the
    origin of the material.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'sourceMaterialClass', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceMaterialClass,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceMaterialClass = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.sourceMaterialClass = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The type of the source material shall be specified based on a controlled
    vocabulary. For vaccines, this subclause refers to the class of infectious
    agent.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'sourceMaterialType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceMaterialType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceMaterialType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.sourceMaterialType = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The state of the source material when extracted.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'sourceMaterialState', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceMaterialState,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceMaterialState = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.sourceMaterialState = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The unique identifier associated with the source material parent organism
    shall be specified.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'organismId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.organismId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.organismId = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.organismId = new Identifier(valueProvided);
            }
        });

        /**
         * @description The organism accepted Scientific name shall be provided based on the organism
    taxonomy.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'organismName', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.organismName,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.organismName = undefined;
                    return;
                }
                this.__data.organismName = valueProvided;
            }
        });

        /**
         * @description The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the
    substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'parentSubstanceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.parentSubstanceId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.parentSubstanceId = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.parentSubstanceId = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The parent substance of the Herbal Drug, or Herbal preparation.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'parentSubstanceName', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.parentSubstanceName,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.parentSubstanceName = undefined;
                    return;
                }
                this.__data.parentSubstanceName = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The country where the plant material is harvested or the countries where the
    plasma is sourced from as laid down in accordance with the Plasma Master File.
    For “Plasma-derived substances” the attribute country of origin provides
    information about the countries used for the manufacturing of the Cryopoor
    plama or Crioprecipitate.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'countryOfOrigin', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.countryOfOrigin,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.countryOfOrigin = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.countryOfOrigin = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description The place/region where the plant is harvested or the places/regions where the
    animal source material has its habitat.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'geographicalLocation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.geographicalLocation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.geographicalLocation = undefined;
                    return;
                }
                this.__data.geographicalLocation = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Stage of life for animals, plants, insects and microorganisms. This
    information shall be provided only when the substance is significantly
    different in these stages (e.g. foetal bovine serum).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'developmentStage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.developmentStage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.developmentStage = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.developmentStage = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Many complex materials are fractions of parts of plants, animals, or minerals.
    Fraction elements are often necessary to define both Substances and Specified
    Group 1 Substances. For substances derived from Plants, fraction information
    will be captured at the Substance information level ( . Oils, Juices and
    Exudates). Additional information for Extracts, such as extraction solvent
    composition, will be captured at the Specified Substance Group 1 information
    level. For plasma-derived products fraction information will be captured at
    the Substance and the Specified Substance Group 1 levels.
         * @property {SubstanceSourceMaterialFractionDescription[]|undefined}
        */
        Object.defineProperty(this, 'fractionDescription', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fractionDescription,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.fractionDescription = undefined;
                    return;
                }
                const SubstanceSourceMaterialFractionDescription = require('../backbone_elements/substanceSourceMaterialFractionDescription.js');
                this.__data.fractionDescription = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new SubstanceSourceMaterialFractionDescription(v)) : [new SubstanceSourceMaterialFractionDescription(valueProvided)];
            }
        });

        /**
         * @description This subclause describes the organism which the substance is derived from. For
    vaccines, the parent organism shall be specified based on these subclause
    elements. As an example, full taxonomy will be described for the Substance
    Name: ., Leaf.
         * @property {SubstanceSourceMaterialOrganism|undefined}
        */
        Object.defineProperty(this, 'organism', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.organism,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.organism = undefined;
                    return;
                }
                const SubstanceSourceMaterialOrganism = require('../backbone_elements/substanceSourceMaterialOrganism.js');
                this.__data.organism = new SubstanceSourceMaterialOrganism(valueProvided);
            }
        });

        /**
         * @description To do.
         * @property {SubstanceSourceMaterialPartDescription[]|undefined}
        */
        Object.defineProperty(this, 'partDescription', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.partDescription,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.partDescription = undefined;
                    return;
                }
                const SubstanceSourceMaterialPartDescription = require('../backbone_elements/substanceSourceMaterialPartDescription.js');
                this.__data.partDescription = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new SubstanceSourceMaterialPartDescription(v)) : [new SubstanceSourceMaterialPartDescription(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            sourceMaterialClass,
            sourceMaterialType,
            sourceMaterialState,
            organismId,
            organismName,
            parentSubstanceId,
            parentSubstanceName,
            countryOfOrigin,
            geographicalLocation,
            developmentStage,
            fractionDescription,
            organism,
            partDescription,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'SubstanceSourceMaterial',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType() {
        return 'SubstanceSourceMaterial';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [sourceMaterialClass],
     * @param {CodeableConcept|undefined} [sourceMaterialType],
     * @param {CodeableConcept|undefined} [sourceMaterialState],
     * @param {Identifier|undefined} [organismId],
     * @param {String|undefined} [organismName],
     * @param {Identifier[]|undefined} [parentSubstanceId],
     * @param {String[]|undefined} [parentSubstanceName],
     * @param {CodeableConcept[]|undefined} [countryOfOrigin],
     * @param {String[]|undefined} [geographicalLocation],
     * @param {CodeableConcept|undefined} [developmentStage],
     * @param {SubstanceSourceMaterialFractionDescription[]|undefined} [fractionDescription],
     * @param {SubstanceSourceMaterialOrganism|undefined} [organism],
     * @param {SubstanceSourceMaterialPartDescription[]|undefined} [partDescription],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {SubstanceSourceMaterial}
    */
    create(
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            sourceMaterialClass,
            sourceMaterialType,
            sourceMaterialState,
            organismId,
            organismName,
            parentSubstanceId,
            parentSubstanceName,
            countryOfOrigin,
            geographicalLocation,
            developmentStage,
            fractionDescription,
            organism,
            partDescription,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new SubstanceSourceMaterial({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            sourceMaterialClass,
            sourceMaterialType,
            sourceMaterialState,
            organismId,
            organismName,
            parentSubstanceId,
            parentSubstanceName,
            countryOfOrigin,
            geographicalLocation,
            developmentStage,
            fractionDescription,
            organism,
            partDescription,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {SubstanceSourceMaterial}
    */
    clone() {
        return new SubstanceSourceMaterial(this.toJSONInternal());
    }


    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            sourceMaterialClass: this.sourceMaterialClass && this.sourceMaterialClass.toJSON(),
            sourceMaterialType: this.sourceMaterialType && this.sourceMaterialType.toJSON(),
            sourceMaterialState: this.sourceMaterialState && this.sourceMaterialState.toJSON(),
            organismId: this.organismId && this.organismId.toJSON(),
            organismName: this.organismName,
            parentSubstanceId: this.parentSubstanceId && this.parentSubstanceId.map(v => v.toJSON()),
            parentSubstanceName: this.parentSubstanceName,
            countryOfOrigin: this.countryOfOrigin && this.countryOfOrigin.map(v => v.toJSON()),
            geographicalLocation: this.geographicalLocation,
            developmentStage: this.developmentStage && this.developmentStage.toJSON(),
            fractionDescription: this.fractionDescription && this.fractionDescription.map(v => v.toJSON()),
            organism: this.organism && this.organism.toJSON(),
            partDescription: this.partDescription && this.partDescription.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.meta) {this.meta.updateReferences({fnUpdateReference});}
            if (this.text) {this.text.updateReferences({fnUpdateReference});}
            if (this.contained) {this.contained.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.sourceMaterialClass) {this.sourceMaterialClass.updateReferences({fnUpdateReference});}
            if (this.sourceMaterialType) {this.sourceMaterialType.updateReferences({fnUpdateReference});}
            if (this.sourceMaterialState) {this.sourceMaterialState.updateReferences({fnUpdateReference});}
            if (this.organismId) {this.organismId.updateReferences({fnUpdateReference});}
            if (this.parentSubstanceId) {this.parentSubstanceId.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.countryOfOrigin) {this.countryOfOrigin.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.developmentStage) {this.developmentStage.updateReferences({fnUpdateReference});}
            if (this.fractionDescription) {this.fractionDescription.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.organism) {this.organism.updateReferences({fnUpdateReference});}
            if (this.partDescription) {this.partDescription.forEach(v => v.updateReferences({fnUpdateReference}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            sourceMaterialClass: this.sourceMaterialClass && this.sourceMaterialClass.toJSONInternal(),
            sourceMaterialType: this.sourceMaterialType && this.sourceMaterialType.toJSONInternal(),
            sourceMaterialState: this.sourceMaterialState && this.sourceMaterialState.toJSONInternal(),
            organismId: this.organismId && this.organismId.toJSONInternal(),
            organismName: this.organismName,
            parentSubstanceId: this.parentSubstanceId && this.parentSubstanceId.map(v => v.toJSONInternal()),
            parentSubstanceName: this.parentSubstanceName,
            countryOfOrigin: this.countryOfOrigin && this.countryOfOrigin.map(v => v.toJSONInternal()),
            geographicalLocation: this.geographicalLocation,
            developmentStage: this.developmentStage && this.developmentStage.toJSONInternal(),
            fractionDescription: this.fractionDescription && this.fractionDescription.map(v => v.toJSONInternal()),
            organism: this.organism && this.organism.toJSONInternal(),
            partDescription: this.partDescription && this.partDescription.map(v => v.toJSONInternal()),
        };


        if (this._access) {
            json._access = this._access;
        }
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = SubstanceSourceMaterial;
