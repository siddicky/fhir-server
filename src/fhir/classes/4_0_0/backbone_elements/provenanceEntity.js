/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Provenance.Entity
    Provenance of a resource is a record that describes entities and processes
    involved in producing and delivering or otherwise influencing that resource.
    Provenance provides a critical foundation for assessing authenticity, enabling
    trust, and allowing reproducibility. Provenance assertions are a form of
    contextual metadata and can themselves become important records with their own
    provenance. Provenance statement indicates clinical significance in terms of
    confidence in authenticity, reliability, and trustworthiness, integrity, and
    stage in lifecycle (e.g. Document Completion - has the artifact been legally
    authenticated), all of which may impact security, privacy, and trust policies.
*/
class ProvenanceEntity extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} role,
     * @param {Reference} what,
     * @param {ProvenanceAgent[]|undefined} [agent],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            role,
            what,
            agent,
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
         * @description How the entity was used during the activity.
         * @property {code}
        */
        Object.defineProperty(this, 'role', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.role,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.role = undefined;
                    return;
                }
                this.__data.role = valueProvided;
            }
        });

        /**
         * @description Identity of the  Entity used. May be a logical or physical uri and maybe
    absolute or relative.
         * @property {Reference}
        */
        Object.defineProperty(this, 'what', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.what,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.what = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.what = new Reference(valueProvided);
            }
        });

        /**
         * @description The entity is attributed to an agent to express the agent's responsibility for
    that entity, possibly along with other agents. This description can be
    understood as shorthand for saying that the agent was responsible for the
    activity which generated the entity.
         * @property {ProvenanceAgent[]|undefined}
        */
        Object.defineProperty(this, 'agent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.agent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.agent = undefined;
                    return;
                }
                const ProvenanceAgent = require('../backbone_elements/provenanceAgent.js');
                this.__data.agent = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ProvenanceAgent(v)) : [new ProvenanceAgent(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            role,
            what,
            agent,
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
            role: this.role,
            what: this.what && this.what.toJSON(),
            agent: this.agent && this.agent.map(v => v.toJSON()),
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
            if (this.what) {this.what.updateReferences({fnUpdateReference});}
            if (this.agent) {this.agent.forEach(v => v.updateReferences({fnUpdateReference}));}
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
            role: this.role,
            what: this.what && this.what.toJSONInternal(),
            agent: this.agent && this.agent.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ProvenanceEntity;
