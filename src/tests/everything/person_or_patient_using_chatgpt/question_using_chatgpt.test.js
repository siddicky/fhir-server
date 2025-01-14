// test file
require('dotenv').config();

const topLevelPersonResource = require('./fixtures/Person/topLevelPerson.json');
const person1Resource = require('./fixtures/Person/person1.json');
const person2Resource = require('./fixtures/Person/person2.json');

const patient1Resource = require('./fixtures/Patient/patient1.json');
const patient2Resource = require('./fixtures/Patient/patient2.json');

const observation1Resource = require('./fixtures/Observation/observation1.json');
const observation2Resource = require('./fixtures/Observation/observation2.json');

// expected
const expectedPersonTopLevelResources = require('./fixtures/expected/expected_Person_personTopLevel.json');
const expectedPersonTopLevelContainedResources = require('./fixtures/expected/expected_Person_personTopLevel_contained.json');
const expectedPerson1Resources = require('./fixtures/expected/expected_Person_person1.json');
const expectedPerson1ContainedResources = require('./fixtures/expected/expected_Person_person1_contained.json');

const expectedPatientResources = require('./fixtures/expected/expected_Patient.json');
const expectedPatientContainedResources = require('./fixtures/expected/expected_Patient_contained.json');

const {commonBeforeEach, commonAfterEach, getHeaders, createTestRequest, getHtmlHeaders} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');

// const describeIf = process.env.OPENAI_API_KEY ? describe : describe.skip;

describe('Person and Patient $everything chatgpt Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Question chatgpt Tests', () => {
        test('Question chatgpt works', async () => {
            console.log(`OPENAI_API_KEY=${process.env.OPENAI_API_KEY}`);
            if (!process.env.OPENAI_API_KEY) {
                return;
            }
            const request = await createTestRequest();
            // ARRANGE
            // add the resources to FHIR server
            // let resp = await request
            //     .post('/4_0_0/Person/1/$merge?validate=true')
            //     .send(topLevelPersonResource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            // resp = await request
            //     .post('/4_0_0/Person/1/$merge?validate=true')
            //     .send(person1Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            //
            // resp = await request
            //     .post('/4_0_0/Person/1/$merge?validate=true')
            //     .send(person2Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            // resp = await request
            //     .post('/4_0_0/Patient/1/$merge?validate=true')
            //     .send(patient1Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            // resp = await request
            //     .post('/4_0_0/Patient/1/$merge?validate=true')
            //     .send(patient2Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            //
            // resp = await request
            //     .post('/4_0_0/Observation/1/$merge?validate=true')
            //     .send(observation1Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});
            //
            // resp = await request
            //     .post('/4_0_0/Observation/1/$merge?validate=true')
            //     .send(observation2Resource)
            //     .set(getHeaders());
            // // noinspection JSUnresolvedFunction
            // expect(resp).toHaveMergeResponse({created: true});


            // ACT & ASSERT
            // First get patient everything
            const question = "What is this patient's data of birth?";
            const urlEncodedQuestion = encodeURIComponent(question);
            let resp = await request
                .get(`/4_0_0/$question?_question=${urlEncodedQuestion}`)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientResources);
            resp = await request
                .get(`/4_0_0/Patient/patient1/$everything?_question=${urlEncodedQuestion}&contained=true`)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientContainedResources);

            // Second get person everything from topLevel
            resp = await request
                .get('/4_0_0/Person/personTopLevel/$everything')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPersonTopLevelResources);
            resp = await request
                .get('/4_0_0/Person/personTopLevel/$everything?contained=true')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPersonTopLevelContainedResources);

            // Third get person everything from person1
            resp = await request
                .get('/4_0_0/Person/person1/$everything')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPerson1Resources);
            resp = await request
                .get('/4_0_0/Person/person1/$everything?contained=true')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPerson1ContainedResources);
        });
        test.skip('Person and Patient $everything chatgpt works when accept type is html', async () => {
            if (!process.env.OPENAI_API_KEY) {
                return;
            }
            const request = await createTestRequest();
            // ARRANGE
            // add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(topLevelPersonResource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            // ACT & ASSERT
            // First get patient everything
            const question = "What is this patient's data of birth?";
            const urlEncodedQuestion = encodeURIComponent(question);
            resp = await request
                .get(`/4_0_0/Patient/patient1/$everything?_question=${urlEncodedQuestion}`)
                .set(getHtmlHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientResources);
            resp = await request
                .get('/4_0_0/Patient/patient1/$everything?_question=${urlEncodedQuestion}&contained=true')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientContainedResources);

            // Second get person everything from topLevel
            resp = await request
                .get('/4_0_0/Person/personTopLevel/$everything?_question=${urlEncodedQuestion}')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPersonTopLevelResources);
            resp = await request
                .get('/4_0_0/Person/personTopLevel/$everything?contained=true&_question=${urlEncodedQuestion}')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPersonTopLevelContainedResources);

            // Third get person everything from person1
            resp = await request
                .get('/4_0_0/Person/person1/$everything')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPerson1Resources);
            resp = await request
                .get('/4_0_0/Person/person1/$everything?contained=true')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPerson1ContainedResources);
        });
    });
});
