const {assertIsValid} = require('./assertType');

/**
 * Store information about the HTTP request
 */
class FhirRequestInfo {
    /**
     * class that holds request info
     * @param {string | null} user
     * @param {string} scope
     * @param {string} protocol
     * @param {string|null} originalUrl
     * @param {string | null} [remoteIpAddress]
     * @param {string|null} requestId
     * @param {string | null} [path]
     * @param {string | null} host
     * @param {Object | Object[] | null} [body]
     * @param {string | null} [accept]
     * @param {boolean | null} [isUser]
     * @param {string[] | null} [patients]
     * @param {string | null} [fhirPersonId]
     * @param {Object} headers
     */
    constructor(
        {
            user,
            scope,
            remoteIpAddress,
            requestId,
            protocol,
            originalUrl,
            path,
            host,
            body,
            accept,
            isUser,
            patients,
            fhirPersonId,
            headers
        }
    ) {
        assertIsValid(!user || typeof user === 'string', `user is of type: ${typeof user} but should be string.`);
        /**
         * @type {string|null}
         */
        this.user = user;
        /**
         * @type {string}
         */
        this.scope = scope;
        /**
         * @type {string|null}
         */
        this.remoteIpAddress = remoteIpAddress;
        /**
         * @type {string|null}
         */
        this.requestId = requestId;
        /**
         * @type {string}
         */
        this.protocol = protocol;
        /**
         * @type {string}
         */
        this.originalUrl = originalUrl;
        /**
         * @type {string|null}
         */
        this.path = path;
        /**
         * @type {string|null}
         */
        this.host = host;
        /**
         * @type {Object|Object[]|null}
         */
        this.body = body;
        /**
         * @type {string | null}
         */
        this.accept = accept;
        /**
         * @type {boolean}
         */
        this.isUser = isUser;
        /**
         * @type {string[] | null}
         */
        this.patients = patients;
        /**
         * @type {string | null}
         */
        this.fhirPersonId = fhirPersonId;
        /**
         * @type {Object}
         */
        this.headers = headers;
    }
}

module.exports = {
    FhirRequestInfo
};