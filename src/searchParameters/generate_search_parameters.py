# This file has the code generator to reach search-parameters.json and generate searchParameters.js

import json
import re
from dataclasses import dataclass
from pathlib import Path
from re import Match
from typing import Any
from typing import Dict
from typing import List
from typing import Optional


@dataclass
class QueryEntry:
    resource: str
    search_parameter: str
    type_: str
    field: str
    target: Optional[List[str]]
    description: Optional[str]


def add_values_in_dict(sample_dict: Dict[str, Dict[str, List[QueryEntry]]], query_entry: QueryEntry):
    """ Append multiple values to a key in
        the given dictionary """
    if query_entry.resource not in sample_dict:
        sample_dict[query_entry.resource] = dict()
    if query_entry.search_parameter not in sample_dict[query_entry.resource]:
        sample_dict[query_entry.resource][query_entry.search_parameter] = list()
    sample_dict[query_entry.resource][query_entry.search_parameter].append(query_entry)
    return sample_dict


def main() -> int:
    data_dir: Path = Path(__file__).parent.joinpath("./")

    with open(data_dir.joinpath("search-parameters.json"), "r+") as file:
        contents = file.read()

    fhir_schema = json.loads(contents)

    entries: List[Dict[str, str]] = fhir_schema["entry"]

    query_entries: List[QueryEntry] = []
    print("search_parameter,base,code,status,type_,xpath,xpath_transformed,target,expression")
    entry: Dict[str, Any]
    for entry in entries:
        resource: Dict[str, Any] = entry["resource"]
        search_parameter: str = resource["name"]
        code: str = resource["code"]
        status: str = resource["status"]
        description: str = resource["description"]
        type_: str = resource["type"]
        base: str = "|".join(resource["base"])
        expression: str = resource.get("expression", None)
        experimental: str = resource["experimental"]
        xpath: str = resource.get("xpath", None)
        xpath_transformed: str = xpath.replace("/f:", ".").replace("f:", "") if xpath else None
        target: str = "|".join(resource["target"]) if "target" in resource else None
        print(f"{search_parameter},{base},{code},{status},{type_},{xpath},{xpath_transformed},{target},{expression}")
        if xpath_transformed:
            exp: str
            for exp in xpath_transformed.split("|"):
                exp = exp.strip(" ")
                resource1, exp1 = exp.split(".", 1)
                query_entry: QueryEntry = QueryEntry(
                    resource=resource1,
                    search_parameter=search_parameter,
                    type_=type_,
                    field=exp1,
                    target=target.split("|") if target else None,
                    description=description
                )
                query_entries.append(query_entry)

    # group by Resource
    sample_dict: Dict[str, Dict[str, List[QueryEntry]]] = {}
    for query_entry in query_entries:
        add_values_in_dict(sample_dict=sample_dict, query_entry=query_entry)

    # for some reason Binary is missing
    sample_dict['Binary'] = {}

    # generate the file
    field_filter_regex = r"\[([^\]])+\]"

    data_dir: Path = Path(__file__).parent.joinpath("./")

    # write out the js file
    file_path: Path = data_dir.joinpath("searchParameters.js")
    with open(file_path, "w") as file2:
        file2.write("// noinspection SpellCheckingInspection\n")
        file2.write("// Autogenerated by script: generate_search_parameters.py.  Do not edit.\n")
        file2.write("const searchParameterQueries = {\n")
        write_search_parameter_dict(field_filter_regex, file2, sample_dict)
        file2.write(";\n")
        file2.write("\nmodule.exports = {\n")
        file2.write("\tsearchParameterQueries: searchParameterQueries\n")
        file2.write("};\n")

    # write out the python file for v1
    file_path: Path = data_dir.joinpath("../fhir/generator").joinpath("search_parameters.py")
    with open(file_path, "w") as file2:
        file2.write("# Autogenerated by script: generate_search_parameters.py.  Do not edit.\n")
        file2.write("search_parameter_queries = {\n")
        write_search_parameter_dict(field_filter_regex, file2, sample_dict)
        file2.write("\n")

    # write out the python file for v2
    file_path: Path = data_dir.joinpath("../fhir/generator").joinpath("search_parameters.py")
    with open(file_path, "w") as file2:
        file2.write("# Autogenerated by script: generate_search_parameters.py.  Do not edit.\n")
        file2.write("search_parameter_queries = {\n")
        write_search_parameter_dict(field_filter_regex, file2, sample_dict)
        file2.write("\n")
    return 0


def write_search_parameter_dict(field_filter_regex, file2, sample_dict):
    resource: str
    resource_entries_dict: Dict[str, List[QueryEntry]]
    for resource, resource_entries_dict in sorted(sample_dict.items()):
        file2.write(f"\t'{resource}': {{\n")
        search_parameter: str
        search_parameter_entries: List[QueryEntry]
        for search_parameter, search_parameter_entries in sorted(resource_entries_dict.items()):
            file2.write(f"\t\t'{search_parameter}': {{\n")
            if search_parameter_entries[0].description:
                cleaned_description: Optional[str] = search_parameter_entries[0].description.replace('\n', '').replace(
                    '\r', '').replace("'", "")
                file2.write(f"\t\t\t'description': '{cleaned_description}',\n")
                file2.write(f"\t\t\t'type': '{search_parameter_entries[0].type_}',\n")  # we assume all are of same type
            # now figure out the fields
            if len(search_parameter_entries) == 1:  # simple case
                # if block as a temp fix for issue with hl7 data file
                # https://icanbwell.atlassian.net/jira/software/c/projects/FSI/issues/FSI-9
                if resource in ['Patient', 'Person', 'Practitioner', 'RelatedPerson'] and search_parameter == 'name':
                    fields = ["'name.text'", "'name.given'", "'name.family'", "'name.suffix'", "'name.prefix'"]
                    file2.write(f"\t\t\t'fields': [{', '.join(fields)}],\n")
                else:
                    field_filter_match: Match = re.search(field_filter_regex, search_parameter_entries[0].field)
                    field_filter: Optional[str] = field_filter_match.group() if field_filter_match else None
                    cleaned_field: str = re.sub(field_filter_regex, "", search_parameter_entries[0].field)
                    file2.write(f"\t\t\t'field': '{cleaned_field}',\n")
                    if field_filter:
                        cleaned_field_filter: str = field_filter.replace("'", "\\'")
                        file2.write(f"\t\t\t'fieldFilter': '{cleaned_field_filter}',\n")
            else:
                fields: List[str] = []
                field_filters: List[str] = []
                for search_parameter_entry in search_parameter_entries:
                    field_filter_match: Match = re.search(field_filter_regex, search_parameter_entry.field)
                    field_filter: Optional[str] = field_filter_match.group() if field_filter_match else None
                    cleaned_field: str = re.sub(field_filter_regex, "", search_parameter_entry.field)
                    fields.append(cleaned_field)
                    if field_filter:
                        cleaned_field_filter: str = field_filter.replace("'", "\\'")
                        field_filters.append(cleaned_field_filter)
                fields = [f"'{f}'" for f in fields]
                field_filters = [f"'{f}'" for f in field_filters]
                file2.write(f"\t\t\t'fields': [{', '.join(fields)}],\n")
                if len(field_filters) > 0:
                    file2.write(f"\t\t\t'fieldFilters': [{', '.join(field_filters)}],\n")

            # now write the target.  assume target is same for all search parameters with same name
            if search_parameter_entries[0].target:
                file2.write(f"\t\t\t'target': [")
                target_list = [f"'{t}'" for t in search_parameter_entries[0].target]
                file2.write(f"{', '.join(target_list)}")
                file2.write("],\n")
            file2.write("\t\t},\n")
        file2.write("\t},\n")
    file2.write("}")


if __name__ == "__main__":
    exit(main())
