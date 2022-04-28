const supertest = require('supertest');

const {app} = require('../../../app');
// provider file
const practitionerResource = require('./fixtures/practitioner/practitioner.json');
const practitionerResource2 = require('./fixtures/practitioner/practitioner2.json');
const practitionerResource3 = require('./fixtures/practitioner/practitioner3.json');

// expected
const expectedPractitionerResource = require('./fixtures/expected/expected_practitioner.json');
const expectedSinglePractitionerResource = require('./fixtures/expected/expected_single_practitioner.json');

const request = supertest(app);
const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    getHeadersNdJson, getHeadersNdJsonFormUrlEncoded
} = require('../../common');
const {ndjsonToJsonText} = require('ndjson-to-json-text');

describe('PractitionerReturnIdTests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Practitioner Search By Multiple Ids Tests', () => {
        test('search by single id works', async () => {
            let resp = await request
                .get('/4_0_0/Practitioner?_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);
            let body = JSON.parse(ndjsonToJsonText(resp.text));
            expect(body.length).toBe(0);
            console.log('------- response 1 ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response 1 ------------');

            resp = await request
                .post('/4_0_0/Practitioner/1679033641/$merge?validate=true')
                .send(practitionerResource)
                .set(getHeaders())
                .expect(200);

            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/0/$merge')
                .send(practitionerResource2)
                .set(getHeaders())
                .expect(200);

            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .get('/4_0_0/Practitioner?_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);

            body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response 3 ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response 3 ------------');

            resp = await request
                .get('/4_0_0/Practitioner?id=0&_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);

            body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response Practitioner sorted ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response sort ------------');
            expect(body.length).toBe(1);
            body.forEach(element => {
                delete element['meta']['lastUpdated'];
            });
            let expected = expectedSinglePractitionerResource;
            expected.forEach(element => {
                delete element['meta']['lastUpdated'];
                delete element['$schema'];
            });
            // expected[0]['meta'] = { 'versionId': '2' };
            expect(body).toStrictEqual(expected);
        });
        test('search by multiple id works', async () => {
            let resp = await request
                .get('/4_0_0/Practitioner?_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);
            let body = JSON.parse(ndjsonToJsonText(resp.text));
            expect(body.length).toBe(0);
            console.log('------- response 1 ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response 1 ------------');

            resp = await request
                .post('/4_0_0/Practitioner/1679033641/$merge')
                .send(practitionerResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/0/$merge')
                .send(practitionerResource2)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/1/$merge')
                .send(practitionerResource3)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .get('/4_0_0/Practitioner?_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);
            body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response 3 ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response 3 ------------');

            resp = await request
                .get('/4_0_0/Practitioner?id=0,1679033641&_sort=id&_streamResponse=1')
                .set(getHeadersNdJson())
                .expect(200);

            body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response Practitioner sorted ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response sort ------------');
            expect(body.length).toBe(2);
            body.forEach(element => {
                delete element['meta']['lastUpdated'];
            });
            let expected = expectedPractitionerResource;
            expected.forEach(element => {
                delete element['meta']['lastUpdated'];
                delete element['$schema'];
            });
            // expected[0]['meta'] = { 'versionId': '2' };
            expect(body).toStrictEqual(expected);
        });
        test('search by multiple id works via POST', async () => {
            let resp = await request
                .post('/4_0_0/Practitioner/1679033641/$merge')
                .send(practitionerResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/0/$merge')
                .send(practitionerResource2)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/1/$merge')
                .send(practitionerResource3)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/_search?_sort=id&_streamResponse=1')
                .send({id: '0,1679033641'})
                .set(getHeadersNdJson())
                .expect(200);

            let body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response Practitioner sorted ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response sort ------------');
            expect(body.length).toBe(2);
            body.forEach(element => {
                delete element['meta']['lastUpdated'];
            });
            let expected = expectedPractitionerResource;
            expected.forEach(element => {
                delete element['meta']['lastUpdated'];
                delete element['$schema'];
            });
            // expected[0]['meta'] = { 'versionId': '2' };
            expect(body).toStrictEqual(expected);
        });
        test('search by multiple id works via POST (x-www-form-urlencoded)', async () => {
            let resp = await request
                .post('/4_0_0/Practitioner/1679033641/$merge')
                .send(practitionerResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/0/$merge')
                .send(practitionerResource2)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/1/$merge')
                .send(practitionerResource3)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/_search?_sort=id&_streamResponse=1')
                .send('id=0,1679033641')
                .set(getHeadersNdJsonFormUrlEncoded())
                .expect(200);

            let body = JSON.parse(ndjsonToJsonText(resp.text));
            console.log('------- response Practitioner sorted ------------');
            console.log(JSON.stringify(body, null, 2));
            console.log('------- end response sort ------------');
            expect(body.length).toBe(2);
            body.forEach(element => {
                delete element['meta']['lastUpdated'];
            });
            let expected = expectedPractitionerResource;
            expected.forEach(element => {
                delete element['meta']['lastUpdated'];
                delete element['$schema'];
            });
            // expected[0]['meta'] = { 'versionId': '2' };
            expect(body).toStrictEqual(expected);
        });
    });
});