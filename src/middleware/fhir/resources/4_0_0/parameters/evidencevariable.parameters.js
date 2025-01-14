/**
 * @name exports
 * @static
 * @summary Arguments for the evidencevariable query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "EvidenceVariable.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-composed-of',
    description: 'What resource is being referenced'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-context',
    description: 'A use context assigned to the evidence variable'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'EvidenceVariable.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the evidence variable'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type',
    description: 'A type of use context assigned to the evidence variable'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'EvidenceVariable.date',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-date',
    description: 'The evidence variable publication date'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "EvidenceVariable.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "EvidenceVariable.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'EvidenceVariable.description',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-description',
    description: 'The description of the evidence variable'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'EvidenceVariable.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-effective',
    description: 'The time during which the evidence variable is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-identifier',
    description: 'External identifier for the evidence variable'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-jurisdiction',
    description: 'Intended jurisdiction for the evidence variable'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'EvidenceVariable.name',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-name',
    description: 'Computationally friendly name of the evidence variable'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "EvidenceVariable.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'EvidenceVariable.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-publisher',
    description: 'Name of the publisher of the evidence variable'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.status',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-status',
    description: 'The current status of the evidence variable'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "EvidenceVariable.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'EvidenceVariable.title',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-title',
    description: 'The human-friendly name of the evidence variable'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-topic',
    description: 'Topics associated with the EvidenceVariable'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'EvidenceVariable.url',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-url',
    description: 'The uri that identifies the evidence variable'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceVariable.version',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-version',
    description: 'The business version of the evidence variable'
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-quantity',
    description: 'A use context type and quantity- or range-based value assigned to the evidence variable'
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-value',
    description: 'A use context type and value assigned to the evidence variable'
  }
};
