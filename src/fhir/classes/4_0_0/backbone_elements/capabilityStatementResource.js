/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
CapabilityStatement.Resource
    A Capability Statement documents a set of capabilities (behaviors) of a FHIR
    Server for a particular version of FHIR that may be used as a statement of
    actual server functionality or a statement of required or desired server
    implementation.
*/
class CapabilityStatementResource extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} type,
     * @param {canonical|undefined} [profile],
     * @param {canonical[]|undefined} [supportedProfile],
     * @param {markdown|undefined} [documentation],
     * @param {CapabilityStatementInteraction[]|undefined} [interaction],
     * @param {code|undefined} [versioning],
     * @param {Boolean|undefined} [readHistory],
     * @param {Boolean|undefined} [updateCreate],
     * @param {Boolean|undefined} [conditionalCreate],
     * @param {code|undefined} [conditionalRead],
     * @param {Boolean|undefined} [conditionalUpdate],
     * @param {code|undefined} [conditionalDelete],
     * @param {code[]|undefined} [referencePolicy],
     * @param {String[]|undefined} [searchInclude],
     * @param {String[]|undefined} [searchRevInclude],
     * @param {CapabilityStatementSearchParam[]|undefined} [searchParam],
     * @param {CapabilityStatementOperation[]|undefined} [operation],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            type,
            profile,
            supportedProfile,
            documentation,
            interaction,
            versioning,
            readHistory,
            updateCreate,
            conditionalCreate,
            conditionalRead,
            conditionalUpdate,
            conditionalDelete,
            referencePolicy,
            searchInclude,
            searchRevInclude,
            searchParam,
            operation,
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
         * @description A type of resource exposed via the restful interface.
         * @property {code}
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
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description A specification of the profile that describes the solution's overall support
    for the resource, including any constraints on cardinality, bindings, lengths
    or other limitations. See further discussion in [Using
    Profiles](profiling.html#profile-uses).
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'profile', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.profile,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.profile = valueProvided;
            }
        });

        /**
         * @description A list of profiles that represent different use cases supported by the system.
    For a server, "supported by the system" means the system hosts/produces a set
    of resources that are conformant to a particular profile, and allows clients
    that use its services to search using this profile and to find appropriate
    data. For a client, it means the system will search by this profile and
    process data according to the guidance implicit in the profile. See further
    discussion in [Using Profiles](profiling.html#profile-uses).
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'supportedProfile', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supportedProfile,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.supportedProfile = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Additional information about the resource type used by the system.
         * @property {markdown|undefined}
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
                this.__data.documentation = valueProvided;
            }
        });

        /**
         * @description Identifies a restful operation supported by the solution.
         * @property {CapabilityStatementInteraction[]|undefined}
        */
        Object.defineProperty(this, 'interaction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.interaction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementInteraction = require('../backbone_elements/capabilityStatementInteraction.js');
                this.__data.interaction = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementInteraction(v)) : [new CapabilityStatementInteraction(valueProvided)];
            }
        });

        /**
         * @description This field is set to no-version to specify that the system does not support
    (server) or use (client) versioning for this resource type. If this has some
    other value, the server must at least correctly track and populate the
    versionId meta-property on resources. If the value is 'versioned-update', then
    the server supports all the versioning features, including using e-tags for
    version integrity in the API.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'versioning', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.versioning,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.versioning = valueProvided;
            }
        });

        /**
         * @description A flag for whether the server is able to return past versions as part of the
    vRead operation.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'readHistory', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.readHistory,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.readHistory = valueProvided;
            }
        });

        /**
         * @description A flag to indicate that the server allows or needs to allow the client to
    create new identities on the server (that is, the client PUTs to a location
    where there is no existing resource). Allowing this operation means that the
    server allows the client to create new identities on the server.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'updateCreate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.updateCreate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.updateCreate = valueProvided;
            }
        });

        /**
         * @description A flag that indicates that the server supports conditional create.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'conditionalCreate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.conditionalCreate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.conditionalCreate = valueProvided;
            }
        });

        /**
         * @description A code that indicates how the server supports conditional read.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'conditionalRead', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.conditionalRead,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.conditionalRead = valueProvided;
            }
        });

        /**
         * @description A flag that indicates that the server supports conditional update.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'conditionalUpdate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.conditionalUpdate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.conditionalUpdate = valueProvided;
            }
        });

        /**
         * @description A code that indicates how the server supports conditional delete.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'conditionalDelete', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.conditionalDelete,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.conditionalDelete = valueProvided;
            }
        });

        /**
         * @description A set of flags that defines how references are supported.
         * @property {code[]|undefined}
        */
        Object.defineProperty(this, 'referencePolicy', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referencePolicy,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.referencePolicy = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description A list of _include values supported by the server.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'searchInclude', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.searchInclude,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.searchInclude = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description A list of _revinclude (reverse include) values supported by the server.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'searchRevInclude', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.searchRevInclude,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.searchRevInclude = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Search parameters for implementations to support and/or make use of - either
    references to ones defined in the specification, or additional ones defined
    for/by the implementation.
         * @property {CapabilityStatementSearchParam[]|undefined}
        */
        Object.defineProperty(this, 'searchParam', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.searchParam,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementSearchParam = require('../backbone_elements/capabilityStatementSearchParam.js');
                this.__data.searchParam = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementSearchParam(v)) : [new CapabilityStatementSearchParam(valueProvided)];
            }
        });

        /**
         * @description Definition of an operation or a named query together with its parameters and
    their meaning and type. Consult the definition of the operation for details
    about how to invoke the operation, and the parameters.
         * @property {CapabilityStatementOperation[]|undefined}
        */
        Object.defineProperty(this, 'operation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.operation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementOperation = require('../backbone_elements/capabilityStatementOperation.js');
                this.__data.operation = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementOperation(v)) : [new CapabilityStatementOperation(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            profile,
            supportedProfile,
            documentation,
            interaction,
            versioning,
            readHistory,
            updateCreate,
            conditionalCreate,
            conditionalRead,
            conditionalUpdate,
            conditionalDelete,
            referencePolicy,
            searchInclude,
            searchRevInclude,
            searchParam,
            operation,
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
            type: this.type,
            profile: this.profile,
            supportedProfile: this.supportedProfile,
            documentation: this.documentation,
            interaction: this.interaction && this.interaction.map(v => v.toJSON()),
            versioning: this.versioning,
            readHistory: this.readHistory,
            updateCreate: this.updateCreate,
            conditionalCreate: this.conditionalCreate,
            conditionalRead: this.conditionalRead,
            conditionalUpdate: this.conditionalUpdate,
            conditionalDelete: this.conditionalDelete,
            referencePolicy: this.referencePolicy,
            searchInclude: this.searchInclude,
            searchRevInclude: this.searchRevInclude,
            searchParam: this.searchParam && this.searchParam.map(v => v.toJSON()),
            operation: this.operation && this.operation.map(v => v.toJSON()),
        });
    }
}

module.exports = CapabilityStatementResource;