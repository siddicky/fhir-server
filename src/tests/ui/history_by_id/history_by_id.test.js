// provider file
const patient1Resource = require('./fixtures/patient/patient1.json');

const {commonBeforeEach, commonAfterEach, getHeaders, getHtmlHeaders, createTestRequest} = require('../../common');
const {describe, beforeEach, afterEach, expect} = require('@jest/globals');

describe('History UI Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Patient History Search By Id Tests', () => {
        test('history by single id works', async () => {
            const request = await createTestRequest();
            let resp = await request
                .get('/4_0_0/Patient')
                .set(getHeaders())
                .expect(200);

            expect(resp.body.length).toBe(0);
            console.log('------- response 1 ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response 1 ------------');

            resp = await request
                .post('/4_0_0/Patient/1679033641/$merge?validate=true')
                .send(patient1Resource)
                .set(getHeaders())
                .expect(200);

            console.log('------- response patient1Resource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .get('/4_0_0/Patient')
                .set(getHeaders())
                .expect(200);

            console.log('------- response 3 ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response 3 ------------');

            resp = await request
                .get('/4_0_0/Patient/00100000000/_history')
                .set(getHtmlHeaders())
                .expect(200);

            console.log('------- response Patient sorted ------------');
            console.log(JSON.stringify(resp, null, 2));
            console.log('------- end response sort ------------');
            expect(resp.type).toStrictEqual('text/html');
            expect(resp.body).toStrictEqual({});
            expect(resp.text).not.toBeNull();
            expect(resp.text).toMatch(new RegExp('^<!DOCTYPE html>?'));
        });
    });
});