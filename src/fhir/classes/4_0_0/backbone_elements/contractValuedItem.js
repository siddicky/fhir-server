/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Contract.ValuedItem
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractValuedItem extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [entityCodeableConcept],
     * @param {Reference|undefined} [entityReference],
     * @param {Identifier|undefined} [identifier],
     * @param {dateTime|undefined} [effectiveTime],
     * @param {Quantity|undefined} [quantity],
     * @param {Money|undefined} [unitPrice],
     * @param {decimal|undefined} [factor],
     * @param {decimal|undefined} [points],
     * @param {Money|undefined} [net],
     * @param {String|undefined} [payment],
     * @param {dateTime|undefined} [paymentDate],
     * @param {Reference|undefined} [responsible],
     * @param {Reference|undefined} [recipient],
     * @param {String[]|undefined} [linkId],
     * @param {unsignedInt[]|undefined} [securityLabelNumber],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            entityCodeableConcept,
            entityReference,
            identifier,
            effectiveTime,
            quantity,
            unitPrice,
            factor,
            points,
            net,
            payment,
            paymentDate,
            responsible,
            recipient,
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
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'entityCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entityCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entityCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.entityCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'entityReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entityReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entityReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.entityReference = new Reference(valueProvided);
            }
        });

        /**
         * @description Identifies a Contract Valued Item instance.
         * @property {Identifier|undefined}
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
                this.__data.identifier = new Identifier(valueProvided);
            }
        });

        /**
         * @description Indicates the time during which this Contract ValuedItem information is
    effective.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'effectiveTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.effectiveTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.effectiveTime = undefined;
                    return;
                }
                this.__data.effectiveTime = valueProvided;
            }
        });

        /**
         * @description Specifies the units by which the Contract Valued Item is measured or counted,
    and quantifies the countable or measurable Contract Valued Item instances.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.quantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description A Contract Valued Item unit valuation measure.
         * @property {Money|undefined}
        */
        Object.defineProperty(this, 'unitPrice', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unitPrice,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unitPrice = undefined;
                    return;
                }
                const Money = require('../complex_types/money.js');
                this.__data.unitPrice = new Money(valueProvided);
            }
        });

        /**
         * @description A real number that represents a multiplier used in determining the overall
    value of the Contract Valued Item delivered. The concept of a Factor allows
    for a discount or surcharge multiplier to be applied to a monetary amount.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'factor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.factor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.factor = undefined;
                    return;
                }
                this.__data.factor = valueProvided;
            }
        });

        /**
         * @description An amount that expresses the weighting (based on difficulty, cost and/or
    resource intensiveness) associated with the Contract Valued Item delivered.
    The concept of Points allows for assignment of point values for a Contract
    Valued Item, such that a monetary amount can be assigned to each point.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'points', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.points,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.points = undefined;
                    return;
                }
                this.__data.points = valueProvided;
            }
        });

        /**
         * @description Expresses the product of the Contract Valued Item unitQuantity and the
    unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per
    Point) * factor Number  * points = net Amount. Quantity, factor and points are
    assumed to be 1 if not supplied.
         * @property {Money|undefined}
        */
        Object.defineProperty(this, 'net', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.net,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.net = undefined;
                    return;
                }
                const Money = require('../complex_types/money.js');
                this.__data.net = new Money(valueProvided);
            }
        });

        /**
         * @description Terms of valuation.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'payment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.payment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.payment = undefined;
                    return;
                }
                this.__data.payment = valueProvided;
            }
        });

        /**
         * @description When payment is due.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'paymentDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.paymentDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.paymentDate = undefined;
                    return;
                }
                this.__data.paymentDate = valueProvided;
            }
        });

        /**
         * @description Who will make payment.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'responsible', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.responsible,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.responsible = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.responsible = new Reference(valueProvided);
            }
        });

        /**
         * @description Who will receive payment.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'recipient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recipient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.recipient = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.recipient = new Reference(valueProvided);
            }
        });

        /**
         * @description Id  of the clause or question text related to the context of this valuedItem
    in the referenced form or QuestionnaireResponse.
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
         * @description A set of security labels that define which terms are controlled by this
    condition.
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
            entityCodeableConcept,
            entityReference,
            identifier,
            effectiveTime,
            quantity,
            unitPrice,
            factor,
            points,
            net,
            payment,
            paymentDate,
            responsible,
            recipient,
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
            entityCodeableConcept: this.entityCodeableConcept && this.entityCodeableConcept.toJSON(),
            entityReference: this.entityReference && this.entityReference.toJSON(),
            identifier: this.identifier && this.identifier.toJSON(),
            effectiveTime: this.effectiveTime,
            quantity: this.quantity && this.quantity.toJSON(),
            unitPrice: this.unitPrice && this.unitPrice.toJSON(),
            factor: this.factor,
            points: this.points,
            net: this.net && this.net.toJSON(),
            payment: this.payment,
            paymentDate: this.paymentDate,
            responsible: this.responsible && this.responsible.toJSON(),
            recipient: this.recipient && this.recipient.toJSON(),
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
            if (this.entityCodeableConcept) {this.entityCodeableConcept.updateReferences({fnUpdateReference});}
            if (this.entityReference) {this.entityReference.updateReferences({fnUpdateReference});}
            if (this.identifier) {this.identifier.updateReferences({fnUpdateReference});}
            if (this.quantity) {this.quantity.updateReferences({fnUpdateReference});}
            if (this.unitPrice) {this.unitPrice.updateReferences({fnUpdateReference});}
            if (this.net) {this.net.updateReferences({fnUpdateReference});}
            if (this.responsible) {this.responsible.updateReferences({fnUpdateReference});}
            if (this.recipient) {this.recipient.updateReferences({fnUpdateReference});}
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
            entityCodeableConcept: this.entityCodeableConcept && this.entityCodeableConcept.toJSONInternal(),
            entityReference: this.entityReference && this.entityReference.toJSONInternal(),
            identifier: this.identifier && this.identifier.toJSONInternal(),
            effectiveTime: this.effectiveTime,
            quantity: this.quantity && this.quantity.toJSONInternal(),
            unitPrice: this.unitPrice && this.unitPrice.toJSONInternal(),
            factor: this.factor,
            points: this.points,
            net: this.net && this.net.toJSONInternal(),
            payment: this.payment,
            paymentDate: this.paymentDate,
            responsible: this.responsible && this.responsible.toJSONInternal(),
            recipient: this.recipient && this.recipient.toJSONInternal(),
            linkId: this.linkId,
            securityLabelNumber: this.securityLabelNumber,
        };



        return removeNull(json);
    }
}

module.exports = ContractValuedItem;
