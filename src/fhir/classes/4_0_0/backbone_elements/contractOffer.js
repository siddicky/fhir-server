/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Contract.Offer
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractOffer extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {ContractParty[]|undefined} [party],
     * @param {Reference|undefined} [topic],
     * @param {CodeableConcept|undefined} [type],
     * @param {CodeableConcept|undefined} [decision],
     * @param {CodeableConcept[]|undefined} [decisionMode],
     * @param {ContractAnswer[]|undefined} [answer],
     * @param {String|undefined} [text],
     * @param {String[]|undefined} [linkId],
     * @param {unsignedInt[]|undefined} [securityLabelNumber],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            identifier,
            party,
            topic,
            type,
            decision,
            decisionMode,
            answer,
            text,
            linkId,
            securityLabelNumber,
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
         * @description Unique identifier for this particular Contract Provision.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.identifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description Offer Recipient.
         * @property {ContractParty[]|undefined}
        */
        Object.defineProperty(this, 'party', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.party,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.party = undefined;
                    return;
                }
                const ContractParty = require('../backbone_elements/contractParty.js');
                this.__data.party = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContractParty(v)) : [new ContractParty(valueProvided)];
            }
        });

        /**
         * @description The owner of an asset has the residual control rights over the asset: the
    right to decide all usages of the asset in any way not inconsistent with a
    prior contract, custom, or law (Hart, 1995, p. 30).
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'topic', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.topic,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.topic = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.topic = new Reference(valueProvided);
            }
        });

        /**
         * @description Type of Contract Provision such as specific requirements, purposes for
    actions, obligations, prohibitions, e.g. life time maximum benefit.
         * @property {CodeableConcept|undefined}
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
         * @description Type of choice made by accepting party with respect to an offer made by an
    offeror/ grantee.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'decision', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.decision,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.decision = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.decision = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description How the decision about a Contract was conveyed.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'decisionMode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.decisionMode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.decisionMode = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.decisionMode = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Response to offer text.
         * @property {ContractAnswer[]|undefined}
        */
        Object.defineProperty(this, 'answer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answer = undefined;
                    return;
                }
                const ContractAnswer = require('../backbone_elements/contractAnswer.js');
                this.__data.answer = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContractAnswer(v)) : [new ContractAnswer(valueProvided)];
            }
        });

        /**
         * @description Human readable form of this Contract Offer.
         * @property {String|undefined}
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
                this.__data.text = valueProvided;
            }
        });

        /**
         * @description The id of the clause or question text of the offer in the referenced
    questionnaire/response.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'linkId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.linkId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.linkId = undefined;
                    return;
                }
                this.__data.linkId = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Security labels that protects the offer.
         * @property {unsignedInt[]|undefined}
        */
        Object.defineProperty(this, 'securityLabelNumber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.securityLabelNumber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.securityLabelNumber = undefined;
                    return;
                }
                this.__data.securityLabelNumber = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            party,
            topic,
            type,
            decision,
            decisionMode,
            answer,
            text,
            linkId,
            securityLabelNumber,
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            party: this.party && this.party.map(v => v.toJSON()),
            topic: this.topic && this.topic.toJSON(),
            type: this.type && this.type.toJSON(),
            decision: this.decision && this.decision.toJSON(),
            decisionMode: this.decisionMode && this.decisionMode.map(v => v.toJSON()),
            answer: this.answer && this.answer.map(v => v.toJSON()),
            text: this.text,
            linkId: this.linkId,
            securityLabelNumber: this.securityLabelNumber,
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.identifier) {this.identifier.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.party) {this.party.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.topic) {this.topic.updateReferences({fnUpdateReference});}
            if (this.type) {this.type.updateReferences({fnUpdateReference});}
            if (this.decision) {this.decision.updateReferences({fnUpdateReference});}
            if (this.decisionMode) {this.decisionMode.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.answer) {this.answer.forEach(v => v.updateReferences({fnUpdateReference}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();


        return removeNull(json);
    }
}

module.exports = ContractOffer;
