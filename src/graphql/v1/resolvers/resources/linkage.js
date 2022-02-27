// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        linkage: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'Linkage'
            );
        }
    },
    LinkageAuthor: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    Linkage: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        author: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.author);
        },
    }
};
