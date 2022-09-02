/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
Communication
    An occurrence of information being transmitted; e.g. an alert that was sent to
    a responsible provider, a public health agency that was notified about a
    reportable condition.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Communication extends Resource {
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
     * @param {canonical[]|undefined} [instantiatesCanonical],
     * @param {uri[]|undefined} [instantiatesUri],
     * @param {Reference[]|undefined} [basedOn],
     * @param {Reference[]|undefined} [partOf],
     * @param {Reference[]|undefined} [inResponseTo],
     * @param {code} status,
     * @param {CodeableConcept|undefined} [statusReason],
     * @param {CodeableConcept[]|undefined} [category],
     * @param {code|undefined} [priority],
     * @param {CodeableConcept[]|undefined} [medium],
     * @param {Reference|undefined} [subject],
     * @param {CodeableConcept|undefined} [topic],
     * @param {Reference[]|undefined} [about],
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [sent],
     * @param {dateTime|undefined} [received],
     * @param {Reference[]|undefined} [recipient],
     * @param {Reference|undefined} [sender],
     * @param {CodeableConcept[]|undefined} [reasonCode],
     * @param {Reference[]|undefined} [reasonReference],
     * @param {CommunicationPayload[]|undefined} [payload],
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
            instantiatesCanonical,
            instantiatesUri,
            basedOn,
            partOf,
            inResponseTo,
            status,
            statusReason,
            category,
            priority,
            medium,
            subject,
            topic,
            about,
            encounter,
            sent,
            received,
            recipient,
            sender,
            reasonCode,
            reasonReference,
            payload,
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
         * @description Business identifiers assigned to this communication by the performer or other
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
         * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other
    definition that is adhered to in whole or in part by this Communication.
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.instantiatesCanonical = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The URL pointing to an externally maintained protocol, guideline, orderset or
    other definition that is adhered to in whole or in part by this Communication.
         * @property {uri[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.instantiatesUri = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description An order, proposal or plan fulfilled in whole or in part by this
    Communication.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'basedOn', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.basedOn,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.basedOn = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Part of this action.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'partOf', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.partOf,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.partOf = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Prior communication that this communication is in response to.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'inResponseTo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.inResponseTo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.inResponseTo = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The status of the transmission.
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
         * @description Captures the reason for the current state of the Communication.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'statusReason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.statusReason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.statusReason = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The type of message conveyed such as alert, notification, reminder,
    instruction, etc.
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
         * @description Characterizes how quickly the planned or in progress communication must be
    addressed. Includes concepts such as stat, urgent, routine.
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
         * @description A channel that was used for this communication (e.g. email, fax).
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'medium', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.medium,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.medium = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description The patient or group that was the focus of this communication.
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
         * @description Description of the purpose/content, similar to a subject line in an email.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'topic', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.topic,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.topic = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Other resources that pertain to this communication and to which this
    communication should be associated.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'about', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.about,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.about = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The Encounter during which this Communication was created or to which the
    creation of this record is tightly associated.
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
         * @description The time when this communication was sent.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'sent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.sent = valueProvided;
            }
        });

        /**
         * @description The time when this communication arrived at the destination.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'received', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.received,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.received = valueProvided;
            }
        });

        /**
         * @description The entity (e.g. person, organization, clinical information system, care team
    or device) which was the target of the communication. If receipts need to be
    tracked by an individual, a separate resource instance will need to be created
    for each recipient.  Multiple recipient communications are intended where
    either receipts are not tracked (e.g. a mass mail-out) or a receipt is
    captured in aggregate (all emails confirmed received by a particular time).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'recipient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recipient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.recipient = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The entity (e.g. person, organization, clinical information system, or device)
    which was the source of the communication.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'sender', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sender,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.sender = new Reference(valueProvided);
            }
        });

        /**
         * @description The reason or justification for the communication.
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
         * @description Indicates another resource whose existence justifies this communication.
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
         * @description Text, attachment(s), or resource(s) that was communicated to the recipient.
         * @property {CommunicationPayload[]|undefined}
        */
        Object.defineProperty(this, 'payload', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.payload,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CommunicationPayload = require('../backbone_elements/communicationPayload.js');
                this.__data.payload = Array.isArray(valueProvided) ? valueProvided.map(v => new CommunicationPayload(v)) : [new CommunicationPayload(valueProvided)];
            }
        });

        /**
         * @description Additional notes or commentary about the communication by the sender, receiver
    or other interested parties.
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
            instantiatesCanonical,
            instantiatesUri,
            basedOn,
            partOf,
            inResponseTo,
            status,
            statusReason,
            category,
            priority,
            medium,
            subject,
            topic,
            about,
            encounter,
            sent,
            received,
            recipient,
            sender,
            reasonCode,
            reasonReference,
            payload,
            note,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'Communication',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'Communication';
    }

    /**
     * @description Creates a blank new resource
     * @returns {Communication}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {canonical[]|undefined} [instantiatesCanonical],
     * @param {uri[]|undefined} [instantiatesUri],
     * @param {Reference[]|undefined} [basedOn],
     * @param {Reference[]|undefined} [partOf],
     * @param {Reference[]|undefined} [inResponseTo],
     * @param {code} status,
     * @param {CodeableConcept|undefined} [statusReason],
     * @param {CodeableConcept[]|undefined} [category],
     * @param {code|undefined} [priority],
     * @param {CodeableConcept[]|undefined} [medium],
     * @param {Reference|undefined} [subject],
     * @param {CodeableConcept|undefined} [topic],
     * @param {Reference[]|undefined} [about],
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [sent],
     * @param {dateTime|undefined} [received],
     * @param {Reference[]|undefined} [recipient],
     * @param {Reference|undefined} [sender],
     * @param {CodeableConcept[]|undefined} [reasonCode],
     * @param {Reference[]|undefined} [reasonReference],
     * @param {CommunicationPayload[]|undefined} [payload],
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
            instantiatesCanonical,
            instantiatesUri,
            basedOn,
            partOf,
            inResponseTo,
            status,
            statusReason,
            category,
            priority,
            medium,
            subject,
            topic,
            about,
            encounter,
            sent,
            received,
            recipient,
            sender,
            reasonCode,
            reasonReference,
            payload,
            note,
        }
    ) {
        return new Communication({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            instantiatesCanonical,
            instantiatesUri,
            basedOn,
            partOf,
            inResponseTo,
            status,
            statusReason,
            category,
            priority,
            medium,
            subject,
            topic,
            about,
            encounter,
            sent,
            received,
            recipient,
            sender,
            reasonCode,
            reasonReference,
            payload,
            note,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Communication}
    */
    copy() {
        return new Communication(this.toJSON());
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
            instantiatesCanonical: this.instantiatesCanonical,
            instantiatesUri: this.instantiatesUri,
            basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
            partOf: this.partOf && this.partOf.map(v => v.toJSON()),
            inResponseTo: this.inResponseTo && this.inResponseTo.map(v => v.toJSON()),
            status: this.status,
            statusReason: this.statusReason && this.statusReason.toJSON(),
            category: this.category && this.category.map(v => v.toJSON()),
            priority: this.priority,
            medium: this.medium && this.medium.map(v => v.toJSON()),
            subject: this.subject && this.subject.toJSON(),
            topic: this.topic && this.topic.toJSON(),
            about: this.about && this.about.map(v => v.toJSON()),
            encounter: this.encounter && this.encounter.toJSON(),
            sent: this.sent,
            received: this.received,
            recipient: this.recipient && this.recipient.map(v => v.toJSON()),
            sender: this.sender && this.sender.toJSON(),
            reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
            reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
            payload: this.payload && this.payload.map(v => v.toJSON()),
            note: this.note && this.note.map(v => v.toJSON()),
        });
    }
}

module.exports = Communication;
