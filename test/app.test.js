require('dotenv').config({ path: './test/.env.test'});
const client = require('../lib/db-client');
const chaiHttp = require('chai-http');
const app = require('../lib/app');
const chai = require('chai');
const { assert } = chai;
chai.use(chaihttp);

describe('pets', () => {

    let memphis = {
        name: 'Memphis',
        category_id: 1
    };

    before(() => {
        return chai.request(app)
            .post('/florists')
            .send(memphis)
            .then(({ body }) => {
                assert.equal(body.name, mamphis.name);
                assert.equal(body.caategory_id, memphis.caategory_id);
                memphis = body;
            });
    });

    it('saves florist', () => {
        assert.ok(memphis.id);
    });

});