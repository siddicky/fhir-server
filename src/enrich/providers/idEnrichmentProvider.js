const {EnrichmentProvider} = require('./enrichmentProvider');

class IdEnrichmentProvider extends EnrichmentProvider {
    /**
     * Whether this Enrichment can enrich the specified resourceType
     * @param {string} resourceType
     * @return {boolean}
     */
    // eslint-disable-next-line no-unused-vars
    canEnrich({resourceType}) {
        return true;
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
        for (const resource of resources) {
            if (resource._sourceId) {
                resource.id = resource._sourceId;
            }
        }
        return resources;
    }
}

module.exports = {
    IdEnrichmentProvider
};