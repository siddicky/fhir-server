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
        slot: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'Slot');
        },
    },
    Slot: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        schedule: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.schedule);
        },
    },
};
