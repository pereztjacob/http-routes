const client = require('../lib/db-client');

const florists = [{ name:'Memphis' }, { name: 'New Orleans' }, { name: 'Plymouth' }];

const floristPromises = florists.map(florist => {
    return client.query(
        `INSERT INTO florists(name)
        VALUES($1)
        ON CONFLICT DO NOTHING;`,
        [florist]
    );
});

Promise.all(floristPromises)
    .then(() => {
        return client.query(
            'SELECT * FROM florists'
        );
    }).then(result => {
        console.log(result.rows);
    }).then(
        () => console.log('LOADED'),
        err => console.error(err)
    ).then(() => {
        client.end();
    });