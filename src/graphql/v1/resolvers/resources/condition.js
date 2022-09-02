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
        condition: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'Condition');
        },
    },
    ConditionSubject: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ConditionRecorder: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ConditionAsserter: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    Condition: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        subject: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.subject);
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
