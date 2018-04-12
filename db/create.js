const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS categories(
        id SERIAL PRIMARY KEY,
        name VARCHAR(55) UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS florists(
        id SERIAL PRIMARY KEY,
        name VARCHAR(55),
        category_id INTEGER NOT NULL REFERENCES categories(id)
    );
`).then(
    () => console.log('did it!'),
    err => console.error(err)
).then(() => client.end());