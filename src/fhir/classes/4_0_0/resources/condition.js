/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
Condition
    A clinical condition, problem, diagnosis, or other event, situation, issue, or
    clinical concept that has risen to a level of concern.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Condition extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [clinicalStatus],
     * @param {CodeableConcept|undefined} [verificationStatus],
     * @param {CodeableConcept[]|undefined} [category],
     * @param {CodeableConcept|undefined} [severity],
     * @param {CodeableConcept|undefined} [code],
     * @param {CodeableConcept[]|undefined} [bodySite],
     * @param {Reference} subject,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [onsetDateTime],
     * @param {Quantity|undefined} [onsetAge],
     * @param {Period|undefined} [onsetPeriod],
     * @param {Range|undefined} [onsetRange],
     * @param {String|undefined} [onsetString],
     * @param {dateTime|undefined} [abatementDateTime],
     * @param {Quantity|undefined} [abatementAge],
     * @param {Period|undefined} [abatementPeriod],
     * @param {Range|undefined} [abatementRange],
     * @param {String|undefined} [abatementString],
     * @param {dateTime|undefined} [recordedDate],
     * @param {Reference|undefined} [recorder],
     * @param {Reference|undefined} [asserter],
     * @param {ConditionStage[]|undefined} [stage],
     * @param {ConditionEvidence[]|undefined} [evidence],
     * @param {Annotation[]|undefined} [note],
    */
    constructor(
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            clinicalStatus,
            verificationStatus,
            category,
            severity,
            code,
            bodySite,
            subject,
            encounter,
            onsetDateTime,
            onsetAge,
            onsetPeriod,
            onsetRange,
            onsetString,
            abatementDateTime,
            abatementAge,
            abatementPeriod,
            abatementRange,
            abatementString,
            recordedDate,
            recorder,
            asserter,
            stage,
            evidence,
            note,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
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
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Meta = require('../complex_types/meta.js');
                this.__data.meta = new Meta(valueProvided);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
        */
        Object.defineProperty(this, 'text', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.text,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Narrative = require('../complex_types/narrative.js');
                this.__data.text = new Narrative(valueProvided);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.map(v => {
                        const ResourceCreator = getResource('4_0_0', v.resourceType);
                        return new ResourceCreator(v);
                    });
                } else {
                const ResourceCreator = getResource('4_0_0', valueProvided.resourceType);
                this.__data.contained = [new ResourceCreator(valueProvided)];
                }
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
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
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

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
         * @description Business identifiers assigned to this condition by the performer or other
    systems which remain constant as the resource is updated and propagates from
    server to server.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The clinical status of the condition.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'clinicalStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.clinicalStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.clinicalStatus = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The verification status to support the clinical status of the condition.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'verificationStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.verificationStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.verificationStatus = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description A category assigned to the condition.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'category', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.category,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.category = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description A subjective assessment of the severity of the condition as evaluated by the
    clinician.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'severity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.severity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.severity = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Identification of the condition, problem or diagnosis.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The anatomical location where this condition manifests itself.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'bodySite', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.bodySite,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.bodySite = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Indicates the patient or group who the condition record is associated with.
         * @property {Reference}
        */
        Object.defineProperty(this, 'subject', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subject,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subject = new Reference(valueProvided);
            }
        });

        /**
         * @description The Encounter during which this Condition was created or to which the creation
    of this record is tightly associated.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'encounter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.encounter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.encounter = new Reference(valueProvided);
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'onsetDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onsetDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.onsetDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'onsetAge', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onsetAge,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.onsetAge = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'onsetPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onsetPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.onsetPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'onsetRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onsetRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.onsetRange = new Range(valueProvided);
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'onsetString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onsetString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.onsetString = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'abatementDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abatementDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.abatementDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'abatementAge', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abatementAge,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.abatementAge = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'abatementPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abatementPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.abatementPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'abatementRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abatementRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.abatementRange = new Range(valueProvided);
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'abatementString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abatementString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.abatementString = valueProvided;
            }
        });

        /**
         * @description The recordedDate represents when this particular Condition record was created
    in the system, which is often a system-generated date.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'recordedDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recordedDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.recordedDate = valueProvided;
            }
        });

        /**
         * @description Individual who recorded the record and takes responsibility for its content.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'recorder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recorder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.recorder = new Reference(valueProvided);
            }
        });

        /**
         * @description Individual who is making the condition statement.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'asserter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.asserter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.asserter = new Reference(valueProvided);
            }
        });

        /**
         * @description Clinical stage or grade of a condition. May include formal severity
    assessments.
         * @property {ConditionStage[]|undefined}
        */
        Object.defineProperty(this, 'stage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.stage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ConditionStage = require('../backbone_elements/conditionStage.js');
                this.__data.stage = Array.isArray(valueProvided) ? valueProvided.map(v => new ConditionStage(v)) : [new ConditionStage(valueProvided)];
            }
        });

        /**
         * @description Supporting evidence / manifestations that are the basis of the Condition's
    verification status, such as evidence that confirmed or refuted the condition.
         * @property {ConditionEvidence[]|undefined}
        */
        Object.defineProperty(this, 'evidence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.evidence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ConditionEvidence = require('../backbone_elements/conditionEvidence.js');
                this.__data.evidence = Array.isArray(valueProvided) ? valueProvided.map(v => new ConditionEvidence(v)) : [new ConditionEvidence(valueProvided)];
            }
        });

        /**
         * @description Additional information about the Condition. This is a general notes/comments
    entry  for description of the Condition, its diagnosis and prognosis.
         * @property {Annotation[]|undefined}
        */
        Object.defineProperty(this, 'note', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.note,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Annotation = require('../complex_types/annotation.js');
                this.__data.note = Array.isArray(valueProvided) ? valueProvided.map(v => new Annotation(v)) : [new Annotation(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            clinicalStatus,
            verificationStatus,
            category,
            severity,
            code,
            bodySite,
            subject,
            encounter,
            onsetDateTime,
            onsetAge,
            onsetPeriod,
            onsetRange,
            onsetString,
            abatementDateTime,
            abatementAge,
            abatementPeriod,
            abatementRange,
            abatementString,
            recordedDate,
            recorder,
            asserter,
            stage,
            evidence,
            note,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'Condition',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'Condition';
    }

    /**
     * @description Creates a blank new resource
     * @returns {Condition}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [clinicalStatus],
     * @param {CodeableConcept|undefined} [verificationStatus],
     * @param {CodeableConcept[]|undefined} [category],
     * @param {CodeableConcept|undefined} [severity],
     * @param {CodeableConcept|undefined} [code],
     * @param {CodeableConcept[]|undefined} [bodySite],
     * @param {Reference} subject,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [onsetDateTime],
     * @param {Quantity|undefined} [onsetAge],
     * @param {Period|undefined} [onsetPeriod],
     * @param {Range|undefined} [onsetRange],
     * @param {String|undefined} [onsetString],
     * @param {dateTime|undefined} [abatementDateTime],
     * @param {Quantity|undefined} [abatementAge],
     * @param {Period|undefined} [abatementPeriod],
     * @param {Range|undefined} [abatementRange],
     * @param {String|undefined} [abatementString],
     * @param {dateTime|undefined} [recordedDate],
     * @param {Reference|undefined} [recorder],
     * @param {Reference|undefined} [asserter],
     * @param {ConditionStage[]|undefined} [stage],
     * @param {ConditionEvidence[]|undefined} [evidence],
     * @param {Annotation[]|undefined} [note],
    */
    create(
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            clinicalStatus,
            verificationStatus,
            category,
            severity,
            code,
            bodySite,
            subject,
            encounter,
            onsetDateTime,
            onsetAge,
            onsetPeriod,
            onsetRange,
            onsetString,
            abatementDateTime,
            abatementAge,
            abatementPeriod,
            abatementRange,
            abatementString,
            recordedDate,
            recorder,
            asserter,
            stage,
            evidence,
            note,
        }
    ) {
        return new Condition({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            clinicalStatus,
            verificationStatus,
            category,
            severity,
            code,
            bodySite,
            subject,
            encounter,
            onsetDateTime,
            onsetAge,
            onsetPeriod,
            onsetRange,
            onsetString,
            abatementDateTime,
            abatementAge,
            abatementPeriod,
            abatementRange,
            abatementString,
            recordedDate,
            recorder,
            asserter,
            stage,
            evidence,
            note,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Condition}
    */
    copy() {
        return new Condition(this.toJSON());
    }


    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            clinicalStatus: this.clinicalStatus && this.clinicalStatus.toJSON(),
            verificationStatus: this.verificationStatus && this.verificationStatus.toJSON(),
            category: this.category && this.category.map(v => v.toJSON()),
            severity: this.severity && this.severity.toJSON(),
            code: this.code && this.code.toJSON(),
            bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
            subject: this.subject && this.subject.toJSON(),
            encounter: this.encounter && this.encounter.toJSON(),
            onsetDateTime: this.onsetDateTime,
            onsetAge: this.onsetAge && this.onsetAge.toJSON(),
            onsetPeriod: this.onsetPeriod && this.onsetPeriod.toJSON(),
            onsetRange: this.onsetRange && this.onsetRange.toJSON(),
            onsetString: this.onsetString,
            abatementDateTime: this.abatementDateTime,
            abatementAge: this.abatementAge && this.abatementAge.toJSON(),
            abatementPeriod: this.abatementPeriod && this.abatementPeriod.toJSON(),
            abatementRange: this.abatementRange && this.abatementRange.toJSON(),
            abatementString: this.abatementString,
            recordedDate: this.recordedDate,
            recorder: this.recorder && this.recorder.toJSON(),
            asserter: this.asserter && this.asserter.toJSON(),
            stage: this.stage && this.stage.map(v => v.toJSON()),
            evidence: this.evidence && this.evidence.map(v => v.toJSON()),
            note: this.note && this.note.map(v => v.toJSON()),
        });
    }
}

module.exports = Condition;
