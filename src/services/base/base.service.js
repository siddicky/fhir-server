const { VERSIONS } = require('@asymmetrik/node-fhir-server-core').constants;
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
const { CLIENT_DB } = require('../../constants');
const moment = require('moment-timezone');
const globals = require('../../globals');
const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();
const { getUuid } = require('../../utils/uid.util');
const { validate, applyPatch, compare } = require('fast-json-patch');

let getResource = (base_version, resource_name) => {
    return resolveSchema(base_version, resource_name);
};

let getMeta = (base_version) => {
    return resolveSchema(base_version, 'Meta');
};

let buildR4SearchQuery = (resource_name, args) => {
    // Common search params
    let { id } = args;
    let patient = args['patient'];

    // Search Result params

    // Patient search params
    let active = args['active'];

    let query = {};

    if (id) {
        query.id = id;
    }

    if (patient) {
        const patient_reference = 'Patient/' + patient;
        // each Resource type has a different place to put the patient info
        if (['Patient'].includes(resource_name)) {
            query.id = patient;
        }
        else if (['AllergyIntolerance', 'Immunization', 'RelatedPerson', 'Device'].includes(resource_name)) {
            query['patient.reference'] = patient_reference;
        }
        else if (['Appointment'].includes(resource_name)) {
            query['participant.actor.reference'] = patient_reference; //TODO: participant is a list
        }
        else if (['CarePlan', 'Condition', 'DocumentReference', 'Encounter', 'MedicationRequest', 'Observation', 'Procedure', 'ServiceRequest', 'CareTeam'].includes(resource_name)) {
            query['subject.reference'] = patient_reference;
        }
        else if (['Coverage'].includes(resource_name)) {
            query['beneficiary.reference'] = patient_reference;
        }
        else {
            logger.error(`No mapping for searching by patient for ${resource_name}: `);
        }
    }

    if (active) {
        query.active = active === 'true';
    }

    return query;
};


let buildStu3SearchQuery = (args) => {
    // Common search params
    let { id } = args;

    // Search Result params

    // Patient search params
    let active = args['active'];

    let query = {};

    if (id) {
        query.id = id;
    }

    if (active) {
        query.active = active === 'true';
    }

    return query;
};

let buildDstu2SearchQuery = (args) => {
    // Common search params
    let { id } = args;

    // Search Result params

    // Patient search params
    let active = args['active'];

    let query = {};
    if (id) {
        query.id = id;
    }

    if (active) {
        query.active = active === 'true';
    }
    return query;
};

/**
 *
 * @param {*} args
 * @param {*} context
 * @param {*} logger
 */
module.exports.search = (args, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(resource_name + ' >>> search');
        logger.info('---- args ----');
        logger.info(args);
        logger.info('--------');

        let { base_version } = args;
        let query = {};

        if (base_version === VERSIONS['3_0_1']) {
            query = buildStu3SearchQuery(args);
        } else if (base_version === VERSIONS['1_0_2']) {
            query = buildDstu2SearchQuery(args);
        }
        else {
            query = buildR4SearchQuery(resource_name, args);
        }

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);
        let Resource = getResource(base_version, resource_name);

        logger.info('---- query ----');
        logger.info(query);
        logger.info('--------');

        // Query our collection for this observation
        collection.find(query, (err, data) => {
            if (err) {
                logger.error(`Error with ${resource_name}.search: `, err);
                return reject(err);
            }

            // Resource is a resource cursor, pull documents out before resolving
            data.toArray().then((resources) => {
                resources.forEach(function (element, i, returnArray) {
                    returnArray[i] = new Resource(element);
                });
                resolve(resources);
            });
        });

    });

module.exports.searchById = (args, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> searchById`);
        logger.info(args);

        // Common search params
        let { id } = args;
        let { base_version } = args;

        logger.info(`id: ${id}`);
        logger.info(`base_version: ${base_version}`);

        // Search Result param

        let query = {};
        query.id = id;
        // TODO: Build query from Parameters

        // TODO: Query database
        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);
        let Resource = getResource(base_version, resource_name);

        collection.findOne({ id: id.toString() }, (err, resource) => {
            if (err) {
                logger.error(`Error with ${resource_name}.searchById: `, err);
                return reject(err);
            }
            if (resource) {
                resolve(new Resource(resource));
            }
            resolve();
        });
    });

module.exports.create = (args, { req }, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> create`);

        let resource_incoming = req.body;

        let { base_version } = args;

        logger.info('--- request ----');
        logger.info(req);
        logger.info('-----------------');

        logger.info('--- body ----');
        logger.info(resource_incoming);
        logger.info('-----------------');

        // Grab an instance of our DB and collection (by version)
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);

        // Get current record
        let Resource = getResource(base_version, resource_name);
        logger.info(`Resource: ${Resource}`);
        let resource = new Resource(resource_incoming);
        logger.info(`resource: ${resource.toJSON()}`);

        // If no resource ID was provided, generate one.
        let id = getUuid(resource);
        logger.info(`id: ${id}`);

        // Create the resource's metadata
        let Meta = getMeta(base_version);
        resource.meta = new Meta({
            versionId: '1',
            lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
        });

        // Create the document to be inserted into Mongo
        let doc = JSON.parse(JSON.stringify(resource.toJSON()));
        Object.assign(doc, { id: id });

        // Create a clone of the object without the _id parameter before assigning a value to
        // the _id parameter in the original document
        let history_doc = Object.assign({}, doc);
        Object.assign(doc, { _id: id });

        logger.info('---- inserting doc ---');
        logger.info(doc);
        logger.info('----------------------');

        // Insert our resource record
        collection.insertOne(doc, (err) => {
            if (err) {
                logger.error(`Error with P${resource_name}.create: `, err);
                return reject(err);
            }

            // Save the resource to history
            let history_collection = db.collection(`${collection_name}_${base_version}_History`);

            // Insert our resource record to history but don't assign _id
            return history_collection.insertOne(history_doc, (err2) => {
                if (err2) {
                    logger.error(`Error with ${resource_name}History.create: `, err2);
                    return reject(err2);
                }
                return resolve({ id: doc.id, resource_version: doc.meta.versionId });
            });
        });
    });

module.exports.update = (args, { req }, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`'${resource_name} >>> update`);

        logger.info('--- request ----');
        logger.info(req);

        // read the incoming resource from request body
        let resource_incoming = req.body;
        let { base_version, id } = args;
        logger.info(base_version);
        logger.info(id);
        logger.info('--- body ----');
        logger.info(resource_incoming);

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);

        // Get current record
        // Query our collection for this observation
        collection.findOne({ id: id.toString() }, (err, data) => {
            if (err) {
                logger.error(`Error with finding resource ${resource_name}.update: `, err);
                return reject(err);
            }

            // create a resource with incoming data
            let Resource = getResource(base_version, resource_name);

            let cleaned;
            let doc;

            // check if resource was found in database or not
            if (data && data.meta) {
                // found an existing resource
                logger.info('found resource: ' + data);
                let foundResource = new Resource(data);
                logger.info('------ found document --------');
                logger.info(data);
                logger.info('------ end found document --------');

                // use metadata of existing resource (overwrite any passed in metadata)
                resource_incoming.meta = foundResource.meta;
                logger.info('------ incoming document --------');
                logger.info(resource_incoming);
                logger.info('------ end incoming document --------');

                // now create a patch between the document in db and the incoming document
                //  this returns an array of patches
                let patchContent = compare(data, resource_incoming);
                // ignore any changes to _id since that's an internal field
                patchContent = patchContent.filter(item => item.path !== '/_id');
                logger.info('------ patches --------');
                logger.info(patchContent);
                logger.info('------ end patches --------');
                // see if there are any changes
                if (patchContent.length === 0) {
                    logger.info('No changes detected in updated resource');
                    return resolve({
                        id: id,
                        created: false,
                        resource_version: foundResource.meta.versionId,
                    });
                }
                // now apply the patches to the found resource
                let patched_incoming_data = applyPatch(data, patchContent).newDocument;
                let patched_resource_incoming = new Resource(patched_incoming_data);
                // update the metadata to increment versionId
                let meta = foundResource.meta;
                meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
                meta.lastUpdated = moment.utc().format('YYYY-MM-DDTHH:mm:ssZ');
                patched_resource_incoming.meta = meta;
                logger.info('------ patched document --------');
                logger.info(patched_resource_incoming);
                logger.info('------ end patched document --------');
                // Same as update from this point on
                cleaned = JSON.parse(JSON.stringify(patched_resource_incoming));
                doc = Object.assign(cleaned, { _id: id });
            } else {
                // not found so insert
                logger.info('new resource: ' + data);
                // create the metadata
                let Meta = getMeta(base_version);
                resource_incoming.meta = new Meta({
                    versionId: '1',
                    lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
                });
                cleaned = JSON.parse(JSON.stringify(resource_incoming));
                doc = Object.assign(cleaned, { _id: id });
            }

            // Insert/update our resource record
            // When using the $set operator, only the specified fields are updated
            collection.findOneAndUpdate({ id: id }, { $set: doc }, { upsert: true }, (err2, res) => {
                if (err2) {
                    logger.error(`Error with ${resource_name}.update: `, err2);
                    return reject(err2);
                }

                // save to history
                let history_collection = db.collection(`${collection_name}_${base_version}_History`);

                let history_resource = Object.assign(cleaned, { id: id });
                delete history_resource['_id']; // make sure we don't have an _id field when inserting into history

                // Insert our resource record to history but don't assign _id
                return history_collection.insertOne(history_resource, (err3) => {
                    if (err3) {
                        logger.error(`Error with ${resource_name}.update: `, err3);
                        return reject(err3);
                    }

                    return resolve({
                        id: id,
                        created: res.lastErrorObject && !res.lastErrorObject.updatedExisting,
                        resource_version: doc.meta.versionId,
                    });
                });
            });
        });
    });

module.exports.merge = (args, { req }, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`'${resource_name} >>> merge`);

        // read the incoming resource from request body
        let resource_incoming = req.body;
        logger.info('args', args);
        let { base_version } = args;

        // logger.info('--- request ----');
        // logger.info(req);
        // logger.info('-----------------');

        logger.info('--- body ----');
        logger.info(resource_incoming);
        logger.info('-----------------');

        let id = resource_incoming.id;

        logger.info(base_version);
        logger.info('--- body ----');
        logger.info(resource_incoming);

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);

        // Get current record
        // Query our collection for this observation
        collection.findOne({ id: id.toString() }, (err, data) => {
            if (err) {
                logger.error(`Error with finding resource ${resource_name}.merge: `, err);
                return reject(err);
            }

            // create a resource with incoming data
            let Resource = getResource(base_version, resource_name);

            let cleaned;
            let doc;

            // check if resource was found in database or not
            if (data && data.meta) {
                // found an existing resource
                logger.info('found resource: ' + data);
                let foundResource = new Resource(data);
                logger.info('------ found document --------');
                logger.info(data);
                logger.info('------ end found document --------');

                // use metadata of existing resource (overwrite any passed in metadata)
                resource_incoming.meta = foundResource.meta;
                logger.info('------ incoming document --------');
                logger.info(resource_incoming);
                logger.info('------ end incoming document --------');

                // now create a patch between the document in db and the incoming document
                //  this returns an array of patches
                let patchContent = compare(data, resource_incoming);
                // ignore any changes to _id since that's an internal field
                patchContent = patchContent.filter(item => item.path !== '/_id');
                logger.info('------ patches --------');
                logger.info(patchContent);
                logger.info('------ end patches --------');
                // see if there are any changes
                if (patchContent.length === 0) {
                    logger.info('No changes detected in updated resource');
                    return resolve({
                        id: id,
                        created: false,
                        resource_version: foundResource.meta.versionId,
                    });
                }
                // now apply the patches to the found resource
                let patched_incoming_data = applyPatch(data, patchContent).newDocument;
                let patched_resource_incoming = new Resource(patched_incoming_data);
                // update the metadata to increment versionId
                let meta = foundResource.meta;
                meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
                meta.lastUpdated = moment.utc().format('YYYY-MM-DDTHH:mm:ssZ');
                patched_resource_incoming.meta = meta;
                logger.info('------ patched document --------');
                logger.info(patched_resource_incoming);
                logger.info('------ end patched document --------');
                // Same as update from this point on
                cleaned = JSON.parse(JSON.stringify(patched_resource_incoming));
                doc = Object.assign(cleaned, { _id: id });
            } else {
                // not found so insert
                logger.info('new resource: ' + data);
                // create the metadata
                let Meta = getMeta(base_version);
                resource_incoming.meta = new Meta({
                    versionId: '1',
                    lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
                });
                cleaned = JSON.parse(JSON.stringify(resource_incoming));
                doc = Object.assign(cleaned, { _id: id });
            }

            // Insert/update our resource record
            // When using the $set operator, only the specified fields are updated
            collection.findOneAndUpdate({ id: id }, { $set: doc }, { upsert: true }, (err2, res) => {
                if (err2) {
                    logger.error(`Error with ${resource_name}.merge: `, err2);
                    return reject(err2);
                }

                // save to history
                let history_collection = db.collection(`${collection_name}_${base_version}_History`);

                let history_resource = Object.assign(cleaned, { id: id });
                delete history_resource['_id']; // make sure we don't have an _id field when inserting into history

                // Insert our resource record to history but don't assign _id
                return history_collection.insertOne(history_resource, (err3) => {
                    if (err3) {
                        logger.error(`Error with ${resource_name}.merge: `, err3);
                        return reject(err3);
                    }

                    return resolve({
                        id: id,
                        created: res.lastErrorObject && !res.lastErrorObject.updatedExisting,
                        resource_version: doc.meta.versionId,
                    });
                });
            });
        });
    });

module.exports.everything = (args, context, resource_name) => {
    return new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> everything`);
        try {
            // execute whatever custom operation you want.
            resolve([]);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.remove = (args, context, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> remove`);

        let { base_version, id } = args;

        logger.info(`Deleting id=${id}`);

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);
        // Delete our resource record
        collection.deleteOne({ id: id }, (err, _) => {
            if (err) {
                logger.error(`Error with ${resource_name}.remove`);
                return reject({
                    // Must be 405 (Method Not Allowed) or 409 (Conflict)
                    // 405 if you do not want to allow the delete
                    // 409 if you can't delete because of referential
                    // integrity or some other reason
                    code: 409,
                    message: err.message,
                });
            }

            // delete history as well.  You can chose to save history.  Up to you
            let history_collection = db.collection(`${collection_name}_${base_version}_History`);
            return history_collection.deleteMany({ id: id }, (err2) => {
                if (err2) {
                    logger.error(`Error with ${resource_name}.remove`);
                    return reject({
                        // Must be 405 (Method Not Allowed) or 409 (Conflict)
                        // 405 if you do not want to allow the delete
                        // 409 if you can't delete because of referential
                        // integrity or some other reason
                        code: 409,
                        message: err2.message,
                    });
                }

                return resolve({ deleted: _.result && _.result.n });
            });
        });
    });

module.exports.searchByVersionId = (args, context, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> searchByVersionId`);

        let { base_version, id, version_id } = args;

        let Resource = getResource(base_version, resource_name);

        let db = globals.get(CLIENT_DB);
        let history_collection = db.collection(`${collection_name}_${base_version}_History`);

        // Query our collection for this observation
        history_collection.findOne(
            { id: id.toString(), 'meta.versionId': `${version_id}` },
            (err, resource) => {
                if (err) {
                    logger.error(`Error with ${resource_name}.searchByVersionId: `, err);
                    return reject(err);
                }

                if (resource) {
                    resolve(new Resource(resource));
                }

                resolve();
            }
        );
    });

module.exports.history = (args, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> history`);

        // Common search params
        let { base_version } = args;

        let query = {};

        if (base_version === VERSIONS['3_0_1']) {
            query = buildStu3SearchQuery(args);
        } else if (base_version === VERSIONS['1_0_2']) {
            query = buildDstu2SearchQuery(args);
        }

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let history_collection = db.collection(`${collection_name}_${base_version}_History`);
        let Resource = getResource(base_version, resource_name);

        // Query our collection for this observation
        history_collection.find(query, (err, data) => {
            if (err) {
                logger.error(`Error with ${resource_name}.history: `, err);
                return reject(err);
            }

            // Patient is a resource cursor, pull documents out before resolving
            data.toArray().then((resources) => {
                resources.forEach(function (element, i, returnArray) {
                    returnArray[i] = new Resource(element);
                });
                resolve(resources);
            });
        });
    });

module.exports.historyById = (args, context, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info(`${resource_name} >>> historyById`);

        let { base_version, id } = args;
        let query = {};

        if (base_version === VERSIONS['3_0_1']) {
            query = buildStu3SearchQuery(args);
        } else if (base_version === VERSIONS['1_0_2']) {
            query = buildDstu2SearchQuery(args);
        }

        query.id = `${id}`;

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let history_collection = db.collection(`${collection_name}_${base_version}_History`);
        let Resource = getResource(base_version, resource_name);

        // Query our collection for this observation
        history_collection.find(query, (err, data) => {
            if (err) {
                logger.error(`Error with ${resource_name}.historyById: `, err);
                return reject(err);
            }

            // Resource is a resource cursor, pull documents out before resolving
            data.toArray().then((resources) => {
                resources.forEach(function (element, i, returnArray) {
                    returnArray[i] = new Resource(element);
                });
                resolve(resources);
            });
        });
    });

module.exports.patch = (args, context, resource_name, collection_name) =>
    new Promise((resolve, reject) => {
        logger.info('Patient >>> patch');

        let { base_version, id, patchContent } = args;

        // Grab an instance of our DB and collection
        let db = globals.get(CLIENT_DB);
        let collection = db.collection(`${collection_name}_${base_version}`);

        // Get current record
        // Query our collection for this observation
        collection.findOne({ id: id.toString() }, (err, data) => {
            if (err) {
                logger.error(`Error with ${resource_name}.patch: `, err);
                return reject(err);
            }

            // Validate the patch
            let errors = validate(patchContent, data);
            if (errors && Object.keys(errors).length > 0) {
                logger.error('Error with patch contents');
                return reject(errors);
            }
            // Make the changes indicated in the patch
            let resource_incoming = applyPatch(data, patchContent).newDocument;

            let Resource = getResource(base_version, resource_name);
            let resource = new Resource(resource_incoming);

            if (data && data.meta) {
                let foundResource = new Resource(data);
                let meta = foundResource.meta;
                meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
                resource.meta = meta;
            } else {
                return reject('Unable to patch resource. Missing either data or metadata.');
            }

            // Same as update from this point on
            let cleaned = JSON.parse(JSON.stringify(resource));
            let doc = Object.assign(cleaned, { _id: id });

            // Insert/update our resource record
            collection.findOneAndUpdate({ id: id }, { $set: doc }, { upsert: true }, (err2, res) => {
                if (err2) {
                    logger.error(`Error with ${resource_name}.update: `, err2);
                    return reject(err2);
                }

                // Save to history
                let history_collection = db.collection(`${collection_name}_${base_version}_History`);
                let history_resource = Object.assign(cleaned, { _id: id + cleaned.meta.versionId });

                // Insert our resource record to history but don't assign _id
                return history_collection.insertOne(history_resource, (err3) => {
                    if (err3) {
                        logger.error(`Error with ${resource_name}History.create: `, err3);
                        return reject(err3);
                    }

                    return resolve({
                        id: doc.id,
                        created: res.lastErrorObject && !res.lastErrorObject.updatedExisting,
                        resource_version: doc.meta.versionId,
                    });
                });
            });
        });
    });
