/**
 * @name exports
 * @static
 * @summary Arguments for the evidence query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Evidence.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-composed-of',
    description: 'What resource is being referenced'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-context',
    description: 'A use context assigned to the evidence'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Evidence.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the evidence'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-context-type',
    description: 'A type of use context assigned to the evidence'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Evidence.date',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-date',
    description: 'The evidence publication date'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Evidence.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Evidence.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Evidence.description',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-description',
    description: 'The description of the evidence'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Evidence.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-effective',
    description: 'The time during which the evidence is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-identifier',
    description: 'External identifier for the evidence'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-jurisdiction',
    description: 'Intended jurisdiction for the evidence'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Evidence.name',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-name',
    description: 'Computationally friendly name of the evidence'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Evidence.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Evidence.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-publisher',
    description: 'Name of the publisher of the evidence'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.status',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-status',
    description: 'The current status of the evidence'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Evidence.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Evidence.title',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-title',
    description: 'The human-friendly name of the evidence'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-topic',
    description: 'Topics associated with the Evidence'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'Evidence.url',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-url',
    description: 'The uri that identifies the evidence'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Evidence.version',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-version',
    description: 'The business version of the evidence'
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-context-type-quantity',
    description: 'A use context type and quantity- or range-based value assigned to the evidence'
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Evidence-context-type-value',
    description: 'A use context type and value assigned to the evidence'
  }
};
