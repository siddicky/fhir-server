// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ExplanationOfBenefitPayeeParty: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ExplanationOfBenefitPayee: {
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
