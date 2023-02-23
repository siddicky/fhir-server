/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
SubstanceProtein.Subunit
    A SubstanceProtein is defined as a single unit of a linear amino acid
    sequence, or a combination of subunits that are either covalently linked or
    have a defined invariant stoichiometric relationship. This includes all
    synthetic, recombinant and purified SubstanceProteins of defined sequence,
    whether the use is therapeutic or prophylactic. This set of elements will be
    used to describe albumins, coagulation factors, cytokines, growth factors,
    peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant
    vaccines, and immunomodulators.
*/
class SubstanceProteinSubunit extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int|undefined} [subunit],
     * @param {String|undefined} [sequence],
     * @param {Int|undefined} [length],
     * @param {Attachment|undefined} [sequenceAttachment],
     * @param {Identifier|undefined} [nTerminalModificationId],
     * @param {String|undefined} [nTerminalModification],
     * @param {Identifier|undefined} [cTerminalModificationId],
     * @param {String|undefined} [cTerminalModification],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            subunit,
            sequence,
            length,
            sequenceAttachment,
            nTerminalModificationId,
            nTerminalModification,
            cTerminalModificationId,
            cTerminalModification,
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
         * @description Index of primary sequences of amino acids linked through peptide bonds in
    order of decreasing length. Sequences of the same length will be ordered by
    molecular weight. Subunits that have identical sequences will be repeated and
    have sequential subscripts.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'subunit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subunit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subunit = undefined;
                    return;
                }
                this.__data.subunit = valueProvided;
            }
        });

        /**
         * @description The sequence information shall be provided enumerating the amino acids from N-
    to C-terminal end using standard single-letter amino acid codes. Uppercase
    shall be used for L-amino acids and lowercase for D-amino acids. Transcribed
    SubstanceProteins will always be described using the translated sequence; for
    synthetic peptide containing amino acids that are not represented with a
    single letter code an X should be used within the sequence. The modified amino
    acids will be distinguished by their position in the sequence.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'sequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequence = undefined;
                    return;
                }
                this.__data.sequence = valueProvided;
            }
        });

        /**
         * @description Length of linear sequences of amino acids contained in the subunit.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'length', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.length,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.length = undefined;
                    return;
                }
                this.__data.length = valueProvided;
            }
        });

        /**
         * @description The sequence information shall be provided enumerating the amino acids from N-
    to C-terminal end using standard single-letter amino acid codes. Uppercase
    shall be used for L-amino acids and lowercase for D-amino acids. Transcribed
    SubstanceProteins will always be described using the translated sequence; for
    synthetic peptide containing amino acids that are not represented with a
    single letter code an X should be used within the sequence. The modified amino
    acids will be distinguished by their position in the sequence.
         * @property {Attachment|undefined}
        */
        Object.defineProperty(this, 'sequenceAttachment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequenceAttachment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequenceAttachment = undefined;
                    return;
                }
                const Attachment = require('../complex_types/attachment.js');
                this.__data.sequenceAttachment = new Attachment(valueProvided);
            }
        });

        /**
         * @description Unique identifier for molecular fragment modification based on the ISO 11238
    Substance ID.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'nTerminalModificationId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.nTerminalModificationId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.nTerminalModificationId = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.nTerminalModificationId = new Identifier(valueProvided);
            }
        });

        /**
         * @description The name of the fragment modified at the N-terminal of the SubstanceProtein
    shall be specified.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'nTerminalModification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.nTerminalModification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.nTerminalModification = undefined;
                    return;
                }
                this.__data.nTerminalModification = valueProvided;
            }
        });

        /**
         * @description Unique identifier for molecular fragment modification based on the ISO 11238
    Substance ID.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'cTerminalModificationId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.cTerminalModificationId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.cTerminalModificationId = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.cTerminalModificationId = new Identifier(valueProvided);
            }
        });

        /**
         * @description The modification at the C-terminal shall be specified.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'cTerminalModification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.cTerminalModification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.cTerminalModification = undefined;
                    return;
                }
                this.__data.cTerminalModification = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            subunit,
            sequence,
            length,
            sequenceAttachment,
            nTerminalModificationId,
            nTerminalModification,
            cTerminalModificationId,
            cTerminalModification,
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
            subunit: this.subunit,
            sequence: this.sequence,
            length: this.length,
            sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSON(),
            nTerminalModificationId: this.nTerminalModificationId && this.nTerminalModificationId.toJSON(),
            nTerminalModification: this.nTerminalModification,
            cTerminalModificationId: this.cTerminalModificationId && this.cTerminalModificationId.toJSON(),
            cTerminalModification: this.cTerminalModification,
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) {await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.sequenceAttachment) {await this.sequenceAttachment.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.nTerminalModificationId) {await this.nTerminalModificationId.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.cTerminalModificationId) {await this.cTerminalModificationId.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            subunit: this.subunit,
            sequence: this.sequence,
            length: this.length,
            sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSONInternal(),
            nTerminalModificationId: this.nTerminalModificationId && this.nTerminalModificationId.toJSONInternal(),
            nTerminalModification: this.nTerminalModification,
            cTerminalModificationId: this.cTerminalModificationId && this.cTerminalModificationId.toJSONInternal(),
            cTerminalModification: this.cTerminalModification,
        };



        return removeNull(json);
    }
}

module.exports = SubstanceProteinSubunit;
