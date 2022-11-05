/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
MolecularSequence
    Raw data describing a biological sequence.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class MolecularSequence extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code|undefined} [type],
     * @param {Int} coordinateSystem,
     * @param {Reference|undefined} [patient],
     * @param {Reference|undefined} [specimen],
     * @param {Reference|undefined} [device],
     * @param {Reference|undefined} [performer],
     * @param {Quantity|undefined} [quantity],
     * @param {MolecularSequenceReferenceSeq|undefined} [referenceSeq],
     * @param {MolecularSequenceVariant[]|undefined} [variant],
     * @param {String|undefined} [observedSeq],
     * @param {MolecularSequenceQuality[]|undefined} [quality],
     * @param {Int|undefined} [readCoverage],
     * @param {MolecularSequenceRepository[]|undefined} [repository],
     * @param {Reference[]|undefined} [pointer],
     * @param {MolecularSequenceStructureVariant[]|undefined} [structureVariant],
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
            identifier,
            type,
            coordinateSystem,
            patient,
            specimen,
            device,
            performer,
            quantity,
            referenceSeq,
            variant,
            observedSeq,
            quality,
            readCoverage,
            repository,
            pointer,
            structureVariant,
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
                    return;
                }
                let Meta = require('../complex_types/meta.js');
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
                    return;
                }
                let Narrative = require('../complex_types/narrative.js');
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
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.map(v => {
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A unique identifier for this particular sequence instance. This is a FHIR-
    defined id.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description Amino Acid Sequence/ DNA Sequence / RNA Sequence.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description Whether the sequence is numbered starting at 0 (0-based numbering or
    coordinates, inclusive start, exclusive end) or starting at 1 (1-based
    numbering, inclusive start and inclusive end).
         * @property {Int}
        */
        Object.defineProperty(this, 'coordinateSystem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.coordinateSystem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.coordinateSystem = valueProvided;
            }
        });

        /**
         * @description The patient whose sequencing results are described by this resource.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'patient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.patient = new Reference(valueProvided);
            }
        });

        /**
         * @description Specimen used for sequencing.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'specimen', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specimen,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.specimen = new Reference(valueProvided);
            }
        });

        /**
         * @description The method for sequencing, for example, chip information.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'device', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.device,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.device = new Reference(valueProvided);
            }
        });

        /**
         * @description The organization or lab that should be responsible for this result.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.performer = new Reference(valueProvided);
            }
        });

        /**
         * @description The number of copies of the sequence of interest. (RNASeq).
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description A sequence that is used as a reference to describe variants that are present
    in a sequence analyzed.
         * @property {MolecularSequenceReferenceSeq|undefined}
        */
        Object.defineProperty(this, 'referenceSeq', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceSeq,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MolecularSequenceReferenceSeq = require('../backbone_elements/molecularSequenceReferenceSeq.js');
                this.__data.referenceSeq = new MolecularSequenceReferenceSeq(valueProvided);
            }
        });

        /**
         * @description The definition of variant here originates from Sequence ontology ([variant_of]
    (http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This
    element can represent amino acid or nucleic sequence change(including
    insertion,deletion,SNP,etc.)  It can represent some complex mutation or
    segment variation with the assist of CIGAR string.
         * @property {MolecularSequenceVariant[]|undefined}
        */
        Object.defineProperty(this, 'variant', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.variant,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MolecularSequenceVariant = require('../backbone_elements/molecularSequenceVariant.js');
                this.__data.variant = Array.isArray(valueProvided) ? valueProvided.map(v => new MolecularSequenceVariant(v)) : [new MolecularSequenceVariant(valueProvided)];
            }
        });

        /**
         * @description Sequence that was observed. It is the result marked by referenceSeq along with
    variant records on referenceSeq. This shall start from
    referenceSeq.windowStart and end by referenceSeq.windowEnd.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'observedSeq', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.observedSeq,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.observedSeq = valueProvided;
            }
        });

        /**
         * @description An experimental feature attribute that defines the quality of the feature in a
    quantitative way, such as a phred quality score ([SO:0001686](http://www.seque
    nceontology.org/browser/current_svn/term/SO:0001686)).
         * @property {MolecularSequenceQuality[]|undefined}
        */
        Object.defineProperty(this, 'quality', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quality,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MolecularSequenceQuality = require('../backbone_elements/molecularSequenceQuality.js');
                this.__data.quality = Array.isArray(valueProvided) ? valueProvided.map(v => new MolecularSequenceQuality(v)) : [new MolecularSequenceQuality(valueProvided)];
            }
        });

        /**
         * @description Coverage (read depth or depth) is the average number of reads representing a
    given nucleotide in the reconstructed sequence.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'readCoverage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.readCoverage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.readCoverage = valueProvided;
            }
        });

        /**
         * @description Configurations of the external repository. The repository shall store target's
    observedSeq or records related with target's observedSeq.
         * @property {MolecularSequenceRepository[]|undefined}
        */
        Object.defineProperty(this, 'repository', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.repository,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MolecularSequenceRepository = require('../backbone_elements/molecularSequenceRepository.js');
                this.__data.repository = Array.isArray(valueProvided) ? valueProvided.map(v => new MolecularSequenceRepository(v)) : [new MolecularSequenceRepository(valueProvided)];
            }
        });

        /**
         * @description Pointer to next atomic sequence which at most contains one variant.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'pointer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.pointer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.pointer = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Information about chromosome structure variation.
         * @property {MolecularSequenceStructureVariant[]|undefined}
        */
        Object.defineProperty(this, 'structureVariant', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.structureVariant,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MolecularSequenceStructureVariant = require('../backbone_elements/molecularSequenceStructureVariant.js');
                this.__data.structureVariant = Array.isArray(valueProvided) ? valueProvided.map(v => new MolecularSequenceStructureVariant(v)) : [new MolecularSequenceStructureVariant(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {*|undefined}
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
         * @property {*|undefined}
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
         * @property {*|undefined}
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
         * @property {*|undefined}
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
            identifier,
            type,
            coordinateSystem,
            patient,
            specimen,
            device,
            performer,
            quantity,
            referenceSeq,
            variant,
            observedSeq,
            quality,
            readCoverage,
            repository,
            pointer,
            structureVariant,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'MolecularSequence',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'MolecularSequence';
    }

    /**
     * @description Creates a blank new resource
     * @returns {MolecularSequence}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code|undefined} [type],
     * @param {Int} coordinateSystem,
     * @param {Reference|undefined} [patient],
     * @param {Reference|undefined} [specimen],
     * @param {Reference|undefined} [device],
     * @param {Reference|undefined} [performer],
     * @param {Quantity|undefined} [quantity],
     * @param {MolecularSequenceReferenceSeq|undefined} [referenceSeq],
     * @param {MolecularSequenceVariant[]|undefined} [variant],
     * @param {String|undefined} [observedSeq],
     * @param {MolecularSequenceQuality[]|undefined} [quality],
     * @param {Int|undefined} [readCoverage],
     * @param {MolecularSequenceRepository[]|undefined} [repository],
     * @param {Reference[]|undefined} [pointer],
     * @param {MolecularSequenceStructureVariant[]|undefined} [structureVariant],
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
            identifier,
            type,
            coordinateSystem,
            patient,
            specimen,
            device,
            performer,
            quantity,
            referenceSeq,
            variant,
            observedSeq,
            quality,
            readCoverage,
            repository,
            pointer,
            structureVariant,
        }
    ) {
        return new MolecularSequence({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            type,
            coordinateSystem,
            patient,
            specimen,
            device,
            performer,
            quantity,
            referenceSeq,
            variant,
            observedSeq,
            quality,
            readCoverage,
            repository,
            pointer,
            structureVariant,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {MolecularSequence}
    */
    copy() {
        return new MolecularSequence(this.toJSON());
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            type: this.type,
            coordinateSystem: this.coordinateSystem,
            patient: this.patient && this.patient.toJSON(),
            specimen: this.specimen && this.specimen.toJSON(),
            device: this.device && this.device.toJSON(),
            performer: this.performer && this.performer.toJSON(),
            quantity: this.quantity && this.quantity.toJSON(),
            referenceSeq: this.referenceSeq && this.referenceSeq.toJSON(),
            variant: this.variant && this.variant.map(v => v.toJSON()),
            observedSeq: this.observedSeq,
            quality: this.quality && this.quality.map(v => v.toJSON()),
            readCoverage: this.readCoverage,
            repository: this.repository && this.repository.map(v => v.toJSON()),
            pointer: this.pointer && this.pointer.map(v => v.toJSON()),
            structureVariant: this.structureVariant && this.structureVariant.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();

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

module.exports = MolecularSequence;
