/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
VerificationResult.PrimarySource
    Describes validation requirements, source(s), status and dates for one or more
    elements.
*/
class VerificationResultPrimarySource extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference|undefined} [who],
     * @param {CodeableConcept[]|undefined} [type],
     * @param {CodeableConcept[]|undefined} [communicationMethod],
     * @param {CodeableConcept|undefined} [validationStatus],
     * @param {dateTime|undefined} [validationDate],
     * @param {CodeableConcept|undefined} [canPushUpdates],
     * @param {CodeableConcept[]|undefined} [pushTypeAvailable],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            who,
            type,
            communicationMethod,
            validationStatus,
            validationDate,
            canPushUpdates,
            pushTypeAvailable,
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
         * @description Reference to the primary source.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'who', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.who,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.who = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.who = new Reference(valueProvided);
            }
        });

        /**
         * @description Type of primary source (License Board; Primary Education; Continuing
    Education; Postal Service; Relationship owner; Registration Authority; legal
    source; issuing source; authoritative source).
         * @property {CodeableConcept[]|undefined}
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
                this.__data.type = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Method for communicating with the primary source (manual; API; Push).
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'communicationMethod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.communicationMethod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.communicationMethod = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.communicationMethod = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Status of the validation of the target against the primary source (successful;
    failed; unknown).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'validationStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validationStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validationStatus = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.validationStatus = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description When the target was validated against the primary source.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'validationDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validationDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validationDate = undefined;
                    return;
                }
                this.__data.validationDate = valueProvided;
            }
        });

        /**
         * @description Ability of the primary source to push updates/alerts (yes; no; undetermined).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'canPushUpdates', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.canPushUpdates,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.canPushUpdates = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.canPushUpdates = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Type of alerts/updates the primary source can send (specific requested
    changes; any changes; as defined by source).
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'pushTypeAvailable', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.pushTypeAvailable,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.pushTypeAvailable = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.pushTypeAvailable = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            who,
            type,
            communicationMethod,
            validationStatus,
            validationDate,
            canPushUpdates,
            pushTypeAvailable,
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
            who: this.who && this.who.toJSON(),
            type: this.type && this.type.map(v => v.toJSON()),
            communicationMethod: this.communicationMethod && this.communicationMethod.map(v => v.toJSON()),
            validationStatus: this.validationStatus && this.validationStatus.toJSON(),
            validationDate: this.validationDate,
            canPushUpdates: this.canPushUpdates && this.canPushUpdates.toJSON(),
            pushTypeAvailable: this.pushTypeAvailable && this.pushTypeAvailable.map(v => v.toJSON()),
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
            if (this.who) {await this.who.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.type) {await async.each(this.type, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.communicationMethod) {await async.each(this.communicationMethod, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.validationStatus) {await this.validationStatus.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.canPushUpdates) {await this.canPushUpdates.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.pushTypeAvailable) {await async.each(this.pushTypeAvailable, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            who: this.who && this.who.toJSONInternal(),
            type: this.type && this.type.map(v => v.toJSONInternal()),
            communicationMethod: this.communicationMethod && this.communicationMethod.map(v => v.toJSONInternal()),
            validationStatus: this.validationStatus && this.validationStatus.toJSONInternal(),
            validationDate: this.validationDate,
            canPushUpdates: this.canPushUpdates && this.canPushUpdates.toJSONInternal(),
            pushTypeAvailable: this.pushTypeAvailable && this.pushTypeAvailable.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = VerificationResultPrimarySource;
