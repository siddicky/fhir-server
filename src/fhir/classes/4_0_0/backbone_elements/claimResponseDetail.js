/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
ClaimResponse.Detail
    This resource provides the adjudication details from the processing of a Claim
    resource.
*/
class ClaimResponseDetail extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int} detailSequence,
     * @param {Int[]|undefined} [noteNumber],
     * @param {ClaimResponseAdjudication[]} adjudication,
     * @param {ClaimResponseSubDetail[]|undefined} [subDetail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            detailSequence,
            noteNumber,
            adjudication,
            subDetail,
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
         * @description A number to uniquely reference the claim detail entry.
         * @property {Int}
        */
        Object.defineProperty(this, 'detailSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detailSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.detailSequence = undefined;
                    return;
                }
                this.__data.detailSequence = valueProvided;
            }
        });

        /**
         * @description The numbers associated with notes below which apply to the adjudication of
    this item.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'noteNumber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.noteNumber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.noteNumber = undefined;
                    return;
                }
                this.__data.noteNumber = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The adjudication results.
         * @property {ClaimResponseAdjudication[]}
        */
        Object.defineProperty(this, 'adjudication', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.adjudication,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.adjudication = undefined;
                    return;
                }
                const ClaimResponseAdjudication = require('../backbone_elements/claimResponseAdjudication.js');
                this.__data.adjudication = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ClaimResponseAdjudication(v)) : [new ClaimResponseAdjudication(valueProvided)];
            }
        });

        /**
         * @description A sub-detail adjudication of a simple product or service.
         * @property {ClaimResponseSubDetail[]|undefined}
        */
        Object.defineProperty(this, 'subDetail', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subDetail,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subDetail = undefined;
                    return;
                }
                const ClaimResponseSubDetail = require('../backbone_elements/claimResponseSubDetail.js');
                this.__data.subDetail = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ClaimResponseSubDetail(v)) : [new ClaimResponseSubDetail(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            detailSequence,
            noteNumber,
            adjudication,
            subDetail,
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
            detailSequence: this.detailSequence,
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
            subDetail: this.subDetail && this.subDetail.map(v => v.toJSON()),
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
            if (this.adjudication) { async.each(this.adjudication, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.subDetail) { async.each(this.subDetail, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
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
            detailSequence: this.detailSequence,
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSONInternal()),
            subDetail: this.subDetail && this.subDetail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ClaimResponseDetail;
