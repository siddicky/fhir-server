/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
NamingSystem
    A curated namespace that issues unique symbols within that namespace for the
    identification of concepts, people, devices, etc.  Represents a "System" used
    within the Identifier and Coding data types.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class NamingSystem extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String} name,
     * @param {code} status,
     * @param {code} kind,
     * @param {dateTime} date,
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {String|undefined} [responsible],
     * @param {CodeableConcept|undefined} [type],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {String|undefined} [usage],
     * @param {NamingSystemUniqueId[]} uniqueId,
     * @param {Object|undefined} [_access]
     * @param {Object|undefined} [_sourceAssigningAuthority]
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
            name,
            status,
            kind,
            date,
            publisher,
            contact,
            responsible,
            type,
            description,
            useContext,
            jurisdiction,
            usage,
            uniqueId,
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
         * @description A natural language name identifying the naming system. This name should be
    usable as an identifier for the module by machine processing applications such
    as code generation.
         * @property {String}
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
         * @description The status of this naming system. Enables tracking the life-cycle of the
    content.
         * @property {code}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.status = undefined;
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description Indicates the purpose for the naming system - what kinds of things does it
    make unique?
         * @property {code}
        */
        Object.defineProperty(this, 'kind', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.kind,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.kind = undefined;
                    return;
                }
                this.__data.kind = valueProvided;
            }
        });

        /**
         * @description The date  (and optionally time) when the naming system was published. The date
    must change when the business version changes and it must change if the status
    code changes. In addition, it should change when the substantive content of
    the naming system changes.
         * @property {dateTime}
        */
        Object.defineProperty(this, 'date', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.date,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.date = undefined;
                    return;
                }
                this.__data.date = valueProvided;
            }
        });

        /**
         * @description The name of the organization or individual that published the naming system.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'publisher', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publisher,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.publisher = undefined;
                    return;
                }
                this.__data.publisher = valueProvided;
            }
        });

        /**
         * @description Contact details to assist a user in finding and communicating with the
    publisher.
         * @property {ContactDetail[]|undefined}
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
                const ContactDetail = require('../complex_types/contactDetail.js');
                this.__data.contact = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContactDetail(v)) : [new ContactDetail(valueProvided)];
            }
        });

        /**
         * @description The name of the organization that is responsible for issuing identifiers or
    codes for this namespace and ensuring their non-collision.
         * @property {String|undefined}
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
                this.__data.responsible = valueProvided;
            }
        });

        /**
         * @description Categorizes a naming system for easier search by grouping related naming
    systems.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description A free text natural language description of the naming system from a
    consumer's perspective. Details about what the namespace identifies including
    scope, granularity, version labeling, etc.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description The content was developed with a focus and intent of supporting the contexts
    that are listed. These contexts may be general categories (gender, age, ...)
    or may be references to specific programs (insurance plans, studies, ...) and
    may be used to assist with indexing and searching for appropriate naming
    system instances.
         * @property {UsageContext[]|undefined}
        */
        Object.defineProperty(this, 'useContext', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.useContext,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.useContext = undefined;
                    return;
                }
                const UsageContext = require('../complex_types/usageContext.js');
                this.__data.useContext = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new UsageContext(v)) : [new UsageContext(valueProvided)];
            }
        });

        /**
         * @description A legal or geographic region in which the naming system is intended to be
    used.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'jurisdiction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.jurisdiction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.jurisdiction = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.jurisdiction = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Provides guidance on the use of the namespace, including the handling of
    formatting characters, use of upper vs. lower case, etc.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'usage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.usage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.usage = undefined;
                    return;
                }
                this.__data.usage = valueProvided;
            }
        });

        /**
         * @description Indicates how the system may be identified when referenced in electronic
    exchange.
         * @property {NamingSystemUniqueId[]}
        */
        Object.defineProperty(this, 'uniqueId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.uniqueId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.uniqueId = undefined;
                    return;
                }
                const NamingSystemUniqueId = require('../backbone_elements/namingSystemUniqueId.js');
                this.__data.uniqueId = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new NamingSystemUniqueId(v)) : [new NamingSystemUniqueId(valueProvided)];
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
         * @property {Object|undefined}
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
            name,
            status,
            kind,
            date,
            publisher,
            contact,
            responsible,
            type,
            description,
            useContext,
            jurisdiction,
            usage,
            uniqueId,
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
            value: 'NamingSystem',
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
        return 'NamingSystem';
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
     * @param {String} name,
     * @param {code} status,
     * @param {code} kind,
     * @param {dateTime} date,
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {String|undefined} [responsible],
     * @param {CodeableConcept|undefined} [type],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {String|undefined} [usage],
     * @param {NamingSystemUniqueId[]} uniqueId,
     * @param {Object|undefined} [_access]
     * @param {Object|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {NamingSystem}
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
            name,
            status,
            kind,
            date,
            publisher,
            contact,
            responsible,
            type,
            description,
            useContext,
            jurisdiction,
            usage,
            uniqueId,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new NamingSystem({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            name,
            status,
            kind,
            date,
            publisher,
            contact,
            responsible,
            type,
            description,
            useContext,
            jurisdiction,
            usage,
            uniqueId,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {NamingSystem}
    */
    clone() {
        return new NamingSystem(this.toJSONInternal());
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
            name: this.name,
            status: this.status,
            kind: this.kind,
            date: this.date,
            publisher: this.publisher,
            contact: this.contact && this.contact.map(v => v.toJSON()),
            responsible: this.responsible,
            type: this.type && this.type.toJSON(),
            description: this.description,
            useContext: this.useContext && this.useContext.map(v => v.toJSON()),
            jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
            usage: this.usage,
            uniqueId: this.uniqueId && this.uniqueId.map(v => v.toJSON()),
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
            if (this.contact) {this.contact.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.type) {this.type.updateReferences({fnUpdateReference});}
            if (this.useContext) {this.useContext.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.jurisdiction) {this.jurisdiction.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.uniqueId) {this.uniqueId.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = NamingSystem;
