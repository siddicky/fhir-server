// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ExplanationOfBenefitDiagnosis: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        diagnosisReferenceV2: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.diagnosisReferenceV2);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        diagnosisReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.diagnosisReference);
        },
    }
};

