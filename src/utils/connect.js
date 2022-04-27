const {MongoClient} = require('mongodb');
const globals = require('../globals');
const {mongoConfig, atlasMongoConfig} = require('../config');
const {CLIENT, CLIENT_DB, ATLAS_CLIENT, ATLAS_CLIENT_DB} = require('../constants');
const {isTrue} = require('./isTrue');
const env = require('var');

/**
 * Creates a new connection
 * @returns {Promise<import("mongodb").MongoClient>}
 */
async function createClient() {
    if (isTrue(env.LOG_ALL_MONGO_CALLS)) {
        mongoConfig.options.monitorCommands = true;
    }
    // https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/
    /**
     * @type {import("mongodb").MongoClient}
     */
    const client = new MongoClient(mongoConfig.connection, mongoConfig.options);

    await client.connect();
    await client.db('admin').command({ping: 1});
    console.log('Successfully connected to AWS DocumentDB ');

    if (isTrue(env.LOG_ALL_MONGO_CALLS)) {
        // https://www.mongodb.com/docs/drivers/node/current/fundamentals/monitoring/command-monitoring/
        client.on('commandStarted', event => {
            console.log(`AWS Received commandStarted: ${JSON.stringify(event, null, 2)}\n\n`);
        });
        client.on('commandSucceeded', event => {
            console.log(`AWS Received commandSucceeded: ${JSON.stringify(event, null, 2)}\n\n`);
        });
        client.on('commandFailed', event => {
            console.log(`AWS Received commandFailed: ${JSON.stringify(event, null, 2)}\n\n`);
        });
    }
    return client;
}

const connect = async function () {
    if (globals.get(CLIENT)) {
        return;
    }
    const client = await createClient();

    globals.set(CLIENT, client);
    globals.set(CLIENT_DB, client.db(mongoConfig.db_name));

    if (env.ATLAS_MONGO_URL) {
        if (isTrue(env.LOG_ALL_MONGO_CALLS)) {
            atlasMongoConfig.options.monitorCommands = true;
        }
        const atlasClient = new MongoClient(atlasMongoConfig.connection, atlasMongoConfig.options);

        await atlasClient.connect();
        await atlasClient.db('admin').command({ping: 1});
        console.log('Successfully connected to Atlas');

        globals.set(ATLAS_CLIENT, atlasClient);
        globals.set(ATLAS_CLIENT_DB, atlasClient.db(atlasMongoConfig.db_name));
        if (isTrue(env.LOG_ALL_MONGO_CALLS)) {
            // https://www.mongodb.com/docs/drivers/node/current/fundamentals/monitoring/command-monitoring/
            atlasClient.on('commandStarted', event => {
                console.log(`Atlas Received commandStarted: ${JSON.stringify(event, null, 2)}\n\n`);
            });
            atlasClient.on('commandSucceeded', event => {
                console.log(`Atlas Received commandSucceeded: ${JSON.stringify(event, null, 2)}\n\n`);
            });
            atlasClient.on('commandFailed', event => {
                console.log(`Atlas Received commandFailed: ${JSON.stringify(event, null, 2)}\n\n`);
            });
        }
    }
};

/**
 * disconnects a client
 * @param client
 * @returns {Promise<void>}
 */
const disconnectClient = async function (client) {
    if (client) {
        await client.close();
    }
};

/**
 * disconnects all global connections
 * @returns {Promise<void>}
 */
const disconnect = async function () {
    const awsClient = globals.get(CLIENT);
    await disconnectClient(awsClient);
    const atlasClient = globals.get(ATLAS_CLIENT);
    await disconnectClient(atlasClient);
};

module.exports = {
    createClient: createClient,
    connect: connect,
    disconnectClient: disconnectClient,
    disconnect: disconnect,
};
