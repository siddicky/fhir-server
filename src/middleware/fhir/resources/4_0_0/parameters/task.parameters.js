/**
 * @name exports
 * @static
 * @summary Arguments for the task query
 */
module.exports = {
  'authored-on': {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Task.authoredOn',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-authored-on',
    description: 'Search by creation date'
  },
  'based-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.basedOn',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-based-on',
    description: 'Search by requests this task is based on'
  },
  'business-status': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.businessStatus',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-business-status',
    description: 'Search by business status'
  },
  code: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-code',
    description: 'Search by task code'
  },
  encounter: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.encounter',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-encounter',
    description: 'Search by encounter'
  },
  focus: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.focus',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-focus',
    description: 'Search by task focus'
  },
  'group-identifier': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.groupIdentifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-group-identifier',
    description: 'Search by group identifier'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-identifier',
    description: 'Search for a task instance by its business identifier'
  },
  intent: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.intent',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-intent',
    description: 'Search by task intent'
  },
  modified: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Task.lastModified',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-modified',
    description: 'Search by last modification date'
  },
  owner: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.owner',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-owner',
    description: 'Search by task owner'
  },
  'part-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.partOf',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-part-of',
    description: 'Search by task this task is part of'
  },
  patient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.for',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-patient',
    description: 'Search by patient'
  },
  performer: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.performerType',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-performer',
    description: 'Search by recommended type of performer (e.g., Requester, Performer, Scheduler).'
  },
  period: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Task.executionPeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-period',
    description: 'Search by period Task is/was underway'
  },
  priority: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.priority',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-priority',
    description: 'Search by task priority'
  },
  requester: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.requester',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-requester',
    description: 'Search by task requester'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Task.status',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-status',
    description: 'Search by task status'
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Task.for',
    definition: 'http://hl7.org/fhir/SearchParameter/Task-subject',
    description: 'Search by subject'
  }
};
