/**
 * class that represents a resource and its contained entities
 */
const {EntityAndContainedBase} = require('./entityAndContainedBase');
const {assertIsValid} = require('../../utils/assertType');

class ResourceEntityAndContained extends EntityAndContainedBase {
    /**
     * class
     * @param {string} entityId
     * @param {string} entityResourceType
     * @param {boolean} includeInOutput
     * @param {Resource} resource
     * @param {EntityAndContainedBase[]} containedEntries
     */
    constructor(
        {
            entityId, entityResourceType,
            includeInOutput, resource, containedEntries
        }) {
        super({includeInOutput});
        /**
         * @type {string}
         */
        assertIsValid(entityId);
        this.entityId = entityId;
        /**
         * @type {string}
         */
        assertIsValid(entityResourceType);
        this.entityResourceType = entityResourceType;
        /**
         * @type {Resource}
         */
        assertIsValid(resource);
        this.resource = resource;
        /**
         * @type {[EntityAndContainedBase]}
         */
        assertIsValid(containedEntries);
        this.containedEntries = containedEntries;
    }
}

module.exports = {
    ResourceEntityAndContained
};
