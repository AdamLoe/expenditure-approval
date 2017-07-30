var config = {
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',
        database: 'development',
        user:     'postgres',
        password: 'postgres'
    },
    pool: {
        min: 2,
        max: 10
    }
};

var knex = require('knex')(config);

module.exports = knex;