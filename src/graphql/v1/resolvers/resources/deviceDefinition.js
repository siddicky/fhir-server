// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        deviceDefinition: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'DeviceDefinition'
            );
        }
    },
    DeviceDefinition: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        manufacturerReference: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.manufacturerReference);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        owner: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.owner);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        parentDevice: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.parentDevice);
        },
    }
};