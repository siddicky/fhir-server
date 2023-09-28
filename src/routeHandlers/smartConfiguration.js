/**
 * This route handler implements the FHIR Smart Configuration
 */

const env = require('var');
const superagent = require('superagent');
const requestTimeout = (parseInt(env.EXTERNAL_REQUEST_TIMEOUT_SEC) || 30) * 1000;
module.exports.handleSmartConfiguration = async (req, res) => {
    if (env.AUTH_CONFIGURATION_URI) {
        /**
         * @type {*}
         */
        const response = await superagent
            .get(env.AUTH_CONFIGURATION_URI)
            .set({
                Accept: 'application/json',
            })
            .timeout(requestTimeout);
        /**
         * @type {Object}
         */
        const jsonResponse = JSON.parse(response.text);
        res.json(jsonResponse);
    } else {
        return res.json();
    }
};
