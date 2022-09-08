/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
RelatedArtifact
    Related artifacts such as additional documentation, justification, or
    bibliographic references.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class RelatedArtifact extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {code} type,
     * @param {String|undefined} [label],
     * @param {String|undefined} [display],
     * @param {markdown|undefined} [citation],
     * @param {url|undefined} [url],
     * @param {Attachment|undefined} [document],
     * @param {canonical|undefined} [resource],
    */
    constructor(
        {
            id,
            extension,
            type,
            label,
            display,
            citation,
            url,
            document,
            resource,
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
         * @description The type of relationship to the related artifact.
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
         * @description A short label that can be used to reference the citation from elsewhere in the
    containing artifact, such as a footnote index.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'label', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.label,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.label = valueProvided;
            }
        });

        /**
         * @description A brief description of the document or knowledge resource being referenced,
    suitable for display to a consumer.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'display', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.display,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.display = valueProvided;
            }
        });

        /**
         * @description A bibliographic citation for the related artifact. This text SHOULD be
    formatted according to an accepted citation format.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'citation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.citation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.citation = valueProvided;
            }
        });

        /**
         * @description A url for the artifact that can be followed to access the actual content.
         * @property {url|undefined}
        */
        Object.defineProperty(this, 'url', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.url,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.url = valueProvided;
            }
        });

        /**
         * @description The document being referenced, represented as an attachment. This is exclusive
    with the resource element.
         * @property {Attachment|undefined}
        */
        Object.defineProperty(this, 'document', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.document,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Attachment = require('../complex_types/attachment.js');
                this.__data.document = new Attachment(valueProvided);
            }
        });

        /**
         * @description The related resource, such as a library, value set, profile, or other
    knowledge resource.
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.resource = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            type,
            label,
            display,
            citation,
            url,
            document,
            resource,
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
            type: this.type,
            label: this.label,
            display: this.display,
            citation: this.citation,
            url: this.url,
            document: this.document && this.document.toJSON(),
            resource: this.resource,
        });
    }
}

module.exports = RelatedArtifact;