// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ImplementationGuideResource: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.reference);
        },
    }
};

