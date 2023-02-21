/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
ChargeItemDefinition.PropertyGroup
    The ChargeItemDefinition resource provides the properties that apply to the
    (billing) codes necessary to calculate costs and prices. The properties may
    differ largely depending on type and realm, therefore this resource gives only
    a rough structure and requires profiling for each type of billing code system.
*/
class ChargeItemDefinitionPropertyGroup extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {ChargeItemDefinitionApplicability[]|undefined} [applicability],
     * @param {ChargeItemDefinitionPriceComponent[]|undefined} [priceComponent],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            applicability,
            priceComponent,
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
         * @description Expressions that describe applicability criteria for the priceComponent.
         * @property {ChargeItemDefinitionApplicability[]|undefined}
        */
        Object.defineProperty(this, 'applicability', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.applicability,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.applicability = undefined;
                    return;
                }
                const ChargeItemDefinitionApplicability = require('../backbone_elements/chargeItemDefinitionApplicability.js');
                this.__data.applicability = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ChargeItemDefinitionApplicability(v)) : [new ChargeItemDefinitionApplicability(valueProvided)];
            }
        });

        /**
         * @description The price for a ChargeItem may be calculated as a base price with
    surcharges/deductions that apply in certain conditions. A ChargeItemDefinition
    resource that defines the prices, factors and conditions that apply to a
    billing code is currently under development. The priceComponent element can be
    used to offer transparency to the recipient of the Invoice of how the prices
    have been calculated.
         * @property {ChargeItemDefinitionPriceComponent[]|undefined}
        */
        Object.defineProperty(this, 'priceComponent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.priceComponent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.priceComponent = undefined;
                    return;
                }
                const ChargeItemDefinitionPriceComponent = require('../backbone_elements/chargeItemDefinitionPriceComponent.js');
                this.__data.priceComponent = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ChargeItemDefinitionPriceComponent(v)) : [new ChargeItemDefinitionPriceComponent(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            applicability,
            priceComponent,
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
            applicability: this.applicability && this.applicability.map(v => v.toJSON()),
            priceComponent: this.priceComponent && this.priceComponent.map(v => v.toJSON()),
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
            if (this.applicability) { async.each(this.applicability, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.priceComponent) { async.each(this.priceComponent, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
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
            applicability: this.applicability && this.applicability.map(v => v.toJSONInternal()),
            priceComponent: this.priceComponent && this.priceComponent.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ChargeItemDefinitionPropertyGroup;
