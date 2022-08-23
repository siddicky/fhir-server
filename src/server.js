const {connectAsync} = require('./utils/connect');
const {createApp} = require('./app');
const {fhirServerConfig} = require('./config');
const env = require('var');
const {logSystemEventAsync} = require('./operations/common/logging');
const {createHttpTerminator} = require('http-terminator');
const {loggers} = require('@asymmetrik/node-fhir-server-core');
const http = require('http');
const logger = loggers.get('default');

/**
 * Creates the http server
 * @param {function (): SimpleContainer} fnCreateContainer
 * @return {Promise<import('http').Server>}
 */
async function createServer(fnCreateContainer) {
    await connectAsync();

    const app = createApp(fnCreateContainer);

    const server = http.createServer(app).listen(fhirServerConfig.server.port, null, null,
        async () => {
            const image = env.DOCKER_IMAGE || '';
            await logSystemEventAsync('serverStartup', 'Server is up and running', {image: image});
        }
    );

    // https://stackoverflow.com/questions/56606305/difference-between-keepalivetimeout-and-timeout
    // https://www.w3schools.com/nodejs/prop_server_timeout.asp
    // The number of milliseconds of inactivity before a socket is presumed to have timed out.
    // A value of 0 will disable the timeout behavior on incoming connections.
    server.setTimeout(10 * 60 * 1000, (/*socket*/) => {
        console.log(JSON.stringify({message: 'Server timeout'}));
    }); // 60 minutes
    // The number of milliseconds of inactivity a server needs to wait for additional incoming data, after it has
    // finished writing the last response, before a socket will be destroyed. If the server receives new data
    // before the keep-alive timeout has fired, it will reset the regular inactivity timeout, i.e., server.timeout.
    // A value of 0 will disable the keep-alive timeout behavior on incoming connections. A value of 0 makes the
    // http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.
    // Timeout in milliseconds. Default: 5000 (5 seconds).
    server.keepAliveTimeout = 10 * 60 * 1000;

    server.on('connection', function (socket) {
        socket.setTimeout(10 * 60 * 1000);
        socket.once('timeout', function () {
            console.log(JSON.stringify({message: 'Socket timeout'}));
            // process.nextTick(socket.destroy);
        });
        socket.once('error', function (e) {
            console.log(JSON.stringify({message: 'Socket error: ' + e}));
            // process.nextTick(socket.destroy);
        });
    });

    const httpTerminator = createHttpTerminator({
        server,
        gracefulTerminationTimeout: 7000,
    });

    process.on('SIGTERM', async function onSigterm() {
        logger.info('Beginning shutdown of server');
        await logSystemEventAsync('SIGTERM', 'Beginning shutdown of server for SIGTERM', {});
        try {
            await httpTerminator.terminate();
            logger.info('Successfully shut down server');
            process.exit(0);
        } catch (error) {
            logger.error('Failed to shutdown server: ', error);
            process.exit(1);
        }
    });

    // https://snyk.io/wp-content/uploads/10-best-practices-to-containerize-Node.js-web-applications-with-Docker.pdf
    process.on('SIGINT', async function onSigInt() {
        logger.info('Beginning shutdown of server for SIGINT');
        await logSystemEventAsync('SIGINT', 'Beginning shutdown of server for SIGINT', {});
        try {
            await httpTerminator.terminate();
            logger.info('Successfully shut down server for SIGINT');
            process.exit(0);
        } catch (error) {
            logger.error('Failed to shutdown server for SIGINT: ', error);
            process.exit(1);
        }
    });

    return server;
}

module.exports = {
    createServer
};
