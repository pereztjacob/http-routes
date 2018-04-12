const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || 'portgres://localhost:5432/florists';

const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
    .then(() => console.log('connected to db', 'DATABASE_URL'))
    .catch(err => console.error('conn err', err));

client.on('error', err => {
    console.error('\n ERR ERR ERR \n\n', err);
});

module.exports = client;