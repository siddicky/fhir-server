const env = require('var');

/**
 * This class can be used to rethrow errors
 */
class RethrownError extends Error {
    /**
     * Constructor
     * @param {string} [message]
     * @param {Error} error
     * @param {Object|undefined} [args]
     * @param {string|undefined} [source]
     */
    constructor({message, error, args, source}) {
        if (!message && error && error.message) {
            message = error.message;
        }
        super(message);
        this.name = this.constructor.name;
        if (!error) {
            throw new Error('RethrownError requires a message and error');
        }
        this.original_error = error.original_error || error;
        /**
         * @type {OperationOutcome[]}
         */
        this.issue = error.issue;
        this.stack_before_rethrow = this.stack;
        this.args = args;
        this.source = source;

        this.nested = error;

        this.statusCode = error.statusCode; // keep same statusCode

        if (message instanceof Error) {
            error = message;
        } else if (typeof message !== 'undefined') {
            Object.defineProperty(this, 'message', {
                value: message,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
        Error.captureStackTrace(this, this.constructor);
        var oldStackDescriptor = Object.getOwnPropertyDescriptor(this, 'stack');
        var stackDescriptor = this.buildStackDescriptor(oldStackDescriptor, error);
        Object.defineProperty(this, 'stack', stackDescriptor);
        if (this.issue) {
            this.issue.forEach(i => {i.diagnostics = env.IS_PRODUCTION ? this.message : this.stack;});
        }
    }

    /**
     * builds stacks
     * @param oldStackDescriptor
     * @param {Error} nested
     * @return {{value: string}|{get: (function(): string)}}
     */
    buildStackDescriptor(oldStackDescriptor, nested) {
        if (oldStackDescriptor.get) {
            return {
                get: function () {
                    var stack = oldStackDescriptor.get.call(this);
                    return this.buildCombinedStacks(stack, this.nested);
                }
            };
        } else {
            var stack = oldStackDescriptor.value;
            return {
                value: this.buildCombinedStacks(stack, nested)
            };
        }
    }

    /**
     * builds combined stacks
     * @param {string} stack
     * @param {Error} nested
     * @return {string}
     */
    buildCombinedStacks(stack, nested) {
        if (nested) {
            stack = nested.stack + '\r\nCauses: ' + stack;
        }
        return stack;
    }
}

/**
 * rethrows an exception with the provided message
 * @param {string} message
 * @param {Error} error
 */
function reThrow({message, error}) {
    throw new RethrownError({message, error});
}

module.exports = {
    RethrownError,
    reThrow
};
