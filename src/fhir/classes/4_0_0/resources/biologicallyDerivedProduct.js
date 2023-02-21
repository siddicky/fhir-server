/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');


/**
BiologicallyDerivedProduct
    A material substance originating from a biological entity intended to be
    transplanted or infused
    into another (possibly the same) biological entity.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class BiologicallyDerivedProduct extends Resource {
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
     * @param {code|undefined} [productCategory],
     * @param {CodeableConcept|undefined} [productCode],
     * @param {code|undefined} [status],
     * @param {Reference[]|undefined} [request],
     * @param {Int|undefined} [quantity],
     * @param {Reference[]|undefined} [parent],
     * @param {BiologicallyDerivedProductCollection|undefined} [collection],
     * @param {BiologicallyDerivedProductProcessing[]|undefined} [processing],
     * @param {BiologicallyDerivedProductManipulation|undefined} [manipulation],
     * @param {BiologicallyDerivedProductStorage[]|undefined} [storage],
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
            productCategory,
            productCode,
            status,
            request,
            quantity,
            parent,
            collection,
            processing,
            manipulation,
            storage,
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
         * @description This records identifiers associated with this biologically derived product
    instance that are defined by business processes and/or used to refer to it
    when a direct URL reference to the resource itself is not appropriate (e.g. in
    CDA documents, or in written / printed documentation).
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
         * @description Broad category of this product.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'productCategory', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productCategory,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.productCategory = undefined;
                    return;
                }
                this.__data.productCategory = valueProvided;
            }
        });

        /**
         * @description A code that identifies the kind of this biologically derived product (SNOMED
    Ctcode).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'productCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.productCode = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.productCode = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Whether the product is currently available.
         * @property {code|undefined}
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
         * @description Procedure request to obtain this biologically derived product.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'request', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.request,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.request = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.request = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Number of discrete units within this product.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.quantity = undefined;
                    return;
                }
                this.__data.quantity = valueProvided;
            }
        });

        /**
         * @description Parent product (if any).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'parent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.parent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.parent = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.parent = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description How this product was collected.
         * @property {BiologicallyDerivedProductCollection|undefined}
        */
        Object.defineProperty(this, 'collection', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.collection,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.collection = undefined;
                    return;
                }
                const BiologicallyDerivedProductCollection = require('../backbone_elements/biologicallyDerivedProductCollection.js');
                this.__data.collection = new BiologicallyDerivedProductCollection(valueProvided);
            }
        });

        /**
         * @description Any processing of the product during collection that does not change the
    fundamental nature of the product. For example adding anti-coagulants during
    the collection of Peripheral Blood Stem Cells.
         * @property {BiologicallyDerivedProductProcessing[]|undefined}
        */
        Object.defineProperty(this, 'processing', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.processing,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.processing = undefined;
                    return;
                }
                const BiologicallyDerivedProductProcessing = require('../backbone_elements/biologicallyDerivedProductProcessing.js');
                this.__data.processing = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new BiologicallyDerivedProductProcessing(v)) : [new BiologicallyDerivedProductProcessing(valueProvided)];
            }
        });

        /**
         * @description Any manipulation of product post-collection that is intended to alter the
    product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral
    Blood Stem Cells to make it more suitable for infusion.
         * @property {BiologicallyDerivedProductManipulation|undefined}
        */
        Object.defineProperty(this, 'manipulation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manipulation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.manipulation = undefined;
                    return;
                }
                const BiologicallyDerivedProductManipulation = require('../backbone_elements/biologicallyDerivedProductManipulation.js');
                this.__data.manipulation = new BiologicallyDerivedProductManipulation(valueProvided);
            }
        });

        /**
         * @description Product storage.
         * @property {BiologicallyDerivedProductStorage[]|undefined}
        */
        Object.defineProperty(this, 'storage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.storage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.storage = undefined;
                    return;
                }
                const BiologicallyDerivedProductStorage = require('../backbone_elements/biologicallyDerivedProductStorage.js');
                this.__data.storage = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new BiologicallyDerivedProductStorage(v)) : [new BiologicallyDerivedProductStorage(valueProvided)];
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
            productCategory,
            productCode,
            status,
            request,
            quantity,
            parent,
            collection,
            processing,
            manipulation,
            storage,
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
            value: 'BiologicallyDerivedProduct',
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
        return 'BiologicallyDerivedProduct';
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
     * @param {code|undefined} [productCategory],
     * @param {CodeableConcept|undefined} [productCode],
     * @param {code|undefined} [status],
     * @param {Reference[]|undefined} [request],
     * @param {Int|undefined} [quantity],
     * @param {Reference[]|undefined} [parent],
     * @param {BiologicallyDerivedProductCollection|undefined} [collection],
     * @param {BiologicallyDerivedProductProcessing[]|undefined} [processing],
     * @param {BiologicallyDerivedProductManipulation|undefined} [manipulation],
     * @param {BiologicallyDerivedProductStorage[]|undefined} [storage],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {BiologicallyDerivedProduct}
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
            productCategory,
            productCode,
            status,
            request,
            quantity,
            parent,
            collection,
            processing,
            manipulation,
            storage,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new BiologicallyDerivedProduct({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            productCategory,
            productCode,
            status,
            request,
            quantity,
            parent,
            collection,
            processing,
            manipulation,
            storage,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {BiologicallyDerivedProduct}
    */
    clone() {
        return new BiologicallyDerivedProduct(this.toJSONInternal());
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
            productCategory: this.productCategory,
            productCode: this.productCode && this.productCode.toJSON(),
            status: this.status,
            request: this.request && this.request.map(v => v.toJSON()),
            quantity: this.quantity,
            parent: this.parent && this.parent.map(v => v.toJSON()),
            collection: this.collection && this.collection.toJSON(),
            processing: this.processing && this.processing.map(v => v.toJSON()),
            manipulation: this.manipulation && this.manipulation.toJSON(),
            storage: this.storage && this.storage.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.meta) {await this.meta.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.text) {await this.text.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.contained) { async.each(this.contained, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.extension) { async.each(this.extension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.identifier) { async.each(this.identifier, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.productCode) {await this.productCode.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.request) { async.each(this.request, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.parent) { async.each(this.parent, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.collection) {await this.collection.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.processing) { async.each(this.processing, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
            if (this.manipulation) {await this.manipulation.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.storage) { async.each(this.storage, async v => await v.updateReferences({fnUpdateReferenceAsync}));}
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
            productCategory: this.productCategory,
            productCode: this.productCode && this.productCode.toJSONInternal(),
            status: this.status,
            request: this.request && this.request.map(v => v.toJSONInternal()),
            quantity: this.quantity,
            parent: this.parent && this.parent.map(v => v.toJSONInternal()),
            collection: this.collection && this.collection.toJSONInternal(),
            processing: this.processing && this.processing.map(v => v.toJSONInternal()),
            manipulation: this.manipulation && this.manipulation.toJSONInternal(),
            storage: this.storage && this.storage.map(v => v.toJSONInternal()),
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

module.exports = BiologicallyDerivedProduct;
