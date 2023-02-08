/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ConceptMap.Group
    A statement of relationships from one set of concepts to one or more other
    concepts - either concepts in code systems, or data element/data element
    concepts, or classes in class models.
*/
class ConceptMapGroup extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {uri|undefined} [source],
     * @param {String|undefined} [sourceVersion],
     * @param {uri|undefined} [target],
     * @param {String|undefined} [targetVersion],
     * @param {ConceptMapElement[]} element,
     * @param {ConceptMapUnmapped|undefined} [unmapped],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            source,
            sourceVersion,
            target,
            targetVersion,
            element,
            unmapped,
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description An absolute URI that identifies the source system where the concepts to be
    mapped are defined.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.source = undefined;
                    return;
                }
                this.__data.source = valueProvided;
            }
        });

        /**
         * @description The specific version of the code system, as determined by the code system
    authority.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'sourceVersion', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceVersion,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceVersion = undefined;
                    return;
                }
                this.__data.sourceVersion = valueProvided;
            }
        });

        /**
         * @description An absolute URI that identifies the target system that the concepts will be
    mapped to.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'target', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.target,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.target = undefined;
                    return;
                }
                this.__data.target = valueProvided;
            }
        });

        /**
         * @description The specific version of the code system, as determined by the code system
    authority.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'targetVersion', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.targetVersion,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.targetVersion = undefined;
                    return;
                }
                this.__data.targetVersion = valueProvided;
            }
        });

        /**
         * @description Mappings for an individual concept in the source to one or more concepts in
    the target.
         * @property {ConceptMapElement[]}
        */
        Object.defineProperty(this, 'element', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.element,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.element = undefined;
                    return;
                }
                const ConceptMapElement = require('../backbone_elements/conceptMapElement.js');
                this.__data.element = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConceptMapElement(v)) : [new ConceptMapElement(valueProvided)];
            }
        });

        /**
         * @description What to do when there is no mapping for the source concept. "Unmapped" does
    not include codes that are unmatched, and the unmapped element is ignored in a
    code is specified to have equivalence = unmatched.
         * @property {ConceptMapUnmapped|undefined}
        */
        Object.defineProperty(this, 'unmapped', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unmapped,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unmapped = undefined;
                    return;
                }
                const ConceptMapUnmapped = require('../backbone_elements/conceptMapUnmapped.js');
                this.__data.unmapped = new ConceptMapUnmapped(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            source,
            sourceVersion,
            target,
            targetVersion,
            element,
            unmapped,
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
            source: this.source,
            sourceVersion: this.sourceVersion,
            target: this.target,
            targetVersion: this.targetVersion,
            element: this.element && this.element.map(v => v.toJSON()),
            unmapped: this.unmapped && this.unmapped.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.element) {this.element.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.unmapped) {this.unmapped.updateReferences({fnUpdateReference});}
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
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            source: this.source,
            sourceVersion: this.sourceVersion,
            target: this.target,
            targetVersion: this.targetVersion,
            element: this.element && this.element.map(v => v.toJSONInternal()),
            unmapped: this.unmapped && this.unmapped.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = ConceptMapGroup;
