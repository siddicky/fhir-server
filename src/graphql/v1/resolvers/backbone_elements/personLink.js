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
    PersonLinkTarget: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    PersonLink: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        target: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.target);
        },
    },
};
