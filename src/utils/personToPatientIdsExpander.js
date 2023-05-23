const {assertTypeEquals} = require('./assertType');
const {DatabaseQueryFactory} = require('../dataLayer/databaseQueryFactory');

const patientReferencePrefix = 'Patient/';
const personReferencePrefix = 'Person/';
const personProxyPrefix = 'person.';
const patientReferencePlusPersonProxyPrefix = `${patientReferencePrefix}${personProxyPrefix}`;
const maximumRecursionDepth = 4;


class PersonToPatientIdsExpander {
    /**
     * constructor
     * @param {DatabaseQueryFactory} databaseQueryFactory
     */
    constructor(
        {
            databaseQueryFactory
        }
    ) {
        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);
    }

    /**
     * replaces patient proxy with actual patient ids
     * @param {string} base_version
     * @param {string} id
     * @param {boolean} includePatientPrefix
     * @return {Promise<string|string[]>}
     */
    async getPatientProxyIdsAsync({base_version, id, includePatientPrefix}) {
        const databaseQueryManager = this.databaseQueryFactory.createQuery({
            resourceType: 'Person',
            base_version: base_version
        });
        // 1. Get person id from id
        const personId = id.replace(patientReferencePlusPersonProxyPrefix, '').replace(personProxyPrefix, '');
        // 2. Get that Person resource from the database
        let patientIds = await this.getPatientIdsFromPersonAsync(
            {
                personIds: [ personId ],
                databaseQueryManager,
                level: 1
            }
        );
        if (patientIds && patientIds.length > 0) {
            // Also include the proxy patient ID for resources that are associated with the proxy patient directly
            patientIds.push(`${personProxyPrefix}${personId}`);
            if (includePatientPrefix) {
                patientIds = patientIds.map(p => `${patientReferencePrefix}${p}`);
            }
            // 4. return a csv of those patient ids (remove duplicates)
            return Array.from(new Set(patientIds));
        }
        return id;
    }

    /**
     * gets patient ids (recursive) from a person
     * @param {string[]} personIds
     * @param {DatabaseQueryManager} databaseQueryManager
     * @param {number} level
     * @return {Promise<string[]>}
     */
    async getPatientIdsFromPersonAsync({personIds, databaseQueryManager, level}) {
        const personResourceCursor = await databaseQueryManager.findAsync(
            {
                query: {id: {$in: personIds}},
                options: {projection: {id: 1, link: 1, _id: 0}}
            }
        );
        /**
         * @type {string[]}
         */
        let patientIds = [];
        let personIdsToRecurse = [];
        while (await personResourceCursor.hasNext()) {
            let person = await personResourceCursor.next();
            if (person && person.link && person.link.length > 0) {
                const patientIdsToAdd = person.link
                    .filter(l => l.target && l.target.reference &&
                        (l.target.reference.startsWith(patientReferencePrefix) || l.target.type === 'Patient'))
                    .map(l => l.target.reference.replace(patientReferencePrefix, ''));
                patientIds = patientIds.concat(patientIdsToAdd);
                if (level < maximumRecursionDepth) { // avoid infinite loop
                    // now find any Person links and call them recursively
                    const personResourceWithPersonReferenceLink = person.link
                        .filter(l => l.target && l.target.reference &&
                            (l.target.reference.startsWith(personReferencePrefix) || l.target.type === 'Person'))
                        .map(l => l.target.reference.replace(personReferencePrefix, ''));
                    personIdsToRecurse = personIdsToRecurse.concat(personResourceWithPersonReferenceLink);
                }
            }
        }
        if (personIdsToRecurse.length === 0) {
            return patientIds;
        }
        /**
         * @type {string[]}
         */
        const patientIdsFromPersons = await this.getPatientIdsFromPersonAsync({
            personIds: personIdsToRecurse,
            databaseQueryManager,
            level: level + 1
        });
        return patientIds.concat(patientIdsFromPersons);
    }
}

module.exports = {
    PersonToPatientIdsExpander
};
