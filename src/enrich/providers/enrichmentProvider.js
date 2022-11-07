/**
 * Abstract base class for an enrichment provider.  Inherit from this to create a new enrichment provider
 */
class EnrichmentProvider {
    /**
     * Whether this Enrichment can enrich the specified resourceType
     * @param {string} resourceType
     * @return {boolean}
     */
    // eslint-disable-next-line no-unused-vars
    canEnrich({resourceType}) {
        throw Error('Not Implemented');
    }

    /**
     * enrich the specified resources
     * @param {Resource[]} resources
     * @param {string} resourceType
     * @param {Object} args
     * @return {Promise<Resource[]>}
     */
    // eslint-disable-next-line no-unused-vars
    async enrichAsync({resources, resourceType, args}) {
        throw Error('Not Implemented');
    }
}

module.exports = {
    EnrichmentProvider
};
