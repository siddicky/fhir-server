// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        consent: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'Consent'
            );
        }
    },
    ConsentPerformer: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ConsentSourceReference: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    Consent: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        patient: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.patient);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        performer: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.performer);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        organization: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.organization);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        sourceReference: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.sourceReference);
        },
    }
};