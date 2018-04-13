const { connMess } = require('db-client.js');
const chaiHttp = require('chai-http');
const chai = require('chai');
const { assert } = chai;
chai.use(chaiHttp);

describe(() => {
    it.only('connects to client', () => {
        assert.equal(connMess, 'client connected!');
    });
});