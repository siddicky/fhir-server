/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
PlanDefinition.Action
    This resource allows for the definition of various types of plans as a
    sharable, consumable, and executable artifact. The resource is general enough
    to support the description of a broad range of clinical artifacts such as
    clinical decision support rules, order sets and protocols.
*/
class PlanDefinitionAction extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [prefix],
     * @param {String|undefined} [title],
     * @param {String|undefined} [description],
     * @param {String|undefined} [textEquivalent],
     * @param {code|undefined} [priority],
     * @param {CodeableConcept[]|undefined} [code],
     * @param {CodeableConcept[]|undefined} [reason],
     * @param {RelatedArtifact[]|undefined} [documentation],
     * @param {id[]|undefined} [goalId],
     * @param {CodeableConcept|undefined} [subjectCodeableConcept],
     * @param {Reference|undefined} [subjectReference],
     * @param {TriggerDefinition[]|undefined} [trigger],
     * @param {PlanDefinitionCondition[]|undefined} [condition],
     * @param {DataRequirement[]|undefined} [input],
     * @param {DataRequirement[]|undefined} [output],
     * @param {PlanDefinitionRelatedAction[]|undefined} [relatedAction],
     * @param {dateTime|undefined} [timingDateTime],
     * @param {Quantity|undefined} [timingAge],
     * @param {Period|undefined} [timingPeriod],
     * @param {Quantity|undefined} [timingDuration],
     * @param {Range|undefined} [timingRange],
     * @param {Timing|undefined} [timingTiming],
     * @param {PlanDefinitionParticipant[]|undefined} [participant],
     * @param {CodeableConcept|undefined} [type],
     * @param {code|undefined} [groupingBehavior],
     * @param {code|undefined} [selectionBehavior],
     * @param {code|undefined} [requiredBehavior],
     * @param {code|undefined} [precheckBehavior],
     * @param {code|undefined} [cardinalityBehavior],
     * @param {canonical|undefined} [definitionCanonical],
     * @param {uri|undefined} [definitionUri],
     * @param {canonical|undefined} [transform],
     * @param {PlanDefinitionDynamicValue[]|undefined} [dynamicValue],
     * @param {PlanDefinitionAction[]|undefined} [action],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            prefix,
            title,
            description,
            textEquivalent,
            priority,
            code,
            reason,
            documentation,
            goalId,
            subjectCodeableConcept,
            subjectReference,
            trigger,
            condition,
            input,
            output,
            relatedAction,
            timingDateTime,
            timingAge,
            timingPeriod,
            timingDuration,
            timingRange,
            timingTiming,
            participant,
            type,
            groupingBehavior,
            selectionBehavior,
            requiredBehavior,
            precheckBehavior,
            cardinalityBehavior,
            definitionCanonical,
            definitionUri,
            transform,
            dynamicValue,
            action,
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
         * @description A user-visible prefix for the action.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'prefix', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.prefix,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.prefix = valueProvided;
            }
        });

        /**
         * @description The title of the action displayed to a user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'title', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.title,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.title = valueProvided;
            }
        });

        /**
         * @description A brief description of the action used to provide a summary to display to the
    user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description A text equivalent of the action to be performed. This provides a human-
    interpretable description of the action when the definition is consumed by a
    system that might not be capable of interpreting it dynamically.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'textEquivalent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.textEquivalent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.textEquivalent = valueProvided;
            }
        });

        /**
         * @description Indicates how quickly the action should be addressed with respect to other
    actions.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'priority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.priority,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.priority = valueProvided;
            }
        });

        /**
         * @description A code that provides meaning for the action or action group. For example, a
    section may have a LOINC code for the section of a documentation template.
         * @property {CodeableConcept[]|undefined}
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
                this.__data.code = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description A description of why this action is necessary or appropriate.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'reason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.reason = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Didactic or other informational resources associated with the action that can
    be provided to the CDS recipient. Information resources can include inline
    text commentary and links to web resources.
         * @property {RelatedArtifact[]|undefined}
        */
        Object.defineProperty(this, 'documentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.documentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let RelatedArtifact = require('../complex_types/relatedArtifact.js');
                this.__data.documentation = Array.isArray(valueProvided) ? valueProvided.map(v => new RelatedArtifact(v)) : [new RelatedArtifact(valueProvided)];
            }
        });

        /**
         * @description Identifies goals that this action supports. The reference must be to a goal
    element defined within this plan definition.
         * @property {id[]|undefined}
        */
        Object.defineProperty(this, 'goalId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.goalId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.goalId = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'subjectCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subjectCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.subjectCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'subjectReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subjectReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subjectReference = new Reference(valueProvided);
            }
        });

        /**
         * @description A description of when the action should be triggered.
         * @property {TriggerDefinition[]|undefined}
        */
        Object.defineProperty(this, 'trigger', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.trigger,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let TriggerDefinition = require('../complex_types/triggerDefinition.js');
                this.__data.trigger = Array.isArray(valueProvided) ? valueProvided.map(v => new TriggerDefinition(v)) : [new TriggerDefinition(valueProvided)];
            }
        });

        /**
         * @description An expression that describes applicability criteria or start/stop conditions
    for the action.
         * @property {PlanDefinitionCondition[]|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let PlanDefinitionCondition = require('../backbone_elements/planDefinitionCondition.js');
                this.__data.condition = Array.isArray(valueProvided) ? valueProvided.map(v => new PlanDefinitionCondition(v)) : [new PlanDefinitionCondition(valueProvided)];
            }
        });

        /**
         * @description Defines input data requirements for the action.
         * @property {DataRequirement[]|undefined}
        */
        Object.defineProperty(this, 'input', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.input,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let DataRequirement = require('../complex_types/dataRequirement.js');
                this.__data.input = Array.isArray(valueProvided) ? valueProvided.map(v => new DataRequirement(v)) : [new DataRequirement(valueProvided)];
            }
        });

        /**
         * @description Defines the outputs of the action, if any.
         * @property {DataRequirement[]|undefined}
        */
        Object.defineProperty(this, 'output', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.output,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let DataRequirement = require('../complex_types/dataRequirement.js');
                this.__data.output = Array.isArray(valueProvided) ? valueProvided.map(v => new DataRequirement(v)) : [new DataRequirement(valueProvided)];
            }
        });

        /**
         * @description A relationship to another action such as "before" or "30-60 minutes after
    start of".
         * @property {PlanDefinitionRelatedAction[]|undefined}
        */
        Object.defineProperty(this, 'relatedAction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relatedAction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let PlanDefinitionRelatedAction = require('../backbone_elements/planDefinitionRelatedAction.js');
                this.__data.relatedAction = Array.isArray(valueProvided) ? valueProvided.map(v => new PlanDefinitionRelatedAction(v)) : [new PlanDefinitionRelatedAction(valueProvided)];
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
                    return;
                }
                this.__data.timingDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'timingAge', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingAge,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.timingAge = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'timingPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.timingPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'timingDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.timingDuration = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'timingRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timingRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Range = require('../complex_types/range.js');
                this.__data.timingRange = new Range(valueProvided);
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
                    return;
                }
                let Timing = require('../backbone_elements/timing.js');
                this.__data.timingTiming = new Timing(valueProvided);
            }
        });

        /**
         * @description Indicates who should participate in performing the action described.
         * @property {PlanDefinitionParticipant[]|undefined}
        */
        Object.defineProperty(this, 'participant', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participant,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let PlanDefinitionParticipant = require('../backbone_elements/planDefinitionParticipant.js');
                this.__data.participant = Array.isArray(valueProvided) ? valueProvided.map(v => new PlanDefinitionParticipant(v)) : [new PlanDefinitionParticipant(valueProvided)];
            }
        });

        /**
         * @description The type of action to perform (create, update, remove).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Defines the grouping behavior for the action and its children.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'groupingBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.groupingBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.groupingBehavior = valueProvided;
            }
        });

        /**
         * @description Defines the selection behavior for the action and its children.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'selectionBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.selectionBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.selectionBehavior = valueProvided;
            }
        });

        /**
         * @description Defines the required behavior for the action.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'requiredBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requiredBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.requiredBehavior = valueProvided;
            }
        });

        /**
         * @description Defines whether the action should usually be preselected.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'precheckBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.precheckBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.precheckBehavior = valueProvided;
            }
        });

        /**
         * @description Defines whether the action can be selected multiple times.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'cardinalityBehavior', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.cardinalityBehavior,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.cardinalityBehavior = valueProvided;
            }
        });

        /**
         * @description None
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'definitionCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.definitionCanonical = valueProvided;
            }
        });

        /**
         * @description None
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'definitionUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.definitionUri = valueProvided;
            }
        });

        /**
         * @description A reference to a StructureMap resource that defines a transform that can be
    executed to produce the intent resource using the ActivityDefinition instance
    as the input.
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'transform', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.transform,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.transform = valueProvided;
            }
        });

        /**
         * @description Customizations that should be applied to the statically defined resource. For
    example, if the dosage of a medication must be computed based on the patient's
    weight, a customization would be used to specify an expression that calculated
    the weight, and the path on the resource that would contain the result.
         * @property {PlanDefinitionDynamicValue[]|undefined}
        */
        Object.defineProperty(this, 'dynamicValue', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dynamicValue,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let PlanDefinitionDynamicValue = require('../backbone_elements/planDefinitionDynamicValue.js');
                this.__data.dynamicValue = Array.isArray(valueProvided) ? valueProvided.map(v => new PlanDefinitionDynamicValue(v)) : [new PlanDefinitionDynamicValue(valueProvided)];
            }
        });

        /**
         * @description Sub actions that are contained within the action. The behavior of this action
    determines the functionality of the sub-actions. For example, a selection
    behavior of at-most-one indicates that of the sub-actions, at most one may be
    chosen as part of realizing the action definition.
         * @property {PlanDefinitionAction[]|undefined}
        */
        Object.defineProperty(this, 'action', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.action,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.action = Array.isArray(valueProvided) ? valueProvided.map(v => new PlanDefinitionAction(v)) : [new PlanDefinitionAction(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            prefix,
            title,
            description,
            textEquivalent,
            priority,
            code,
            reason,
            documentation,
            goalId,
            subjectCodeableConcept,
            subjectReference,
            trigger,
            condition,
            input,
            output,
            relatedAction,
            timingDateTime,
            timingAge,
            timingPeriod,
            timingDuration,
            timingRange,
            timingTiming,
            participant,
            type,
            groupingBehavior,
            selectionBehavior,
            requiredBehavior,
            precheckBehavior,
            cardinalityBehavior,
            definitionCanonical,
            definitionUri,
            transform,
            dynamicValue,
            action,
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
            prefix: this.prefix,
            title: this.title,
            description: this.description,
            textEquivalent: this.textEquivalent,
            priority: this.priority,
            code: this.code && this.code.map(v => v.toJSON()),
            reason: this.reason && this.reason.map(v => v.toJSON()),
            documentation: this.documentation && this.documentation.map(v => v.toJSON()),
            goalId: this.goalId,
            subjectCodeableConcept: this.subjectCodeableConcept && this.subjectCodeableConcept.toJSON(),
            subjectReference: this.subjectReference && this.subjectReference.toJSON(),
            trigger: this.trigger && this.trigger.map(v => v.toJSON()),
            condition: this.condition && this.condition.map(v => v.toJSON()),
            input: this.input && this.input.map(v => v.toJSON()),
            output: this.output && this.output.map(v => v.toJSON()),
            relatedAction: this.relatedAction && this.relatedAction.map(v => v.toJSON()),
            timingDateTime: this.timingDateTime,
            timingAge: this.timingAge && this.timingAge.toJSON(),
            timingPeriod: this.timingPeriod && this.timingPeriod.toJSON(),
            timingDuration: this.timingDuration && this.timingDuration.toJSON(),
            timingRange: this.timingRange && this.timingRange.toJSON(),
            timingTiming: this.timingTiming && this.timingTiming.toJSON(),
            participant: this.participant && this.participant.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            groupingBehavior: this.groupingBehavior,
            selectionBehavior: this.selectionBehavior,
            requiredBehavior: this.requiredBehavior,
            precheckBehavior: this.precheckBehavior,
            cardinalityBehavior: this.cardinalityBehavior,
            definitionCanonical: this.definitionCanonical,
            definitionUri: this.definitionUri,
            transform: this.transform,
            dynamicValue: this.dynamicValue && this.dynamicValue.map(v => v.toJSON()),
            action: this.action && this.action.map(v => v.toJSON()),
        });
    }
}

module.exports = PlanDefinitionAction;