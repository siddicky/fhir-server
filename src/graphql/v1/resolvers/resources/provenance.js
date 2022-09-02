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
        provenance: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'Provenance');
        },
    },
    Provenance: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        target: async (parent, args, context, info) => {
            return await findResourcesByReference(parent, args, context, info, parent.target);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        location: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.location);
        },
    },
};
