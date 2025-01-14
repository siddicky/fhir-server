/**
 * converts graphql parameters to standard FHIR parameters
 * @param {string | string[] | Object} queryParameterValue
 * @param {Object} args
 * @param {string} queryParameter
 * @return {Object}
 */
function convertGraphQLParameters(queryParameterValue, args, queryParameter) {
    let notQueryParameterValue;
    if (queryParameterValue) {
        // un-bundle any objects coming from graphql
        if (
            typeof queryParameterValue === 'object' &&
            !Array.isArray(queryParameterValue) &&
            queryParameterValue['searchType']
        ) {
            let useNotEquals = false;
            switch (queryParameterValue['searchType']) {
                case 'string':
                    // parse out notEquals values
                    if (queryParameterValue['notEquals']) {
                        const notEqualsObject = queryParameterValue['notEquals'];
                        notQueryParameterValue = notEqualsObject['value'] || notEqualsObject['values'];
                        queryParameterValue = [];
                    } else {
                        // handle SearchString
                        queryParameterValue = queryParameterValue['value'] || queryParameterValue['values'];
                    }
                    break;
                case 'token':
                    if (queryParameterValue['value']) {
                        // noinspection JSValidateTypes
                        queryParameterValue['values'] = [queryParameterValue['value']];
                    }
                    if (queryParameterValue['notEquals']) {
                        // noinspection JSValidateTypes
                        queryParameterValue['values'] = [queryParameterValue['notEquals']];
                        useNotEquals = true;
                    }
                    // eslint-disable-next-line no-case-declarations
                    let newQueryParameterValue = [];
                    notQueryParameterValue = [];
                    if (queryParameterValue['values']) {
                        for (let token of queryParameterValue['values']) {
                            let innerNotEquals = false;
                            if (token['notEquals']) {
                                token = token['notEquals'];
                                innerNotEquals = true;
                            }
                            let tokenString = '';
                            if (token['system']) {
                                tokenString = token['system'] + '|';
                            }
                            if (token['code']) {
                                tokenString += token['code'];
                            }
                            if (token['value']) {
                                tokenString += token['value'];
                            }
                            if (tokenString) {
                                if (useNotEquals || innerNotEquals) {
                                    notQueryParameterValue.push(tokenString);
                                } else {
                                    newQueryParameterValue.push(tokenString);
                                }
                            }
                        }
                    }
                    queryParameterValue = newQueryParameterValue;
                    break;
                case 'reference':
                    // eslint-disable-next-line no-case-declarations
                    let referenceText = '';
                    if (queryParameterValue['notEquals']) {
                        const notEqualsObject = queryParameterValue['notEquals'];
                        if (notEqualsObject['value']) {
                            queryParameterValue['value'] = notEqualsObject['value'];
                        }
                        if (notEqualsObject['target']) {
                            queryParameterValue['target'] = notEqualsObject['target'];
                        }
                        useNotEquals = true;
                    }
                    if (queryParameterValue['target']) {
                        referenceText = queryParameterValue['target'] + '/';
                    }
                    if (queryParameterValue['value']) {
                        referenceText += queryParameterValue['value'];
                    }
                    if (useNotEquals) {
                        notQueryParameterValue = referenceText;
                        queryParameterValue = [];
                    } else {
                        queryParameterValue = referenceText;
                    }
                    break;
                case 'quantity':
                    // eslint-disable-next-line no-case-declarations
                    let quantityString = '';
                    if (queryParameterValue['notEquals']) {
                        const notEqualsObject = queryParameterValue['notEquals'];
                        Object.keys(notEqualsObject).forEach(key => {
                            // eslint-disable-next-line security/detect-object-injection
                            queryParameterValue[key] = notEqualsObject[key];
                        });
                        useNotEquals = true;
                    }
                    if (queryParameterValue['prefix']) {
                        quantityString += queryParameterValue['prefix'];
                    }
                    if (queryParameterValue['value']) {
                        quantityString += queryParameterValue['value'];
                    }
                    if (queryParameterValue['system']) {
                        quantityString += '|' + queryParameterValue['system'];
                    }
                    if (queryParameterValue['code']) {
                        quantityString += '|' + queryParameterValue['code'];
                    }
                    if (useNotEquals) {
                        notQueryParameterValue = quantityString;
                        queryParameterValue = [];
                    } else {
                        queryParameterValue = quantityString;
                    }
                    break;
                case 'date':
                case 'dateTime':
                case 'number':
                    if (queryParameterValue['value']) {
                        // noinspection JSValidateTypes
                        queryParameterValue['values'] = [queryParameterValue['value']];
                    }
                    if (queryParameterValue['values']) {
                        const numberValues = [];
                        for (const dateValue of queryParameterValue['values']) {
                            queryParameterValue = [];
                            let dateString = '';
                            if (dateValue['equals']) {
                                dateString = 'eq' + dateValue['equals'];
                            }
                            if (dateValue['notEquals']) {
                                dateString = 'ne' + dateValue['notEquals'];
                            }
                            if (dateValue['greaterThan']) {
                                dateString = 'gt' + dateValue['greaterThan'];
                            }
                            if (dateValue['greaterThanOrEqualTo']) {
                                dateString = 'ge' + dateValue['greaterThanOrEqualTo'];
                            }
                            if (dateValue['lessThan']) {
                                dateString = 'lt' + dateValue['lessThan'];
                            }
                            if (dateValue['lessThanOrEqualTo']) {
                                dateString = 'le' + dateValue['lessThanOrEqualTo'];
                            }
                            if (dateValue['startsAfter']) {
                                dateString = 'sa' + dateValue['startsAfter'];
                            }
                            if (dateValue['endsBefore']) {
                                dateString = 'eb' + dateValue['endsBefore'];
                            }
                            if (dateValue['approximately']) {
                                dateString = 'ap' + dateValue['approximately'];
                            }
                            if (dateString) {
                                numberValues.push(dateString);
                            }
                        }
                        if (numberValues.length > 0) {
                            queryParameterValue = queryParameterValue.concat(numberValues);
                        }
                    }
                    break;
                default:
                    break;
            }
            if (queryParameterValue['missing']) {
                args[`${queryParameter}:missing`] = queryParameterValue['missing'];
            }
        }
    }
    return {queryParameterValue, notQueryParameterValue};
}

module.exports = {
    convertGraphQLParameters: convertGraphQLParameters
};
