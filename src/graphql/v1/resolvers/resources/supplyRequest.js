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
        supplyRequest: async (parent, args, context, info) => {
            return await getResources(parent, args, context, info, 'SupplyRequest');
        },
    },
    SupplyRequestItemReference: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequestRequester: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequestSupplier: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequestReasonReference: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequestDeliverFrom: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequestDeliverTo: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    SupplyRequest: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        itemReference: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.itemReference);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        requester: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.requester);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        supplier: async (parent, args, context, info) => {
            return await findResourcesByReference(parent, args, context, info, parent.supplier);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reasonReference: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.reasonReference
            );
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        deliverFrom: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.deliverFrom);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        deliverTo: async (parent, args, context, info) => {
            return await findResourceByReference(parent, args, context, info, parent.deliverTo);
        },
    },
};
