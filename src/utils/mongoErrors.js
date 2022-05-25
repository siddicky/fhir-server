const {mongoQueryAndOptionsStringify} = require('./mongoQueryStringify');

/**
 * This file implements a custom error for Mongo errors
 */

class MongoError extends Error {
    /**
     * Creates an error for mongo
     * @param {string} message
     * @param {Error} error
     * @param {string} collection
     * @param {*} query
     * @param {*} options
     * @param {number} elapsedTime
     */
    constructor(message, error, collection, query, elapsedTime, options = {},) {
        const elapsedTimeInSecs = (elapsedTime) / 1000;
        super(
            message + ': ' +
            mongoQueryAndOptionsStringify(collection, query, options) + ' , ' +
            `elapsedTime=${elapsedTimeInSecs} secs`
        );
        this.collection = collection;
        this.query = query;
        this.options = options;
        this.elapsedTimeInSecs = elapsedTimeInSecs;
        for (const [key, value] of Object.entries(options)) {
            this[`${key}`] = value;
        }
        if (!error) {
            throw new Error('MongoError requires a message and error');
        }
        // noinspection JSUnusedGlobalSymbols
        this.original_error = error;
        // noinspection JSUnusedGlobalSymbols
        this.stack_before_rethrow = this.stack;
        const message_lines = (message.match(/\n/g) || []).length + 1;
        this.stack = this.stack.split('\n').slice(0, message_lines + 1).join('\n') + '\n' +
            error.stack;
    }
}

module.exports = {
    MongoError: MongoError
};
