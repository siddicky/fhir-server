/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
GuidanceResponse
    A guidance response is the formal response to a guidance request, including
    any output parameters returned by the evaluation, as well as the description
    of any proposed actions to be taken.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class GuidanceResponse extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [requestIdentifier],
     * @param {Identifier[]|undefined} [identifier],
     * @param {uri|undefined} [moduleUri],
     * @param {canonical|undefined} [moduleCanonical],
     * @param {CodeableConcept|undefined} [moduleCodeableConcept],
     * @param {code} status,
     * @param {Reference|undefined} [subject],
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [occurrenceDateTime],
     * @param {Reference|undefined} [performer],
     * @param {CodeableConcept[]|undefined} [reasonCode],
     * @param {Reference[]|undefined} [reasonReference],
     * @param {Annotation[]|undefined} [note],
     * @param {Reference[]|undefined} [evaluationMessage],
     * @param {Reference|undefined} [outputParameters],
     * @param {Reference|undefined} [result],
     * @param {DataRequirement[]|undefined} [dataRequirement],
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
            requestIdentifier,
            identifier,
            moduleUri,
            moduleCanonical,
            moduleCodeableConcept,
            status,
            subject,
            encounter,
            occurrenceDateTime,
            performer,
            reasonCode,
            reasonReference,
            note,
            evaluationMessage,
            outputParameters,
            result,
            dataRequirement,
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
         * @description The identifier of the request associated with this response. If an identifier
    was given as part of the request, it will be reproduced here to enable the
    requester to more easily identify the response in a multi-request scenario.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'requestIdentifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestIdentifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.requestIdentifier = new Identifier(valueProvided);
            }
        });

        /**
         * @description Allows a service to provide  unique, business identifiers for the response.
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
         * @description None
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'moduleUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.moduleUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.moduleUri = valueProvided;
            }
        });

        /**
         * @description None
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'moduleCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.moduleCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.moduleCanonical = valueProvided;
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'moduleCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.moduleCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.moduleCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The status of the response. If the evaluation is completed successfully, the
    status will indicate success. However, in order to complete the evaluation,
    the engine may require more information. In this case, the status will be
    data-required, and the response will contain a description of the additional
    required information. If the evaluation completed successfully, but the engine
    determines that a potentially more accurate response could be provided if more
    data was available, the status will be data-requested, and the response will
    contain a description of the additional requested information.
         * @property {code}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description The patient for which the request was processed.
         * @property {Reference|undefined}
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
         * @description The encounter during which this response was created or to which the creation
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
         * @description Indicates when the guidance response was processed.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'occurrenceDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.occurrenceDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.occurrenceDateTime = valueProvided;
            }
        });

        /**
         * @description Provides a reference to the device that performed the guidance.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.performer = new Reference(valueProvided);
            }
        });

        /**
         * @description Describes the reason for the guidance response in coded or textual form.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'reasonCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reasonCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.reasonCode = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Indicates the reason the request was initiated. This is typically provided as
    a parameter to the evaluation and echoed by the service, although for some use
    cases, such as subscription- or event-based scenarios, it may provide an
    indication of the cause for the response.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'reasonReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reasonReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.reasonReference = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Provides a mechanism to communicate additional information about the response.
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

        /**
         * @description Messages resulting from the evaluation of the artifact or artifacts. As part
    of evaluating the request, the engine may produce informational or warning
    messages. These messages will be provided by this element.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'evaluationMessage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.evaluationMessage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.evaluationMessage = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The output parameters of the evaluation, if any. Many modules will result in
    the return of specific resources such as procedure or communication requests
    that are returned as part of the operation result. However, modules may define
    specific outputs that would be returned as the result of the evaluation, and
    these would be returned in this element.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'outputParameters', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outputParameters,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.outputParameters = new Reference(valueProvided);
            }
        });

        /**
         * @description The actions, if any, produced by the evaluation of the artifact.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'result', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.result,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.result = new Reference(valueProvided);
            }
        });

        /**
         * @description If the evaluation could not be completed due to lack of information, or
    additional information would potentially result in a more accurate response,
    this element will a description of the data required in order to proceed with
    the evaluation. A subsequent request to the service should include this data.
         * @property {DataRequirement[]|undefined}
        */
        Object.defineProperty(this, 'dataRequirement', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dataRequirement,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let DataRequirement = require('../complex_types/dataRequirement.js');
                this.__data.dataRequirement = Array.isArray(valueProvided) ? valueProvided.map(v => new DataRequirement(v)) : [new DataRequirement(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {*|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {*|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {*|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {*|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
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
            requestIdentifier,
            identifier,
            moduleUri,
            moduleCanonical,
            moduleCodeableConcept,
            status,
            subject,
            encounter,
            occurrenceDateTime,
            performer,
            reasonCode,
            reasonReference,
            note,
            evaluationMessage,
            outputParameters,
            result,
            dataRequirement,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'GuidanceResponse',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'GuidanceResponse';
    }

    /**
     * @description Creates a blank new resource
     * @returns {GuidanceResponse}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [requestIdentifier],
     * @param {Identifier[]|undefined} [identifier],
     * @param {uri|undefined} [moduleUri],
     * @param {canonical|undefined} [moduleCanonical],
     * @param {CodeableConcept|undefined} [moduleCodeableConcept],
     * @param {code} status,
     * @param {Reference|undefined} [subject],
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [occurrenceDateTime],
     * @param {Reference|undefined} [performer],
     * @param {CodeableConcept[]|undefined} [reasonCode],
     * @param {Reference[]|undefined} [reasonReference],
     * @param {Annotation[]|undefined} [note],
     * @param {Reference[]|undefined} [evaluationMessage],
     * @param {Reference|undefined} [outputParameters],
     * @param {Reference|undefined} [result],
     * @param {DataRequirement[]|undefined} [dataRequirement],
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
            requestIdentifier,
            identifier,
            moduleUri,
            moduleCanonical,
            moduleCodeableConcept,
            status,
            subject,
            encounter,
            occurrenceDateTime,
            performer,
            reasonCode,
            reasonReference,
            note,
            evaluationMessage,
            outputParameters,
            result,
            dataRequirement,
        }
    ) {
        return new GuidanceResponse({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            requestIdentifier,
            identifier,
            moduleUri,
            moduleCanonical,
            moduleCodeableConcept,
            status,
            subject,
            encounter,
            occurrenceDateTime,
            performer,
            reasonCode,
            reasonReference,
            note,
            evaluationMessage,
            outputParameters,
            result,
            dataRequirement,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {GuidanceResponse}
    */
    copy() {
        return new GuidanceResponse(this.toJSON());
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
            requestIdentifier: this.requestIdentifier && this.requestIdentifier.toJSON(),
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            moduleUri: this.moduleUri,
            moduleCanonical: this.moduleCanonical,
            moduleCodeableConcept: this.moduleCodeableConcept && this.moduleCodeableConcept.toJSON(),
            status: this.status,
            subject: this.subject && this.subject.toJSON(),
            encounter: this.encounter && this.encounter.toJSON(),
            occurrenceDateTime: this.occurrenceDateTime,
            performer: this.performer && this.performer.toJSON(),
            reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
            reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
            note: this.note && this.note.map(v => v.toJSON()),
            evaluationMessage: this.evaluationMessage && this.evaluationMessage.map(v => v.toJSON()),
            outputParameters: this.outputParameters && this.outputParameters.toJSON(),
            result: this.result && this.result.toJSON(),
            dataRequirement: this.dataRequirement && this.dataRequirement.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();

        if (this._access) {
            json._access = this._access;
        }
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = GuidanceResponse;
