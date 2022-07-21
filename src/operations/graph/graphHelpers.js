/**
 * This file contains functions to retrieve a graph of data from the database
 */
const {getResource} = require('../common/getResource');
const {buildR4SearchQuery} = require('../query/r4');
const assert = require('assert');
const {
    verifyHasValidScopes,
    doesResourceHaveAnyAccessCodeFromThisList,
    getAccessCodesFromScopes
} = require('../security/scopes');
const env = require('var');
const moment = require('moment-timezone');
const {removeNull} = require('../../utils/nullRemover');
const {getFieldNameForSearchParameter} = require('../../searchParameters/searchParameterHelpers');
const {getSecurityTagsFromScope, getQueryWithSecurityTags} = require('../common/getSecurityTags');
const {escapeRegExp} = require('../../utils/regexEscaper');
const {getOrCreateCollectionForResourceTypeAsync} = require('../common/resourceManager');


/**
 * Base class for an entity and its contained entities
 */
class EntityAndContainedBase {
    /**
     * @param {boolean} includeInOutput
     */
    constructor(includeInOutput) {
        /**
         * @type {boolean}
         */
        this.includeInOutput = includeInOutput;
    }
}

/**
 * class that represents a resource and its contained entities
 */
class ResourceEntityAndContained extends EntityAndContainedBase {
    /**
     * class
     * @param {string} entityId
     * @param {string} entityResourceType
     * @param {string} fullUrl
     * @param {boolean} includeInOutput
     * @param {Resource} resource
     * @param {EntityAndContainedBase[]} containedEntries
     */
    constructor(entityId, entityResourceType, fullUrl, includeInOutput, resource, containedEntries) {
        super(includeInOutput);
        /**
         * @type {string}
         */
        assert(entityId);
        this.entityId = entityId;
        /**
         * @type {string}
         */
        assert(entityResourceType);
        this.entityResourceType = entityResourceType;
        /**
         * @type {string}
         */
        assert(fullUrl);
        this.fullUrl = fullUrl;
        /**
         * @type {Resource}
         */
        assert(resource);
        this.resource = resource;
        /**
         * @type {[EntityAndContainedBase]}
         */
        assert(containedEntries);
        this.containedEntries = containedEntries;
    }
}

/**
 * class that represents a non-resource (such as an element inside a resource) and its contained entities
 */
class NonResourceEntityAndContained extends EntityAndContainedBase {
    /**
     * class
     * @param {boolean} includeInOutput
     * @param {*} item
     * @param {EntityAndContainedBase[]} containedEntries
     */
    constructor(includeInOutput, item, containedEntries) {
        super(includeInOutput);
        /**
         * @type {*}
         */
        assert(item);
        this.item = item;
        /**
         * @type {[EntityAndContainedBase]}
         */
        assert(containedEntries);
        this.containedEntries = containedEntries;
    }
}

/**
 * This class has request related parameters
 */
class GraphParameters {
    /**
     * @param {string} base_version
     * @param {string[]} accessCodes
     * @param {string} user
     * @param {string} scope
     * @param {string} host
     * @param {string} protocol
     * @param {boolean} useAtlas
     */
    constructor(base_version, protocol, host, user, scope, accessCodes, useAtlas) {
        /**
         * @type {string}
         */
        this.base_version = base_version;
        /**
         * @type {string}
         */
        this.protocol = protocol;
        /**
         * @type {string}
         */
        this.host = host;
        /**
         * @type {string}
         */
        this.user = user;
        /**
         * @type {string}
         */
        this.scope = scope;
        /**
         * @type {string[]}
         */
        this.accessCodes = accessCodes;
        /**
         * @type {boolean}
         */
        this.useAtlas = useAtlas;
    }
}

/**
 * generates a full url for an entity
 * @param {GraphParameters} graphParameters
 * @param {Resource} parentEntity
 * @return {string}
 */
function getFullUrlForResource(graphParameters, parentEntity) {
    return `${graphParameters.protocol}://${graphParameters.host}/${graphParameters.base_version}/${parentEntity.resourceType}/${parentEntity.id}`;
}

/**
 * returns property values
 * @param {EntityAndContainedBase} entity
 * @param {string} property Property to read
 * @param {string?} filterProperty Filter property (optional)
 * @param {string?} filterValue Filter value (optional)
 * @returns {*[]}
 */
function getPropertiesForEntity(entity, property, filterProperty, filterValue) {
    const item = (entity instanceof ResourceEntityAndContained) ? entity.resource : entity.item;
    if (property.includes('.')) { // this is a nested property so recurse down and find the value
        /**
         * @type {string[]}
         */
        const propertyComponents = property.split('.');
        let currentElements = [item];
        for (const propertyComponent of propertyComponents) {
            // find nested elements where the property is present and select the property
            currentElements = currentElements.filter(c => c[`${propertyComponent}`]).flatMap(c => c[`${propertyComponent}`]);
            if (currentElements.length === 0) {
                return [];
            }
        }
        // if there is a filter then check that the last element has that value
        if (filterProperty) {
            currentElements = currentElements.filter(c => c[`${filterProperty}`] && c[`${filterProperty}`] === filterValue);
        }
        return currentElements;
    } else {
        return [item[`${property}`]];
    }
}

/**
 * retrieves references from the provided property.
 * Always returns an array of references whether the property value is an array or just an object
 * @param {Object || Object[]} propertyValue
 * @return {string[]}
 */
function getReferencesFromPropertyValue(propertyValue) {
    return Array.isArray(propertyValue) ? propertyValue.map(a => a['reference']) : [propertyValue['reference']];
}

/**
 * returns whether this property is a reference (by checking if it has a reference sub property)
 * @param {EntityAndContainedBase[]} entities
 * @param {string} property
 * @param {string?} filterProperty
 * @param {string?} filterValue
 * @returns {boolean}
 */
function isPropertyAReference(entities, property, filterProperty, filterValue) {
    /**
     * @type {EntityAndContainedBase}
     */
    for (const entity of entities) {
        /**
         * @type {*[]}
         */
        const propertiesForEntity = getPropertiesForEntity(entity, property, filterProperty, filterValue);
        const references = propertiesForEntity
            .flatMap(r => getReferencesFromPropertyValue(r))
            .filter(r => r !== undefined);

        if (references && references.length > 0) { // if it has a 'reference' property then it is a reference
            return true; // we assume that if one entity has it then all entities can since they are of same type
        }
    }
    return false;
}

/**
 * Gets related resources and adds them to containedEntries in parentEntities
 * @param {GraphParameters} graphParameters
 * @param {string} resourceType
 * @param {EntityAndContainedBase[]} parentEntities
 * @param {string} property
 * @param {string | null} filterProperty (Optional) filter the sublist by this property
 * @param {*} filterValue (Optional) match filterProperty to this value
 */
async function get_forward_references(graphParameters, resourceType,
                                      parentEntities, property,
                                      filterProperty, filterValue) {
    if (!parentEntities || parentEntities.length === 0) {
        return; // nothing to do
    }
    /**
     * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>}
     */
    const collection = await getOrCreateCollectionForResourceTypeAsync(resourceType, graphParameters.base_version, graphParameters.useAtlas);
    /**
     * @type {function(?Object): Resource}
     */
    const RelatedResource = getResource(graphParameters.base_version, resourceType);

    // get values of this property from all the entities
    const relatedReferences = parentEntities.flatMap(p =>
        getPropertiesForEntity(p, property)
            .flatMap(r => getReferencesFromPropertyValue(r))
            .filter(r => r !== undefined)
    );
    // select just the ids from those reference properties
    let relatedReferenceIds = relatedReferences
        .filter(r => r.includes('/'))
        .filter(r => r.split('/')[0] === resourceType) // resourceType matches the one we're looking for
        .map(r => r.split('/')[1]);
    if (relatedReferenceIds.length === 0) {
        return; // nothing to do
    }
    // remove duplicates to speed up data access
    relatedReferenceIds = Array.from(new Set(relatedReferenceIds));
    const options = {};
    const projection = {};
    // also exclude _id so if there is a covering index the query can be satisfied from the covering index
    projection['_id'] = 0;
    options['projection'] = projection;
    /**
     * @type {string[]}
     */
    let securityTags = getSecurityTagsFromScope(graphParameters.user, graphParameters.scope);
    /**
     * @type {Object}
     */
    let query = {
        'id': {
            $in: relatedReferenceIds
        }
    };
    if (filterProperty) {
        query[`${filterProperty}`] = filterValue;
    }
    query = getQueryWithSecurityTags(resourceType, securityTags, query);
    /**
     * @type {number}
     */
    const maxMongoTimeMS = env.MONGO_TIMEOUT ? parseInt(env.MONGO_TIMEOUT) : (30 * 1000);
    /**
     * mongo db cursor
     * @type {Promise<Cursor<Document>> | *}
     */
    const cursor = await collection.find(query, options).maxTimeMS(maxMongoTimeMS);

    while (await cursor.hasNext()) {
        const element = await cursor.next();
        const relatedResource = removeNull(new RelatedResource(element).toJSON());

        // create a class to hold information about this resource
        const relatedEntityAndContained = new ResourceEntityAndContained(
            relatedResource.id,
            relatedResource.resourceType,
            getFullUrlForResource(graphParameters, relatedResource),
            true,
            relatedResource,
            []
        );

        // find matching parent and add to containedEntries
        const matchingParentEntities = parentEntities.filter(
            p => (
                getPropertiesForEntity(p, property)
                    .flatMap(r => getReferencesFromPropertyValue(r))
                    .filter(r => r !== undefined)
                    .includes(`${relatedResource.resourceType}/${relatedResource.id}`)
            )
        );

        if (matchingParentEntities.length === 0) {
            throw new Error(
                `Forward Reference: No match found for child entity ${relatedResource.resourceType}/${relatedResource.id}` +
                ' in parent entities' +
                ` ${parentEntities.map(p => `${p.resource.resourceType}/${p.resource.id}`).toString()}` +
                ` using property ${property}`
            );
        }

        // add it to each one since there can be multiple resources that point to the same related resource
        for (const matchingParentEntity of matchingParentEntities) {
            matchingParentEntity.containedEntries = matchingParentEntity.containedEntries.concat(
                relatedEntityAndContained
            );
        }
    }
}

/**
 * converts a query string into an args array
 * @type {import('mongodb').Document}
 */
function parseQueryStringIntoArgs(queryString) {
    return Object.fromEntries(new URLSearchParams(queryString));
}

/**
 * Gets related resources using reverse link and add them to containedEntries in parentEntities
 * @param {GraphParameters} graphParameters
 * @param {string} parentResourceType
 * @param {string} relatedResourceType
 * @param {EntityAndContainedBase[]}  parentEntities parent entities
 * @param {string | null} filterProperty (Optional) filter the sublist by this property
 * @param {*} filterValue (Optional) match filterProperty to this value
 * @param {string} reverse_filter Do a reverse link from child to parent using this property
 */
async function get_reverse_references(
    graphParameters, parentResourceType,
    relatedResourceType, parentEntities,
    filterProperty, filterValue, reverse_filter) {
    if (!(reverse_filter)) {
        throw new Error('reverse_filter must be set');
    }
    // create comma separated list of ids
    const parentIdList = parentEntities.map(p => p.entityId).filter(p => p !== undefined);
    if (parentIdList.length === 0) {
        return;
    }
    const reverseFilterWithParentIds = reverse_filter.replace(
        '{ref}',
        `${parentResourceType}/${parentIdList.toString()}`
    );
    /**
     * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>}
     */
    const collection = await getOrCreateCollectionForResourceTypeAsync(relatedResourceType, graphParameters.base_version, graphParameters.useAtlas);

    /**
     * @type {function(?Object): Resource}
     */
    const RelatedResource = getResource(graphParameters.base_version, relatedResourceType);

    /**
     * @type {Object}
     */
    const args = parseQueryStringIntoArgs(reverseFilterWithParentIds);
    const searchParameterName = Object.keys(args)[0];
    let query = buildR4SearchQuery(relatedResourceType, args).query;

    /**
     * @type {string[]}
     */
    let securityTags = getSecurityTagsFromScope(graphParameters.user, graphParameters.scope);
    query = getQueryWithSecurityTags(relatedResourceType, securityTags, query);

    const options = {};
    const projection = {};
    // also exclude _id so if there is a covering index the query can be satisfied from the covering index
    projection['_id'] = 0;
    options['projection'] = projection;

    /**
     * @type {number}
     */
    const maxMongoTimeMS = env.MONGO_TIMEOUT ? parseInt(env.MONGO_TIMEOUT) : (30 * 1000);
    /**
     * @type {import('mongodb').Cursor}
     */
    /**
     * mongo db cursor
     * @type {Promise<Cursor<Document>> | *}
     */
    const cursor = await collection.find(query, options).maxTimeMS(maxMongoTimeMS);

    // find matching field name in searchParameter list.  We will use this to match up to parent
    /**
     * @type {string}
     */
    const fieldForSearchParameter = getFieldNameForSearchParameter(relatedResourceType, searchParameterName);

    if (!fieldForSearchParameter) {
        throw new Error(`${searchParameterName} is not a valid search parameter for resource ${relatedResourceType}`);
    }

    while (await cursor.hasNext()) {
        /**
         * @type {Resource}
         */
        const relatedResourcePropertyCurrent = await cursor.next();
        if (filterProperty !== null) {
            if (relatedResourcePropertyCurrent[`${filterProperty}`] !== filterValue) {
                continue;
            }
        }
        // create the entry
        const resourceEntityAndContained = new ResourceEntityAndContained(
            relatedResourcePropertyCurrent.id,
            relatedResourcePropertyCurrent.resourceType,
            getFullUrlForResource(graphParameters, relatedResourcePropertyCurrent),
            true,
            removeNull(new RelatedResource(relatedResourcePropertyCurrent).toJSON()),
            []
        );
        // now match to parent entity, so we can put under correct contained property
        const properties = getPropertiesForEntity(resourceEntityAndContained, fieldForSearchParameter);
        // the reference property can be a single item or an array.
        /**
         * @type {string[]}
         */
        const references = properties
            .flatMap(r => getReferencesFromPropertyValue(r))
            .filter(r => r !== undefined);
        const matchingParentEntities = parentEntities.filter(
            p => references.includes(`${p.resource.resourceType}/${p.resource.id}`)
        );

        if (matchingParentEntities.length === 0) {
            throw new Error(
                'Reverse Reference: No match found for parent entities' +
                ` ${parentEntities.map(p => `${p.resource.resourceType}/${p.resource.id}`).toString()}` +
                ` using property ${fieldForSearchParameter}` +
                ` in child entity ${relatedResourcePropertyCurrent.resourceType}/${relatedResourcePropertyCurrent.id}`
            );
        }

        for (const matchingParentEntity of matchingParentEntities) {
            matchingParentEntity.containedEntries.push(
                resourceEntityAndContained
            );
        }
    }
}

/**
 * returns whether the resource has the passed in property (handles nested properties)
 * @param {EntityAndContainedBase} entity
 * @param {string} property
 * @param {string} filterProperty
 * @param {string} filterValue
 * @returns {*}
 */
function doesEntityHaveProperty(entity, property, filterProperty, filterValue) {
    const item = (entity instanceof ResourceEntityAndContained) ? entity.resource : entity.item;
    if (property.includes('.')) {
        /**
         * @type {string[]}
         */
        const propertyComponents = property.split('.');
        /**
         * @type {*[]}
         */
        let currentElements = [item];
        /**
         * @type {string}
         */
        for (const propertyComponent of propertyComponents) {
            // find nested elements where the property is present and select the property
            currentElements = currentElements.filter(c => c[`${propertyComponent}`]).flatMap(c => c[`${propertyComponent}`]);
            if (currentElements.length === 0) {
                return false;
            }
        }
        // if there is a filter then check that the last element has that value
        if (filterProperty) {
            currentElements = currentElements.filter(c => c[`${filterProperty}`] && c[`${filterProperty}`] === filterValue);
            return (currentElements.length > 0);
        } else { // if not filter then just return true if we find the field
            return true;
        }
    } else {
        return item[`${property}`];
    }
}

/**
 * Parses the filter out of the property name
 * @param {string} property
 * @returns {{filterValue: string, filterProperty: string, property: string}}
 */
function getFilterFromPropertyPath(property) {
    /**
     * @type {string}
     */
    let filterProperty;
    /**
     * @type {string}
     */
    let filterValue;
    // if path is more complex and includes filter
    if (property.includes(':')) {
        /**
         * @type {string[]}
         */
        const property_split = property.split(':');
        if (property_split && property_split.length > 0) {
            /**
             * @type {string}
             */
            property = property_split[0];
            /**
             * @type {string[]}
             */
            const filterPropertySplit = property_split[1].split('=');
            if (filterPropertySplit.length > 1) {
                /**
                 * @type {string}
                 */
                filterProperty = filterPropertySplit[0];
                /**
                 * @type {string}
                 */
                filterValue = filterPropertySplit[1];
            }
        }
    }
    return {filterProperty, filterValue, property};
}

/**
 * processes a single graph link
 * @param {GraphParameters} graphParameters
 * @param {string | null} parentResourceType
 * @param {{path: string, params: string, target: {type: string}[]}} link
 * @param {[EntityAndContainedBase]} parentEntities
 */
async function processOneGraphLink(graphParameters,
                                   parentResourceType,
                                   link,
                                   parentEntities) {

    /**
     * @type {EntityAndContainedBase[]}
     */
    let childEntries = [];
    /**
     * @type {{type: string}[]}
     */
    let link_targets = link.target;
    for (const target of link_targets) {
        /**
         * If this is not set then the caller does not want this entity but a nested entity
         * defined further in the GraphDefinition
         * @type {string | null}
         */
        const resourceType = target.type;
        // there are two types of linkages:
        // 1. forward linkage: a property in the current object is a reference to the target object (uses "path")
        // 2. reverse linkage: a property in the target object is a reference to the current object (uses "params")
        if (link.path) { // forward link
            /**
             * @type {string}
             */
            const originalProperty = link.path.replace('[x]', '');
            const {filterProperty, filterValue, property} = getFilterFromPropertyPath(originalProperty);
            // find parent entities that have a valid property
            parentEntities = parentEntities.filter(
                p => doesEntityHaveProperty(p, property, filterProperty, filterValue)
            );
            // if this is a reference then get related resources
            if (isPropertyAReference(parentEntities, property, filterProperty, filterValue)) {
                verifyHasValidScopes(resourceType, 'read', graphParameters.user, graphParameters.scope);
                await get_forward_references(
                    graphParameters,
                    resourceType,
                    parentEntities,
                    property,
                    filterProperty,
                    filterValue
                );
                childEntries = parentEntities.flatMap(p => p.containedEntries);
            } else { // handle paths that are not references
                childEntries = [];
                for (const parentEntity of parentEntities) {
                    // create child entries
                    /**
                     * @type {*[]}
                     */
                    const children = getPropertiesForEntity(parentEntity, property, filterProperty, filterValue);
                    /**
                     * @type {NonResourceEntityAndContained[]}
                     */
                    const childEntriesForCurrentEntity = children.map(c => new NonResourceEntityAndContained(
                            target.type !== undefined, // if caller has requested this entity or just wants a nested entity
                            c,
                            []
                        )
                    );
                    childEntries = childEntries.concat(childEntriesForCurrentEntity);
                    parentEntity.containedEntries = parentEntity.containedEntries.concat(childEntriesForCurrentEntity);
                }
            }
        } else if (target.params) { // reverse link
            if (target.type) { // if caller has requested this entity or just wants a nested entity
                // reverse link
                /**
                 * @type {string}
                 */
                verifyHasValidScopes(resourceType, 'read', graphParameters.user, graphParameters.scope);
                if (!parentResourceType) {
                    throw new Error(
                        'processOneGraphLink: No parent resource found for reverse references for parent entities:' +
                        ` ${parentEntities.map(p => `${p.resource.resourceType}/${p.resource.id}`).toString()}` +
                        ` using target.params: ${target.params}`
                    );
                }
                await get_reverse_references(
                    graphParameters,
                    parentResourceType,
                    resourceType,
                    parentEntities,
                    null,
                    null,
                    target.params
                );
                childEntries = parentEntities.flatMap(p => p.containedEntries);
            }
        }

        // filter childEntries to find entries of same type as parentResource
        childEntries = childEntries.filter(c =>
            (!target.type && !c.resource) || // either there is no target type so choose non-resources
            (target.type && c.resource && c.resource.resourceType === target.type) // or there is a target type so match to it
        );
        if (childEntries && childEntries.length > 0) {
            /**
             * @type {string|null}
             */
            const childResourceType = target.type;

            // Now recurse down and process the link
            /**
             * @type {[{path:string, params: string,target:[{type: string}]}]}
             */
            const childLinks = target.link;
            if (childLinks) {
                /**
                 * @type {{path:string, params: string,target:[{type: string}]}}
                 */
                for (const childLink of childLinks) {
                    // now recurse and process the next link in GraphDefinition
                    await processOneGraphLink(
                        graphParameters,
                        childResourceType,
                        childLink,
                        childEntries
                    );
                }
            }
        }
    }
}

/**
 * processes a list of graph links
 * @param {GraphParameters} graphParameters
 * @param {string} parentResourceType
 * @param {[Resource]} parentEntities
 * @param {[{path:string, params: string,target:[{type: string}]}]} linkItems
 * @return {Promise<[ResourceEntityAndContained]>}
 */
async function processGraphLinks(graphParameters,
                                 parentResourceType,
                                 parentEntities, linkItems) {
    /**
     * @type {[ResourceEntityAndContained]}
     */
    const resultEntities = parentEntities.map(e => new ResourceEntityAndContained(e.id, e.resourceType,
        getFullUrlForResource(graphParameters, e), true, e, []));
    /**
     * @type {{path:string, params: string,target:[{type: string}]}}
     */
    for (const link of linkItems) {
        /**
         * @type {Resource}
         */
        /**
         * @type {ResourceEntityAndContained[]}
         */
        await processOneGraphLink(graphParameters, parentResourceType, link, resultEntities);
    }
    return resultEntities;
}

/**
 * prepends # character in references
 * @param {Resource} parent_entity
 * @param {[reference:string]} linkReferences
 * @return {Promise<Resource>}
 */
async function convertToHashedReferences(parent_entity, linkReferences) {
    /**
     * @type {Set<string>}
     */
    const uniqueReferences = new Set(linkReferences);
    if (parent_entity) {
        /**
         * @type {string}
         */
        for (const link_reference of uniqueReferences) {
            // eslint-disable-next-line security/detect-non-literal-regexp
            let re = new RegExp('\\b' + escapeRegExp(link_reference) + '\\b', 'g');
            parent_entity = JSON.parse(JSON.stringify(parent_entity).replace(re, '#'.concat(link_reference)));
        }
    }
    return parent_entity;
}

/**
 * get all the contained entities recursively
 * @param {EntityAndContainedBase} entityAndContained
 * @returns {{resource: Resource, fullUrl: string}[]}
 */
function getRecursiveContainedEntities(entityAndContained) {
    /**
     * @type {{resource: Resource, fullUrl: string}[]}
     */
    let result = [];
    if (entityAndContained.includeInOutput) { // only include entities the caller has requested
        result = result.concat([{
            fullUrl: entityAndContained.fullUrl,
            resource: entityAndContained.resource
        }]);
    }

    // now recurse
    result = result.concat(entityAndContained.containedEntries.flatMap(c => getRecursiveContainedEntities(c)));
    return result;
}


/**
 * removes duplicate items from array
 * @param {*[]} array
 * @param fnCompare
 * @returns {*[]}
 */
const removeDuplicatesWithLambda = (array, fnCompare) => {
    return array.filter((value, index, self) =>
            index === self.findIndex((t) => (
                fnCompare(t, value)
            ))
    );
};

/**
 * processing multiple ids
 * @param {string} base_version
 * @param {boolean} useAtlas
 * @param {GraphParameters} graphParameters
 * @param {string} resourceType
 * @param {Resource} graphDefinition
 * @param {boolean} contained
 * @param {boolean} hash_references
 * @param {string[]} idList
 * @return {Promise<{resource: Resource, fullUrl: string}[]>}
 */
async function processMultipleIds(base_version, useAtlas, graphParameters,
                                  resourceType, graphDefinition,
                                  contained, hash_references,
                                  idList) {
    /**
     * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>}
     */
    const collection = await getOrCreateCollectionForResourceTypeAsync(resourceType, graphParameters.base_version, useAtlas);
    /**
     * @type {function(?Object): Resource}
     */
    const StartResource = getResource(graphParameters.base_version, resourceType);
    /**
     * @type {[{resource: Resource, fullUrl: string}]}
     */
    let entries = [];
    let query = {
        'id': {
            $in: idList
        }
    };
    /**
     * @type {string[]}
     */
    let securityTags = getSecurityTagsFromScope(graphParameters.user, graphParameters.scope);
    query = getQueryWithSecurityTags(resourceType, securityTags, query);

    const options = {};
    const projection = {};
    // also exclude _id so if there is a covering index the query can be satisfied from the covering index
    projection['_id'] = 0;
    options['projection'] = projection;

    /**
     * @type {number}
     */
    const maxMongoTimeMS = env.MONGO_TIMEOUT ? parseInt(env.MONGO_TIMEOUT) : (30 * 1000);
    // Now run the query to get a cursor we will enumerate next
    /**
     * mongo db cursor
     * @type {Promise<Cursor<Document>> | *}
     */
    let cursor = await collection.find(query, options).maxTimeMS(maxMongoTimeMS);

    /**
     * @type {{resource: Resource, fullUrl: string}[]}
     */
    const topLevelBundleEntries = [];

    while (await cursor.hasNext()) {
        /**
         * element
         * @type {Resource}
         */
        const element = await cursor.next();
        // first add this object
        /**
         * @type {Resource}
         */
        const startResource = new StartResource(element);
        /**
         * @type {{resource: Resource, fullUrl: string}}
         */
        let current_entity = {
            'fullUrl': getFullUrlForResource(graphParameters, startResource),
            'resource': removeNull(startResource.toJSON())
        };
        entries = entries.concat([current_entity]);
        topLevelBundleEntries.push(current_entity);
    }

    /**
     * @type {[{path:string, params: string,target:[{type: string}]}]}
     */
    const linkItems = graphDefinition.link;
    /**
     * @type {[ResourceEntityAndContained]}
     */
    const allRelatedEntries = await processGraphLinks(graphParameters,
        resourceType,
        topLevelBundleEntries.map(e => e.resource), linkItems);

    for (const topLevelBundleEntry of topLevelBundleEntries) {
        // add related resources as container
        /**
         * @type {ResourceEntityAndContained}
         */
        const matchingEntity = allRelatedEntries.find(e => e.entityId === topLevelBundleEntry.resource.id &&
            e.entityResourceType === topLevelBundleEntry.resource.resourceType);
        /**
         * @type {[EntityAndContainedBase]}
         */
        const related_entries = matchingEntity.containedEntries;
        if (env.HASH_REFERENCE || hash_references) {
            /**
             * @type {[string]}
             */
            const related_references = [];
            /**
             * @type {resource: Resource, fullUrl: string}
             */
            for (const related_item of related_entries) {
                related_references.push(related_item['resource']['resourceType'].concat('/', related_item['resource']['id']));
            }
            if (related_references.length > 0) {
                topLevelBundleEntry.resource = await convertToHashedReferences(topLevelBundleEntry.resource, related_references);
            }
        }
        /**
         * @type {{resource: Resource, fullUrl: string}[]}
         */
        const relatedEntities = related_entries
            .flatMap(r => getRecursiveContainedEntities(r))
            .filter(r => r.resource !== undefined);
        if (contained) {
            if (relatedEntities.length > 0) {
                topLevelBundleEntry['resource']['contained'] = relatedEntities.map(r => r.resource);
            }
        } else {
            entries = entries.concat(relatedEntities);
        }
    }

    entries = removeDuplicatesWithLambda(entries,
        (a, b) => a.resource.resourceType === b.resource.resourceType && a.resource.id === b.resource.id);
    return entries;
}

/**
 * process GraphDefinition and returns a bundle with all the related resources
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {string} base_version
 * @param {boolean} useAtlas
 * @param {string} resourceType
 * @param {string | string[]} id (accepts a single id or a list of ids)
 * @param {*} graphDefinitionJson (a GraphDefinition resource)
 * @param {boolean} contained
 * @param {boolean} hash_references
 * @return {Promise<{entry: [{resource: Resource, fullUrl: string}], id: string, resourceType: string}|{entry: *[], id: string, resourceType: string}>}
 */
async function processGraph(
    requestInfo,
    base_version, useAtlas, resourceType,
    id,
    graphDefinitionJson, contained, hash_references) {
    /**
     * @type {function(?Object): Resource}
     */
    const GraphDefinitionResource = getResource(base_version, 'GraphDefinition');
    /**
     * @type {Resource}
     */
    const graphDefinition = new GraphDefinitionResource(graphDefinitionJson);

    if (!(Array.isArray(id))) {
        id = [id];
    }

    const graphParameters = new GraphParameters(base_version, requestInfo.protocol, requestInfo.host,
        requestInfo.user, requestInfo.scope,
        getAccessCodesFromScopes('read', requestInfo.user, requestInfo.scope),
        useAtlas
    );
    /**
     * @type {[{resource: Resource, fullUrl: string}]}
     */
    const entries = await processMultipleIds(
        base_version,
        useAtlas,
        graphParameters,
        resourceType, graphDefinition, contained, hash_references, id);

    // remove duplicate resources
    /**
     * @type {[{resource: Resource, fullUrl: string}]}
     */
    let uniqueEntries = removeDuplicatesWithLambda(entries,
        (a, b) => a.resource.resourceType === b.resource.resourceType && a.resource.id === b.resource.id);
    uniqueEntries = uniqueEntries.filter(
        e => doesResourceHaveAnyAccessCodeFromThisList(
            graphParameters.accessCodes, graphParameters.user, graphParameters.scope, e.resource
        )
    );
    // create a bundle
    return (
        {
            resourceType: 'Bundle',
            id: 'bundle-example',
            type: 'collection',
            timestamp: moment.utc().format('YYYY-MM-DDThh:mm:ss.sss') + 'Z',
            entry: uniqueEntries
        });
}

module.exports = {
    processGraph
};
