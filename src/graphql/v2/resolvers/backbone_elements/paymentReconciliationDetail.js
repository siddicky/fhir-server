// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    PaymentReconciliationDetailSubmitter: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    PaymentReconciliationDetailPayee: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    PaymentReconciliationDetail: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        request: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.request);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        submitter: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.submitter);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        response: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.response);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        responsible: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.responsible);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        payee: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.payee);
        },
    }
};

