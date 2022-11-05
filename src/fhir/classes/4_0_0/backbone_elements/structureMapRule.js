/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
StructureMap.Rule
    A Map of relationships between 2 structures that can be used to transform
    data.
*/
class StructureMapRule extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {id} name,
     * @param {StructureMapSource[]} source,
     * @param {StructureMapTarget[]|undefined} [target],
     * @param {StructureMapRule[]|undefined} [rule],
     * @param {StructureMapDependent[]|undefined} [dependent],
     * @param {String|undefined} [documentation],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            name,
            source,
            target,
            rule,
            dependent,
            documentation,
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
         * @description Name of the rule for internal references.
         * @property {id}
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
         * @description Source inputs to the mapping.
         * @property {StructureMapSource[]}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let StructureMapSource = require('../backbone_elements/structureMapSource.js');
                this.__data.source = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapSource(v)) : [new StructureMapSource(valueProvided)];
            }
        });

        /**
         * @description Content to create because of this mapping rule.
         * @property {StructureMapTarget[]|undefined}
        */
        Object.defineProperty(this, 'target', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.target,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let StructureMapTarget = require('../backbone_elements/structureMapTarget.js');
                this.__data.target = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapTarget(v)) : [new StructureMapTarget(valueProvided)];
            }
        });

        /**
         * @description Rules contained in this rule.
         * @property {StructureMapRule[]|undefined}
        */
        Object.defineProperty(this, 'rule', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.rule,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.rule = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapRule(v)) : [new StructureMapRule(valueProvided)];
            }
        });

        /**
         * @description Which other rules to apply in the context of this rule.
         * @property {StructureMapDependent[]|undefined}
        */
        Object.defineProperty(this, 'dependent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dependent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let StructureMapDependent = require('../backbone_elements/structureMapDependent.js');
                this.__data.dependent = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapDependent(v)) : [new StructureMapDependent(valueProvided)];
            }
        });

        /**
         * @description Documentation for this instance of data.
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



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            name,
            source,
            target,
            rule,
            dependent,
            documentation,
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
            source: this.source && this.source.map(v => v.toJSON()),
            target: this.target && this.target.map(v => v.toJSON()),
            rule: this.rule && this.rule.map(v => v.toJSON()),
            dependent: this.dependent && this.dependent.map(v => v.toJSON()),
            documentation: this.documentation,
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

module.exports = StructureMapRule;
