const { createContainer } = require('../../createContainer');
const { CommandLineParser } = require('./commandLineParser');
const { ConfigureAuditEventOnlineArchiveRunner } = require('../runners/configureAuditEventOnlineArchiveRunner.js');
const { AdminLogger } = require('../adminLogger');

/**
 * main function
 * @returns {Promise<void>}
 */
async function main() {
    /**
        @type {Object}
    */
    const parameters = CommandLineParser.parseCommandLine();
    const adminLogger = new AdminLogger();
    const collections = parameters.collections ? parameters.collections.split(',') : undefined;
    adminLogger.logInfo('Running script to configure online archive');

    // set up all the standard services in the container
    const container = createContainer();
    adminLogger.logInfo(`Parameters are ${parameters}`);

    container.register(
        'processConfigureAuditEventOnlineArchiveRunner',
        (c) =>
            new ConfigureAuditEventOnlineArchiveRunner({
                mongoDatabaseManager: c.mongoDatabaseManager,
                mongoCollectionManager: c.mongoCollectionManager,
                adminLogger,
                collections,
            })
    );

    const processConfigureAuditEventOnlineArchiveRunner = container.processConfigureAuditEventOnlineArchiveRunner;
    await processConfigureAuditEventOnlineArchiveRunner.processAsync();
    adminLogger.logInfo('Exiting process');
    process.exit(0);
}

/**
 * To run this:
 * nvm use 18.14.2
 * required env variables
 * for audit event cluster - AUDIT_EVENT_MONGO_URL, AUDIT_EVENT_MONGO_DB_NAME
 * CREATE_AUDIT_EVENT_ONLINE_ARCHIVE_ENDPOINT, ONLINE_ARCHIVE_AUTHENTICATION_PUBLIC_KEY, ONLINE_ARCHIVE_AUTHENTICATION_PRIVATE_KEY
 * node src/admin/scripts/configureAuditEventOnlineArchive.js
 * node src/admin/scripts/configureAuditEventOnlineArchive.js --collections="Task_4_0_0,Patient_4_0_0"
 */
main().catch((reason) => {
    console.error(reason);
});
