// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {
    resolveType,
    findResourcesByReference,
    findResourceByReference,
    getResources,
} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        allergyIntolerance: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'AllergyIntolerance');
        },
    },
    AllergyIntoleranceRecorder: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    AllergyIntoleranceAsserter: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    AllergyIntolerance: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        patient: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.patient);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        encounter: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.encounter);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        recorder: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.recorder);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        asserter: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.asserter);
        },
    },
};
