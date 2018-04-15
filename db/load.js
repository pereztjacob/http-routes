const client = require('../lib/db-client');

const categories = ['florists'];

const categoryPromises = categories.map(category => {
    return client.query(
        `INSERT INTO categories(name)
        VALUES($1)
        ON CONFLIST DO NOTHING;`,
        [category]
    );
});

Promise.all(categoryPromises)
    .then(() => {
        return client.query(
            'SELECT * FORM categories'
        );
    }).then(result => {
        console.log(result.rows);
    }).then(
        () => console.log('LOADED'),
        err => console.error(err)
    ).then(() => {
        client.end();
    });