const {dateQueryBuilder} = require("../../../utils/querybuilder.util");

/**
 * Filters by string
 * https://www.hl7.org/fhir/search.html#string
 * @param {string | string[]} queryParameterValue
 * @param {Object[]} and_segments
 * @param {import('../common/types').SearchParameterDefinition} propertyObj
 * @param {Set} columns
 */
function filterByString(queryParameterValue, and_segments, propertyObj, columns) {
    if (Array.isArray(queryParameterValue)) {
        // if array is passed then check in array

        if (`${propertyObj.fields}`) {
            and_segments.push({
                $or: propertyObj.fields.map((f) => {
                    return {
                        [`${f}`]: {
                            $in: queryParameterValue}
                    };
                }),
            });
            columns.add(`${propertyObj.fields}`);
        }
        else {
            and_segments.push({
                [`${propertyObj.field}`]: {
                    $in: queryParameterValue,
                },
            });
            columns.add(`${propertyObj.field}`);
        }
    } else if (queryParameterValue.includes(',')) {
        // see if this is a comma separated list
        const value_list = queryParameterValue.split(',');

        if(`${propertyObj.fields}`) {
            and_segments.push({
                $or: propertyObj.fields.map((f) => {
                    return {
                        [`${f}`]: {
                            $in: value_list
                        }
                    };
                }),
            });
            columns.add(`${propertyObj.fields}`);
        } else {
            and_segments.push({
                [`${propertyObj.field}`]: {
                    $in: value_list,
                },
            });
            columns.add(`${propertyObj.field}`);
        }
    } else if (`${propertyObj.fields}`) {
        // single value is passed
        and_segments.push({
            $or: propertyObj.fields.map((f) => {
                    return {
                        [`${f}`]: queryParameterValue
                    };
                }),
        });
        columns.add(`${propertyObj.fields}`);
    } else {
        and_segments.push({
            [`${propertyObj.field}`]: queryParameterValue,
        });
        columns.add(`${propertyObj.field}`);
    }
}

module.exports = {
    filterByString: filterByString
};
