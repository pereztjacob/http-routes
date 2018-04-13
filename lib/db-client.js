const dotenv = require('dotenv');
dotenv.config();

// connect to db
const DATABASE_URL = process.env.DATABASE_URL || 'portgres://localhost:5432/florists';
const pg = require('pg');
const Client = pg.Client;
let connMess;

// create client session
const client = new Client(DATABASE_URL);
client.connect()
    .then(() => {
        connMess = 'client connected!';
        console.log(connMess);
    })
    .catch(err => console.error('conn err', err));
client.on('error', err => {
    console.error('\n ERR ERR ERR \n\n', err);
});

module.exports = { client, connMess };