// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ClaimPayeeParty: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ClaimPayee: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        party: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.party);
        },
    }
};

