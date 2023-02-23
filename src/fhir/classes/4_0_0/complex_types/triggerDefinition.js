/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
TriggerDefinition
    A description of a triggering event. Triggering events can be named events,
    data events, or periodic, as determined by the type element.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class TriggerDefinition extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {code} type,
     * @param {String|undefined} [name],
     * @param {Timing|undefined} [timingTiming],
     * @param {Reference|undefined} [timingReference],
     * @param {date|undefined} [timingDate],
     * @param {dateTime|undefined} [timingDateTime],
     * @param {DataRequirement[]|undefined} [data],
     * @param {Expression|undefined} [condition],
    */
    constructor(
        {
            id,
            extension,
            type,
            name,
            timingTiming,
            timingReference,
            timingDate,
            timingDateTime,
            data,
            condition,
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
         * @description The type of triggering event.
         * @property {code}
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
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description A formal name for the event. This may be an absolute URI that identifies the
    event formally (e.g. from a trigger registry), or a simple relative URI that
    identifies the event in a local context.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.name = undefined;
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'timingTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingTiming = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                this.__data.timingTiming = new Timing(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'timingReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.timingReference = new Reference(valueProvided);
            }
        });

        /**
         * @description None
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'timingDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingDate = undefined;
                    return;
                }
                this.__data.timingDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'timingDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timingDateTime = undefined;
                    return;
                }
                this.__data.timingDateTime = valueProvided;
            }
        });

        /**
         * @description The triggering data of the event (if this is a data trigger). If more than one
    data is requirement is specified, then all the data requirements must be true.
         * @property {DataRequirement[]|undefined}
        */
        Object.defineProperty(this, 'data', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.data,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.data = undefined;
                    return;
                }
                const DataRequirement = require('../complex_types/dataRequirement.js');
                this.__data.data = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new DataRequirement(v)) : [new DataRequirement(valueProvided)];
            }
        });

        /**
         * @description A boolean-valued expression that is evaluated in the context of the container
    of the trigger definition and returns whether or not the trigger fires.
         * @property {Expression|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.condition = undefined;
                    return;
                }
                const Expression = require('../complex_types/expression.js');
                this.__data.condition = new Expression(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            type,
            name,
            timingTiming,
            timingReference,
            timingDate,
            timingDateTime,
            data,
            condition,
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
            type: this.type,
            name: this.name,
            timingTiming: this.timingTiming && this.timingTiming.toJSON(),
            timingReference: this.timingReference && this.timingReference.toJSON(),
            timingDate: this.timingDate,
            timingDateTime: this.timingDateTime,
            data: this.data && this.data.map(v => v.toJSON()),
            condition: this.condition && this.condition.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.timingTiming) {await this.timingTiming.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.timingReference) {await this.timingReference.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.data) {await async.each(this.data, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.condition) {await this.condition.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            type: this.type,
            name: this.name,
            timingTiming: this.timingTiming && this.timingTiming.toJSONInternal(),
            timingReference: this.timingReference && this.timingReference.toJSONInternal(),
            timingDate: this.timingDate,
            timingDateTime: this.timingDateTime,
            data: this.data && this.data.map(v => v.toJSONInternal()),
            condition: this.condition && this.condition.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = TriggerDefinition;
