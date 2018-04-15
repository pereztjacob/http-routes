const client = require('../lib/db-client');

client.query(`
    DROP TABLE florists;
`).then(
    () => console.log('deleted!'),
    err => console.error(err)
).then(() => {
    client.end();
});