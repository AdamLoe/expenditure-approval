var pg = require('knex')({
    client: 'pg',
    searchPath: 'knex,public',
    debug: true,
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'postgres'
    }
});

var Promise = require('bluebird');