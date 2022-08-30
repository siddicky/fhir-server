const {Transform} = require('stream');
const {isTrue} = require('../../utils/isTrue');
const env = require('var');

class ResourcePreparerTransform extends Transform {
    /**
     * Batches up objects to chunkSize before writing them to output
     * @param {string | null} user
     * @param {string | null} scope
     * @param {Object} args
     * @param {(Object) => Resource} ResourceCreator
     * @param {string} resourceType
     * @param {boolean} useAccessIndex
     * @param {AbortSignal} signal
     * @param {ResourcePreparer} resourcePreparer
     */
    constructor(
        {
            user,
            scope,
            args,
            ResourceCreator,
            resourceType,
            useAccessIndex,
            signal,
            resourcePreparer
        }
    ) {
        super({objectMode: true});
        /**
         * @type {string|null}
         */
        this.user = user;
        /**
         * @type {string|null}
         */
        this.scope = scope;
        /**
         * @type {Object}
         */
        this.args = args;
        /**
         * @type {function(?Object): Resource}
         */
        this.Resource = ResourceCreator;
        /**
         * @type {string}
         */
        this.resourceName = resourceType;
        /**
         * @type {boolean}
         */
        this.useAccessIndex = useAccessIndex;
        /**
         * @type {AbortSignal}
         */
        this._signal = signal;
        /**
         * @type {ResourcePreparer}
         */
        this.resourcePreparer = resourcePreparer;
    }

    /**
     * transforms a chunk
     * @param {Object} chunk
     * @param {import('stream').BufferEncoding} encoding
     * @param {import('stream').TransformCallBack} callback
     * @private
     */
    _transform(chunk, encoding, callback) {
        if (this._signal.aborted) {
            callback();
            return;
        }
        try {
            const chunks = Array.isArray(chunk) ? chunk : [chunk];

            const promises = chunks.map(chunk1 =>
                this.processChunkAsync(chunk1)
            );
            Promise.all(promises).then(() => callback());
        } catch (e) {
            throw new AggregateError([e], 'ResourcePreparer _transform: error');
        }
    }

    /**
     * processes a chunk
     * @param chunk1
     * @returns {Promise<Resource[]>}
     */
    async processChunkAsync(chunk1) {
        return this.resourcePreparer.prepareResourceAsync(this.user, this.scope, this.args, this.Resource, chunk1,
            this.resourceName, this.useAccessIndex)
            .then(
                resources => {
                    if (isTrue(env.LOG_STREAM_STEPS)) {
                        console.log(JSON.stringify({message: 'ResourcePreparerTransform: _transform'}));
                    }
                    if (resources.length > 0) {
                        for (const resource of resources) {
                            if (resource) {
                                if (isTrue(env.LOG_STREAM_STEPS)) {
                                    console.log(JSON.stringify({message: `ResourcePreparerTransform: push ${resource['id']}`}));
                                }
                                this.push(resource);
                            }
                        }
                    }
                }
            );
    }

    /**
     * @param {import('stream').TransformCallBack} callback
     * @private
     */
    _flush(callback) {
        if (isTrue(env.LOG_STREAM_STEPS)) {
            console.log(JSON.stringify({message: 'ResourcePreparerTransform: _flush'}));
        }
        callback();
    }
}

module.exports = {
    ResourcePreparerTransform
};