/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
MeasureReport.Stratum
    The MeasureReport resource contains the results of the calculation of a
    measure; and optionally a reference to the resources involved in that
    calculation.
*/
class MeasureReportStratum extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [value],
     * @param {MeasureReportComponent[]|undefined} [component],
     * @param {MeasureReportPopulation1[]|undefined} [population],
     * @param {Quantity|undefined} [measureScore],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            value,
            component,
            population,
            measureScore,
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
         * @description The value for this stratum, expressed as a CodeableConcept. When defining
    stratifiers on complex values, the value must be rendered such that the value
    for each stratum within the stratifier is unique.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'value', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.value,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.value = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.value = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description A stratifier component value.
         * @property {MeasureReportComponent[]|undefined}
        */
        Object.defineProperty(this, 'component', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.component,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.component = undefined;
                    return;
                }
                const MeasureReportComponent = require('../backbone_elements/measureReportComponent.js');
                this.__data.component = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MeasureReportComponent(v)) : [new MeasureReportComponent(valueProvided)];
            }
        });

        /**
         * @description The populations that make up the stratum, one for each type of population
    appropriate to the measure.
         * @property {MeasureReportPopulation1[]|undefined}
        */
        Object.defineProperty(this, 'population', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.population,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.population = undefined;
                    return;
                }
                const MeasureReportPopulation1 = require('../backbone_elements/measureReportPopulation1.js');
                this.__data.population = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MeasureReportPopulation1(v)) : [new MeasureReportPopulation1(valueProvided)];
            }
        });

        /**
         * @description The measure score for this stratum, calculated as appropriate for the measure
    type and scoring method, and based on only the members of this stratum.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'measureScore', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.measureScore,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.measureScore = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.measureScore = new Quantity(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            value,
            component,
            population,
            measureScore,
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
            value: this.value && this.value.toJSON(),
            component: this.component && this.component.map(v => v.toJSON()),
            population: this.population && this.population.map(v => v.toJSON()),
            measureScore: this.measureScore && this.measureScore.toJSON(),
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
            if (this.value) {await this.value.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.component) { async.each(this.component, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.population) { async.each(this.population, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.measureScore) {await this.measureScore.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            value: this.value && this.value.toJSONInternal(),
            component: this.component && this.component.map(v => v.toJSONInternal()),
            population: this.population && this.population.map(v => v.toJSONInternal()),
            measureScore: this.measureScore && this.measureScore.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = MeasureReportStratum;
