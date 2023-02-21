/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
Contract.ContentDefinition
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractContentDefinition extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} type,
     * @param {CodeableConcept|undefined} [subType],
     * @param {Reference|undefined} [publisher],
     * @param {dateTime|undefined} [publicationDate],
     * @param {code} publicationStatus,
     * @param {markdown|undefined} [copyright],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            type,
            subType,
            publisher,
            publicationDate,
            publicationStatus,
            copyright,
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
         * @description Precusory content structure and use, i.e., a boilerplate, template,
    application for a contract such as an insurance policy or benefits under a
    program, e.g., workers compensation.
         * @property {CodeableConcept}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Detailed Precusory content type.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'subType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.subType = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The  individual or organization that published the Contract precursor content.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'publisher', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publisher,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.publisher = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.publisher = new Reference(valueProvided);
            }
        });

        /**
         * @description The date (and optionally time) when the contract was published. The date must
    change when the business version changes and it must change if the status code
    changes. In addition, it should change when the substantive content of the
    contract changes.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'publicationDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publicationDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.publicationDate = undefined;
                    return;
                }
                this.__data.publicationDate = valueProvided;
            }
        });

        /**
         * @description amended | appended | cancelled | disputed | entered-in-error | executable |
    executed | negotiable | offered | policy | rejected | renewed | revoked |
    resolved | terminated.
         * @property {code}
        */
        Object.defineProperty(this, 'publicationStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publicationStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.publicationStatus = undefined;
                    return;
                }
                this.__data.publicationStatus = valueProvided;
            }
        });

        /**
         * @description A copyright statement relating to Contract precursor content. Copyright
    statements are generally legal restrictions on the use and publishing of the
    Contract precursor content.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'copyright', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.copyright,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.copyright = undefined;
                    return;
                }
                this.__data.copyright = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            subType,
            publisher,
            publicationDate,
            publicationStatus,
            copyright,
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
            type: this.type && this.type.toJSON(),
            subType: this.subType && this.subType.toJSON(),
            publisher: this.publisher && this.publisher.toJSON(),
            publicationDate: this.publicationDate,
            publicationStatus: this.publicationStatus,
            copyright: this.copyright,
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
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.subType) {await this.subType.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.publisher) {await this.publisher.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            type: this.type && this.type.toJSONInternal(),
            subType: this.subType && this.subType.toJSONInternal(),
            publisher: this.publisher && this.publisher.toJSONInternal(),
            publicationDate: this.publicationDate,
            publicationStatus: this.publicationStatus,
            copyright: this.copyright,
        };



        return removeNull(json);
    }
}

module.exports = ContractContentDefinition;
