/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MedicinalProductPackaged.PackageItem
    A medicinal product in a container or package.
*/
class MedicinalProductPackagedPackageItem extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept} type,
     * @param {Quantity} quantity,
     * @param {CodeableConcept[]|undefined} [material],
     * @param {CodeableConcept[]|undefined} [alternateMaterial],
     * @param {Reference[]|undefined} [device],
     * @param {Reference[]|undefined} [manufacturedItem],
     * @param {MedicinalProductPackagedPackageItem[]|undefined} [packageItem],
     * @param {ProdCharacteristic|undefined} [physicalCharacteristics],
     * @param {CodeableConcept[]|undefined} [otherCharacteristics],
     * @param {ProductShelfLife[]|undefined} [shelfLifeStorage],
     * @param {Reference[]|undefined} [manufacturer],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            identifier,
            type,
            quantity,
            material,
            alternateMaterial,
            device,
            manufacturedItem,
            packageItem,
            physicalCharacteristics,
            otherCharacteristics,
            shelfLifeStorage,
            manufacturer,
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
         * @description Including possibly Data Carrier Identifier.
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
         * @description The physical type of the container of the medicine.
         * @property {CodeableConcept}
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The quantity of this package in the medicinal product, at the current level of
    packaging. The outermost is always 1.
         * @property {Quantity}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description Material type of the package item.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'material', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.material,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.material = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description A possible alternate material for the packaging.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'alternateMaterial', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.alternateMaterial,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.alternateMaterial = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description A device accompanying a medicinal product.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'device', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.device,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.device = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The manufactured item as contained in the packaged medicinal product.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'manufacturedItem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manufacturedItem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.manufacturedItem = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Allows containers within containers.
         * @property {MedicinalProductPackagedPackageItem[]|undefined}
        */
        Object.defineProperty(this, 'packageItem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.packageItem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.packageItem = Array.isArray(valueProvided) ? valueProvided.map(v => new MedicinalProductPackagedPackageItem(v)) : [new MedicinalProductPackagedPackageItem(valueProvided)];
            }
        });

        /**
         * @description Dimensions, color etc.
         * @property {ProdCharacteristic|undefined}
        */
        Object.defineProperty(this, 'physicalCharacteristics', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.physicalCharacteristics,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ProdCharacteristic = require('../backbone_elements/prodCharacteristic.js');
                this.__data.physicalCharacteristics = new ProdCharacteristic(valueProvided);
            }
        });

        /**
         * @description Other codeable characteristics.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'otherCharacteristics', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.otherCharacteristics,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.otherCharacteristics = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Shelf Life and storage information.
         * @property {ProductShelfLife[]|undefined}
        */
        Object.defineProperty(this, 'shelfLifeStorage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.shelfLifeStorage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ProductShelfLife = require('../backbone_elements/productShelfLife.js');
                this.__data.shelfLifeStorage = Array.isArray(valueProvided) ? valueProvided.map(v => new ProductShelfLife(v)) : [new ProductShelfLife(valueProvided)];
            }
        });

        /**
         * @description Manufacturer of this Package Item.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'manufacturer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manufacturer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.manufacturer = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            type,
            quantity,
            material,
            alternateMaterial,
            device,
            manufacturedItem,
            packageItem,
            physicalCharacteristics,
            otherCharacteristics,
            shelfLifeStorage,
            manufacturer,
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            quantity: this.quantity && this.quantity.toJSON(),
            material: this.material && this.material.map(v => v.toJSON()),
            alternateMaterial: this.alternateMaterial && this.alternateMaterial.map(v => v.toJSON()),
            device: this.device && this.device.map(v => v.toJSON()),
            manufacturedItem: this.manufacturedItem && this.manufacturedItem.map(v => v.toJSON()),
            packageItem: this.packageItem && this.packageItem.map(v => v.toJSON()),
            physicalCharacteristics: this.physicalCharacteristics && this.physicalCharacteristics.toJSON(),
            otherCharacteristics: this.otherCharacteristics && this.otherCharacteristics.map(v => v.toJSON()),
            shelfLifeStorage: this.shelfLifeStorage && this.shelfLifeStorage.map(v => v.toJSON()),
            manufacturer: this.manufacturer && this.manufacturer.map(v => v.toJSON()),
        });
    }
}

module.exports = MedicinalProductPackagedPackageItem;
