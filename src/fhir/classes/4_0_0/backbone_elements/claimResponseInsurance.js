/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ClaimResponse.Insurance
    This resource provides the adjudication details from the processing of a Claim
    resource.
*/
class ClaimResponseInsurance extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int} sequence,
     * @param {Boolean} focal,
     * @param {Reference} coverage,
     * @param {String|undefined} [businessArrangement],
     * @param {Reference|undefined} [claimResponse],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            sequence,
            focal,
            coverage,
            businessArrangement,
            claimResponse,
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
         * @description A number to uniquely identify insurance entries and provide a sequence of
    coverages to convey coordination of benefit order.
         * @property {Int}
        */
        Object.defineProperty(this, 'sequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.sequence = valueProvided;
            }
        });

        /**
         * @description A flag to indicate that this Coverage is to be used for adjudication of this
    claim when set to true.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'focal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.focal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.focal = valueProvided;
            }
        });

        /**
         * @description Reference to the insurance card level information contained in the Coverage
    resource. The coverage issuing insurer will use these details to locate the
    patient's actual coverage within the insurer's information system.
         * @property {Reference}
        */
        Object.defineProperty(this, 'coverage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.coverage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.coverage = new Reference(valueProvided);
            }
        });

        /**
         * @description A business agreement number established between the provider and the insurer
    for special business processing purposes.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'businessArrangement', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.businessArrangement,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.businessArrangement = valueProvided;
            }
        });

        /**
         * @description The result of the adjudication of the line items for the Coverage specified in
    this insurance.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'claimResponse', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.claimResponse,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.claimResponse = new Reference(valueProvided);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            sequence,
            focal,
            coverage,
            businessArrangement,
            claimResponse,
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
            sequence: this.sequence,
            focal: this.focal,
            coverage: this.coverage && this.coverage.toJSON(),
            businessArrangement: this.businessArrangement,
            claimResponse: this.claimResponse && this.claimResponse.toJSON(),
        });
    }
}

module.exports = ClaimResponseInsurance;