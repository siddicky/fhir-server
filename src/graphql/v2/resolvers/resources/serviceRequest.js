// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        serviceRequest: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'ServiceRequest'
            );
        }
    },
    ServiceRequestBasedOn: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestSubject: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestRequester: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestPerformer: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestReasonReference: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestInsurance: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequestSupportingInfo: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ServiceRequest: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        basedOn: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.basedOn);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        replaces: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.replaces);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        subject: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.subject);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        encounter: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.encounter);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        requester: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.requester);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        performer: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.performer);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        locationReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.locationReference);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reasonReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.reasonReference);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        insurance: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.insurance);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        supportingInfo: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.supportingInfo);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        specimen: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.specimen);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        relevantHistory: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.relevantHistory);
        },
    }
};

