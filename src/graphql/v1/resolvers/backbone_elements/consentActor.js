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
    ConsentActorReference: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ConsentActor: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reference: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.reference);
        },
    },
};
