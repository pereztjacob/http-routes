const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS florists(
        id SERIAL PRIMARY KEY,
        name VARCHAR(55),
        category VARCHAR(256)
    );
`).then(
    () => console.log('did it!'),
    err => console.error(err)
).then(() => client.end());