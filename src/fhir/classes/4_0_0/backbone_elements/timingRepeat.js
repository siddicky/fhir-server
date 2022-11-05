/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Timing.Repeat
    Specifies an event that may occur multiple times. Timing schedules are used to
    record when things are planned, expected or requested to occur. The most
    common usage is in dosage instructions for medications. They are also used
    when planning care of various kinds, and may be used for reporting the
    schedule to which past regular activities were carried out.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class TimingRepeat extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Quantity|undefined} [boundsDuration],
     * @param {Range|undefined} [boundsRange],
     * @param {Period|undefined} [boundsPeriod],
     * @param {Int|undefined} [count],
     * @param {Int|undefined} [countMax],
     * @param {decimal|undefined} [duration],
     * @param {decimal|undefined} [durationMax],
     * @param {code|undefined} [durationUnit],
     * @param {Int|undefined} [frequency],
     * @param {Int|undefined} [frequencyMax],
     * @param {decimal|undefined} [period],
     * @param {decimal|undefined} [periodMax],
     * @param {code|undefined} [periodUnit],
     * @param {code[]|undefined} [dayOfWeek],
     * @param {time[]|undefined} [timeOfDay],
     * @param {code[]|undefined} [when],
     * @param {unsignedInt|undefined} [offset],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            boundsDuration,
            boundsRange,
            boundsPeriod,
            count,
            countMax,
            duration,
            durationMax,
            durationUnit,
            frequency,
            frequencyMax,
            period,
            periodMax,
            periodUnit,
            dayOfWeek,
            timeOfDay,
            when,
            offset,
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
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'boundsDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.boundsDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.boundsDuration = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'boundsRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.boundsRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.boundsRange = new Range(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'boundsPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.boundsPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.boundsPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description A total count of the desired number of repetitions across the duration of the
    entire timing specification. If countMax is present, this element indicates
    the lower bound of the allowed range of count values.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'count', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.count,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.count = valueProvided;
            }
        });

        /**
         * @description If present, indicates that the count is a range - so to perform the action
    between [count] and [countMax] times.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'countMax', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.countMax,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.countMax = valueProvided;
            }
        });

        /**
         * @description How long this thing happens for when it happens. If durationMax is present,
    this element indicates the lower bound of the allowed range of the duration.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'duration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.duration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.duration = valueProvided;
            }
        });

        /**
         * @description If present, indicates that the duration is a range - so to perform the action
    between [duration] and [durationMax] time length.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'durationMax', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.durationMax,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.durationMax = valueProvided;
            }
        });

        /**
         * @description The units of time for the duration, in UCUM units.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'durationUnit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.durationUnit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.durationUnit = valueProvided;
            }
        });

        /**
         * @description The number of times to repeat the action within the specified period. If
    frequencyMax is present, this element indicates the lower bound of the allowed
    range of the frequency.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'frequency', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.frequency,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.frequency = valueProvided;
            }
        });

        /**
         * @description If present, indicates that the frequency is a range - so to repeat between
    [frequency] and [frequencyMax] times within the period or period range.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'frequencyMax', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.frequencyMax,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.frequencyMax = valueProvided;
            }
        });

        /**
         * @description Indicates the duration of time over which repetitions are to occur; e.g. to
    express "3 times per day", 3 would be the frequency and "1 day" would be the
    period. If periodMax is present, this element indicates the lower bound of the
    allowed range of the period length.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'period', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.period,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.period = valueProvided;
            }
        });

        /**
         * @description If present, indicates that the period is a range from [period] to [periodMax],
    allowing expressing concepts such as "do this once every 3-5 days.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'periodMax', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.periodMax,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.periodMax = valueProvided;
            }
        });

        /**
         * @description The units of time for the period in UCUM units.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'periodUnit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.periodUnit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.periodUnit = valueProvided;
            }
        });

        /**
         * @description If one or more days of week is provided, then the action happens only on the
    specified day(s).
         * @property {code[]|undefined}
        */
        Object.defineProperty(this, 'dayOfWeek', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dayOfWeek,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.dayOfWeek = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Specified time of day for action to take place.
         * @property {time[]|undefined}
        */
        Object.defineProperty(this, 'timeOfDay', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timeOfDay,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.timeOfDay = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description An approximate time period during the day, potentially linked to an event of
    daily living that indicates when the action should occur.
         * @property {code[]|undefined}
        */
        Object.defineProperty(this, 'when', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.when,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.when = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The number of minutes from the event. If the event code does not indicate
    whether the minutes is before or after the event, then the offset is assumed
    to be after the event.
         * @property {unsignedInt|undefined}
        */
        Object.defineProperty(this, 'offset', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.offset,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.offset = valueProvided;
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            boundsDuration,
            boundsRange,
            boundsPeriod,
            count,
            countMax,
            duration,
            durationMax,
            durationUnit,
            frequency,
            frequencyMax,
            period,
            periodMax,
            periodUnit,
            dayOfWeek,
            timeOfDay,
            when,
            offset,
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
            boundsDuration: this.boundsDuration && this.boundsDuration.toJSON(),
            boundsRange: this.boundsRange && this.boundsRange.toJSON(),
            boundsPeriod: this.boundsPeriod && this.boundsPeriod.toJSON(),
            count: this.count,
            countMax: this.countMax,
            duration: this.duration,
            durationMax: this.durationMax,
            durationUnit: this.durationUnit,
            frequency: this.frequency,
            frequencyMax: this.frequencyMax,
            period: this.period,
            periodMax: this.periodMax,
            periodUnit: this.periodUnit,
            dayOfWeek: this.dayOfWeek,
            timeOfDay: this.timeOfDay,
            when: this.when,
            offset: this.offset,
        });
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

module.exports = TimingRepeat;
