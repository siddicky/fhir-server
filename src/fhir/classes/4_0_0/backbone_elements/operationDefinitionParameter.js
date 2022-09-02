/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
OperationDefinition.Parameter
    A formal computable definition of an operation (on the RESTful interface) or a
    named query (using the search interaction).
*/
class OperationDefinitionParameter extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} name,
     * @param {code} use,
     * @param {Int} min,
     * @param {String} max,
     * @param {String|undefined} [documentation],
     * @param {code|undefined} [type],
     * @param {canonical[]|undefined} [targetProfile],
     * @param {code|undefined} [searchType],
     * @param {OperationDefinitionBinding|undefined} [binding],
     * @param {OperationDefinitionReferencedFrom[]|undefined} [referencedFrom],
     * @param {OperationDefinitionParameter[]|undefined} [part],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            name,
            use,
            min,
            max,
            documentation,
            type,
            targetProfile,
            searchType,
            binding,
            referencedFrom,
            part,
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
         * @description The name of used to identify the parameter.
         * @property {code}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description Whether this is an input or an output parameter.
         * @property {code}
        */
        Object.defineProperty(this, 'use', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.use,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.use = valueProvided;
            }
        });

        /**
         * @description The minimum number of times this parameter SHALL appear in the request or
    response.
         * @property {Int}
        */
        Object.defineProperty(this, 'min', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.min,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.min = valueProvided;
            }
        });

        /**
         * @description The maximum number of times this element is permitted to appear in the request
    or response.
         * @property {String}
        */
        Object.defineProperty(this, 'max', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.max,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.max = valueProvided;
            }
        });

        /**
         * @description Describes the meaning or use of this parameter.
         * @property {String|undefined}
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
         * @description The type for this parameter.
         * @property {code|undefined}
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
         * @description Used when the type is "Reference" or "canonical", and identifies a profile
    structure or implementation Guide that applies to the target of the reference
    this parameter refers to. If any profiles are specified, then the content must
    conform to at least one of them. The URL can be a local reference - to a
    contained StructureDefinition, or a reference to another StructureDefinition
    or Implementation Guide by a canonical URL. When an implementation guide is
    specified, the target resource SHALL conform to at least one profile defined
    in the implementation guide.
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'targetProfile', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.targetProfile,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.targetProfile = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description How the parameter is understood as a search parameter. This is only used if
    the parameter type is 'string'.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'searchType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.searchType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.searchType = valueProvided;
            }
        });

        /**
         * @description Binds to a value set if this parameter is coded (code, Coding,
    CodeableConcept).
         * @property {OperationDefinitionBinding|undefined}
        */
        Object.defineProperty(this, 'binding', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.binding,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let OperationDefinitionBinding = require('../backbone_elements/operationDefinitionBinding.js');
                this.__data.binding = new OperationDefinitionBinding(valueProvided);
            }
        });

        /**
         * @description Identifies other resource parameters within the operation invocation that are
    expected to resolve to this resource.
         * @property {OperationDefinitionReferencedFrom[]|undefined}
        */
        Object.defineProperty(this, 'referencedFrom', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referencedFrom,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let OperationDefinitionReferencedFrom = require('../backbone_elements/operationDefinitionReferencedFrom.js');
                this.__data.referencedFrom = Array.isArray(valueProvided) ? valueProvided.map(v => new OperationDefinitionReferencedFrom(v)) : [new OperationDefinitionReferencedFrom(valueProvided)];
            }
        });

        /**
         * @description The parts of a nested Parameter.
         * @property {OperationDefinitionParameter[]|undefined}
        */
        Object.defineProperty(this, 'part', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.part,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.part = Array.isArray(valueProvided) ? valueProvided.map(v => new OperationDefinitionParameter(v)) : [new OperationDefinitionParameter(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            name,
            use,
            min,
            max,
            documentation,
            type,
            targetProfile,
            searchType,
            binding,
            referencedFrom,
            part,
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
            name: this.name,
            use: this.use,
            min: this.min,
            max: this.max,
            documentation: this.documentation,
            type: this.type,
            targetProfile: this.targetProfile,
            searchType: this.searchType,
            binding: this.binding && this.binding.toJSON(),
            referencedFrom: this.referencedFrom && this.referencedFrom.map(v => v.toJSON()),
            part: this.part && this.part.map(v => v.toJSON()),
        });
    }
}

module.exports = OperationDefinitionParameter;
