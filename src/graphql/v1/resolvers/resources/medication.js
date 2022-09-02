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
        medication: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'Medication');
        },
    },
    Medication: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        manufacturer: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.manufacturer);
        },
    },
};
