const deepcopy = require('deepcopy');

// test file
const masterPersonResource = require('./fixtures/person/master_person.json');
const clientPersonResource = require('./fixtures/person/client_person.json');
const proaPersonResource = require('./fixtures/person/proa_person.json');
const masterPatientResource = require('./fixtures/patient/master_patient.json');
const clientPatientResource = require('./fixtures/patient/client_patient.json');
const proaPatientResource = require('./fixtures/patient/proa_patient.json');
const clientObservationResource = require('./fixtures/observation/client_observation.json');
const proaObservationResource = require('./fixtures/observation/proa_observation.json');
const consentGivenResource = require('./fixtures/consent/consent_given.json');
const consentDeniedResource = require('./fixtures/consent/consent_denied.json');
const masterPersonResource2 = require('./fixtures/person/master_person2.json');
const clientPersonResource2 = require('./fixtures/person/client_person2.json');
const proaPersonResource2 = require('./fixtures/person/proa_person2.json');
const masterPatientResource2 = require('./fixtures/patient/master_patient2.json');
const clientPatientResource2 = require('./fixtures/patient/client_patient2.json');
const proaPatientResource2 = require('./fixtures/patient/proa_patient2.json');
const proaObservationResource2 = require('./fixtures/observation/proa_observation2.json');
const consentGivenResource2 = require('./fixtures/consent/consent_given2.json');

// expected
const expectedClintObservation = require('./fixtures/expected/client_observation.json');
const expectedProaObservation = require('./fixtures/expected/proa_observation.json');
const expectedProaObservation2 = require('./fixtures/expected/proa_observation2.json');
const expectedProaObservation2ProxyCopy = require('./fixtures/expected/proa_observation2_proxy_copy.json');

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    createTestRequest,
} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');
const { DatabasePartitionedCursor } = require('../../../dataLayer/databasePartitionedCursor');


const headers = getHeaders('user/*.read access/client.*');

describe('Consent Based Data Access Test', () => {
    const cursorSpy = jest.spyOn(DatabasePartitionedCursor.prototype, 'hint');

    beforeEach(async () => {
        cursorSpy.mockReturnThis();
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Observation Resource data read by Client Credentails', () => {
        test('consent object not created yet', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            let expectedClintObservationCopy = deepcopy(expectedClintObservation);
            expectedClintObservationCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';

            // Get Observation for a specific person
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedClintObservationCopy]);
        });
        test('Consent has provided to Client', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            let expectedClintObservationCopy = deepcopy(expectedClintObservation);
            expectedClintObservationCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';
            let expectedProaObservationCopy = deepcopy(expectedProaObservation);
            expectedProaObservationCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';

            // Get Observation for a specific person, client have access to read both proa and client resources
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservationCopy, expectedClintObservationCopy]);
        });

        test('Consent has created but denied access to Client', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource, consentDeniedResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            let expectedClintObservationCopy = deepcopy(expectedClintObservation);
            expectedClintObservationCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';

            // Get Observation for a specific person
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedClintObservationCopy]);
        });

        test('Check Consented data fetching using patient ID', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            // Get Observation for proa patient only
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservation]);

            // Get Observation for both client and proa
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc,Patient/bb7862e6-b7ac-470e-bde3-e85cee9d1ce6&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservation, expectedClintObservation]);
        });

        test('Check Consented data fetching for two different patient and both have consented', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource,
                    consentGivenResource, masterPersonResource2, clientPersonResource2, proaPersonResource2, masterPatientResource2,
                    clientPatientResource2, proaPatientResource2, proaObservationResource2, consentGivenResource2
                ])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            // Get Observation for proa patient and proa patient2
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/ede65c66-66ae-42ef-a19d-871065c2421d,Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservation, expectedProaObservation2]);
        });

        test('Check Consented data fetching for two different patient but only has consented', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource,
                    consentDeniedResource, masterPersonResource2, clientPersonResource2, proaPersonResource2, masterPatientResource2,
                    clientPatientResource2, proaPatientResource2, proaObservationResource2, consentGivenResource2
                ])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            // Get Observation for proa patient and proa patient2
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/ede65c66-66ae-42ef-a19d-871065c2421d,Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservation2]);
        });

        test('Consent has provided and proxy patient has stored as reference', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Update proa resouce to use proxy patient as reference
            let proaObservationResourceCopy = deepcopy(proaObservationResource);
            proaObservationResourceCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                    clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResourceCopy, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            let expectedClintObservationCopy = deepcopy(expectedClintObservation);
            expectedClintObservationCopy['subject']['reference'] = 'Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57';

            // Get Observation for a specific person
            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57&_sort=_uuid')
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse([expectedProaObservation2ProxyCopy, expectedClintObservationCopy]);
        });
    });

    test('Should not be able to access resource if proxy-person references is not present', async () => {
        const request = await createTestRequest((c) => {
            return c;
        });

        const consentGivenResourceCopy = deepcopy(consentGivenResource);
        delete consentGivenResourceCopy.provision.actor[1];
        // Add the resources to FHIR server
        let resp = await request
            .post('/4_0_0/Person/1/$merge')
            .send([masterPersonResource, clientPersonResource, proaPersonResource, masterPatientResource,
                clientPatientResource, proaPatientResource, clientObservationResource, proaObservationResource,
                consentGivenResourceCopy, masterPersonResource2, clientPersonResource2, proaPersonResource2, masterPatientResource2,
                clientPatientResource2, proaPatientResource2, proaObservationResource2, consentGivenResource2
            ])
            .set(getHeaders());
        // noinspection JSUnresolvedFunction
        expect(resp).toHaveMergeResponse({created: true});

        // Get Observation for proa patient and proa patient2
        resp = await request
            .get('/4_0_0/Observation?patient=Patient/ede65c66-66ae-42ef-a19d-871065c2421d,Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc&_sort=_uuid')
            .set(headers);
        // noinspection JSUnresolvedFunction
        expect(resp).toHaveResponse([expectedProaObservation2]);
    });
});
