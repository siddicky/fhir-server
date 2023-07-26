const {Transform} = require('stream');
const {isTrue} = require('../../utils/isTrue');
const env = require('var');
const {logInfo} = require('../common/logging');

class ResourceIdTracker extends Transform {
    /**
     * Tracks the ids of the objects flowing through the stream
     * @param  {{id: string[]}} tracker
     * @param {AbortSignal} signal
     * @param {number} highWaterMark
     */
    constructor({tracker, signal, highWaterMark}) {
        super({objectMode: true, highWaterMark: highWaterMark});
        /**
         * @type {{id: string[]}}
         * @private
         */
        this._tracker = tracker;
        /**
         * @type {*[]}
         */
        this._tracker.id = [];
        /**
         * @type {AbortSignal}
         */
        this._signal = signal;
    }

    /**
     * transforms a chunk
     * @param {Resource} chunk
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

            if (chunk !== null && chunk !== undefined) {
                if (isTrue(env.LOG_STREAM_STEPS)) {
                    logInfo(`ResourceIdTracker: _transform ${chunk['id']}`, {});
                }
                this._tracker.id.push(chunk['id']);
                this.push(chunk, encoding);
            }
        } catch (e) {
            throw new AggregateError([e], 'ResourceIdTracker _transform: error');
        }
        callback();
    }
}

module.exports = {
    ResourceIdTracker
};
