/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
Patient
    Demographics and other administrative information about an individual or
    animal receiving care or other health-related services.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Patient extends Resource {
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
     * @param {Boolean|undefined} [active],
     * @param {HumanName[]|undefined} [name],
     * @param {ContactPoint[]|undefined} [telecom],
     * @param {code|undefined} [gender],
     * @param {date|undefined} [birthDate],
     * @param {Boolean|undefined} [deceasedBoolean],
     * @param {dateTime|undefined} [deceasedDateTime],
     * @param {Address[]|undefined} [address],
     * @param {CodeableConcept|undefined} [maritalStatus],
     * @param {Boolean|undefined} [multipleBirthBoolean],
     * @param {Int|undefined} [multipleBirthInteger],
     * @param {Attachment[]|undefined} [photo],
     * @param {PatientContact[]|undefined} [contact],
     * @param {PatientCommunication[]|undefined} [communication],
     * @param {Reference[]|undefined} [generalPractitioner],
     * @param {Reference|undefined} [managingOrganization],
     * @param {PatientLink[]|undefined} [link],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
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
            active,
            name,
            telecom,
            gender,
            birthDate,
            deceasedBoolean,
            deceasedDateTime,
            address,
            maritalStatus,
            multipleBirthBoolean,
            multipleBirthInteger,
            photo,
            contact,
            communication,
            generalPractitioner,
            managingOrganization,
            link,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
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
                    this.__data.id = undefined;
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
                    this.__data.meta = undefined;
                    return;
                }
                const Meta = require('../complex_types/meta.js');
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
                    this.__data.implicitRules = undefined;
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
                    this.__data.language = undefined;
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
                    this.__data.text = undefined;
                    return;
                }
                const Narrative = require('../complex_types/narrative.js');
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
                    this.__data.contained = undefined;
                    return;
                }
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.filter(v => v).map(v => {
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
                    this.__data.extension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description An identifier for this patient.
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
         * @description Whether this patient record is in active use.
    Many systems use this property to mark as non-current patients, such as those
    that have not been seen for a period of time based on an organization's
    business rules.

    It is often used to filter patient lists to exclude inactive patients

    Deceased patients may also be marked as inactive for the same reasons, but may
    be active for some time after death.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'active', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.active,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.active = undefined;
                    return;
                }
                this.__data.active = valueProvided;
            }
        });

        /**
         * @description A name associated with the individual.
         * @property {HumanName[]|undefined}
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
                const HumanName = require('../complex_types/humanName.js');
                this.__data.name = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new HumanName(v)) : [new HumanName(valueProvided)];
            }
        });

        /**
         * @description A contact detail (e.g. a telephone number or an email address) by which the
    individual may be contacted.
         * @property {ContactPoint[]|undefined}
        */
        Object.defineProperty(this, 'telecom', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.telecom,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.telecom = undefined;
                    return;
                }
                const ContactPoint = require('../complex_types/contactPoint.js');
                this.__data.telecom = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContactPoint(v)) : [new ContactPoint(valueProvided)];
            }
        });

        /**
         * @description Administrative Gender - the gender that the patient is considered to have for
    administration and record keeping purposes.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'gender', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.gender,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.gender = undefined;
                    return;
                }
                this.__data.gender = valueProvided;
            }
        });

        /**
         * @description The date of birth for the individual.
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'birthDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.birthDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.birthDate = undefined;
                    return;
                }
                this.__data.birthDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'deceasedBoolean', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.deceasedBoolean,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.deceasedBoolean = undefined;
                    return;
                }
                this.__data.deceasedBoolean = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'deceasedDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.deceasedDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.deceasedDateTime = undefined;
                    return;
                }
                this.__data.deceasedDateTime = valueProvided;
            }
        });

        /**
         * @description An address for the individual.
         * @property {Address[]|undefined}
        */
        Object.defineProperty(this, 'address', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.address,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.address = undefined;
                    return;
                }
                const Address = require('../complex_types/address.js');
                this.__data.address = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Address(v)) : [new Address(valueProvided)];
            }
        });

        /**
         * @description This field contains a patient's most recent marital (civil) status.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'maritalStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maritalStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maritalStatus = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.maritalStatus = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'multipleBirthBoolean', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.multipleBirthBoolean,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.multipleBirthBoolean = undefined;
                    return;
                }
                this.__data.multipleBirthBoolean = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'multipleBirthInteger', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.multipleBirthInteger,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.multipleBirthInteger = undefined;
                    return;
                }
                this.__data.multipleBirthInteger = valueProvided;
            }
        });

        /**
         * @description Image of the patient.
         * @property {Attachment[]|undefined}
        */
        Object.defineProperty(this, 'photo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.photo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.photo = undefined;
                    return;
                }
                const Attachment = require('../complex_types/attachment.js');
                this.__data.photo = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Attachment(v)) : [new Attachment(valueProvided)];
            }
        });

        /**
         * @description A contact party (e.g. guardian, partner, friend) for the patient.
         * @property {PatientContact[]|undefined}
        */
        Object.defineProperty(this, 'contact', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contact,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contact = undefined;
                    return;
                }
                const PatientContact = require('../backbone_elements/patientContact.js');
                this.__data.contact = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new PatientContact(v)) : [new PatientContact(valueProvided)];
            }
        });

        /**
         * @description A language which may be used to communicate with the patient about his or her
    health.
         * @property {PatientCommunication[]|undefined}
        */
        Object.defineProperty(this, 'communication', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.communication,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.communication = undefined;
                    return;
                }
                const PatientCommunication = require('../backbone_elements/patientCommunication.js');
                this.__data.communication = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new PatientCommunication(v)) : [new PatientCommunication(valueProvided)];
            }
        });

        /**
         * @description Patient's nominated care provider.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'generalPractitioner', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.generalPractitioner,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.generalPractitioner = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.generalPractitioner = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Organization that is the custodian of the patient record.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'managingOrganization', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.managingOrganization,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.managingOrganization = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.managingOrganization = new Reference(valueProvided);
            }
        });

        /**
         * @description Link to another patient resource that concerns the same actual patient.
         * @property {PatientLink[]|undefined}
        */
        Object.defineProperty(this, 'link', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.link,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.link = undefined;
                    return;
                }
                const PatientLink = require('../backbone_elements/patientLink.js');
                this.__data.link = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new PatientLink(v)) : [new PatientLink(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {Object|undefined}
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
         * @property {string|undefined}
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
         * @property {string|undefined}
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
         * @property {string|undefined}
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
            identifier,
            active,
            name,
            telecom,
            gender,
            birthDate,
            deceasedBoolean,
            deceasedDateTime,
            address,
            maritalStatus,
            multipleBirthBoolean,
            multipleBirthInteger,
            photo,
            contact,
            communication,
            generalPractitioner,
            managingOrganization,
            link,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'Patient',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType() {
        return 'Patient';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {Boolean|undefined} [active],
     * @param {HumanName[]|undefined} [name],
     * @param {ContactPoint[]|undefined} [telecom],
     * @param {code|undefined} [gender],
     * @param {date|undefined} [birthDate],
     * @param {Boolean|undefined} [deceasedBoolean],
     * @param {dateTime|undefined} [deceasedDateTime],
     * @param {Address[]|undefined} [address],
     * @param {CodeableConcept|undefined} [maritalStatus],
     * @param {Boolean|undefined} [multipleBirthBoolean],
     * @param {Int|undefined} [multipleBirthInteger],
     * @param {Attachment[]|undefined} [photo],
     * @param {PatientContact[]|undefined} [contact],
     * @param {PatientCommunication[]|undefined} [communication],
     * @param {Reference[]|undefined} [generalPractitioner],
     * @param {Reference|undefined} [managingOrganization],
     * @param {PatientLink[]|undefined} [link],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {Patient}
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
            active,
            name,
            telecom,
            gender,
            birthDate,
            deceasedBoolean,
            deceasedDateTime,
            address,
            maritalStatus,
            multipleBirthBoolean,
            multipleBirthInteger,
            photo,
            contact,
            communication,
            generalPractitioner,
            managingOrganization,
            link,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new Patient({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            active,
            name,
            telecom,
            gender,
            birthDate,
            deceasedBoolean,
            deceasedDateTime,
            address,
            maritalStatus,
            multipleBirthBoolean,
            multipleBirthInteger,
            photo,
            contact,
            communication,
            generalPractitioner,
            managingOrganization,
            link,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Patient}
    */
    clone() {
        return new Patient(this.toJSONInternal());
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
            active: this.active,
            name: this.name && this.name.map(v => v.toJSON()),
            telecom: this.telecom && this.telecom.map(v => v.toJSON()),
            gender: this.gender,
            birthDate: this.birthDate,
            deceasedBoolean: this.deceasedBoolean,
            deceasedDateTime: this.deceasedDateTime,
            address: this.address && this.address.map(v => v.toJSON()),
            maritalStatus: this.maritalStatus && this.maritalStatus.toJSON(),
            multipleBirthBoolean: this.multipleBirthBoolean,
            multipleBirthInteger: this.multipleBirthInteger,
            photo: this.photo && this.photo.map(v => v.toJSON()),
            contact: this.contact && this.contact.map(v => v.toJSON()),
            communication: this.communication && this.communication.map(v => v.toJSON()),
            generalPractitioner: this.generalPractitioner && this.generalPractitioner.map(v => v.toJSON()),
            managingOrganization: this.managingOrganization && this.managingOrganization.toJSON(),
            link: this.link && this.link.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.meta) {this.meta.updateReferences({fnUpdateReference});}
            if (this.text) {this.text.updateReferences({fnUpdateReference});}
            if (this.contained) {this.contained.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.identifier) {this.identifier.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.name) {this.name.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.telecom) {this.telecom.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.address) {this.address.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.maritalStatus) {this.maritalStatus.updateReferences({fnUpdateReference});}
            if (this.photo) {this.photo.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.contact) {this.contact.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.communication) {this.communication.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.generalPractitioner) {this.generalPractitioner.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.managingOrganization) {this.managingOrganization.updateReferences({fnUpdateReference});}
            if (this.link) {this.link.forEach(v => v.updateReferences({fnUpdateReference}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            active: this.active,
            name: this.name && this.name.map(v => v.toJSONInternal()),
            telecom: this.telecom && this.telecom.map(v => v.toJSONInternal()),
            gender: this.gender,
            birthDate: this.birthDate,
            deceasedBoolean: this.deceasedBoolean,
            deceasedDateTime: this.deceasedDateTime,
            address: this.address && this.address.map(v => v.toJSONInternal()),
            maritalStatus: this.maritalStatus && this.maritalStatus.toJSONInternal(),
            multipleBirthBoolean: this.multipleBirthBoolean,
            multipleBirthInteger: this.multipleBirthInteger,
            photo: this.photo && this.photo.map(v => v.toJSONInternal()),
            contact: this.contact && this.contact.map(v => v.toJSONInternal()),
            communication: this.communication && this.communication.map(v => v.toJSONInternal()),
            generalPractitioner: this.generalPractitioner && this.generalPractitioner.map(v => v.toJSONInternal()),
            managingOrganization: this.managingOrganization && this.managingOrganization.toJSONInternal(),
            link: this.link && this.link.map(v => v.toJSONInternal()),
        };


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

module.exports = Patient;
