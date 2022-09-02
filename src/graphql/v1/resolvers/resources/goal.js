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
        goal: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'Goal');
        },
    },
    GoalSubject: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    GoalExpressedBy: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    GoalAddresses: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    Goal: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        subject: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.subject);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        expressedBy: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.expressedBy);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        addresses: async (parent, args, context, info) => {
            return await findResourcesByReference(parent, args, context, info, parent.addresses);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        outcomeReference: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.outcomeReference
            );
        },
    },
};
