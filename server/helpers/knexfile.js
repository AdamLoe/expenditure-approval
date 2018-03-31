var config = {
    client: "postgresql",
    connection: {
        host: "postgres.cmhslq3dvaoe.us-east-1.rds.amazonaws.com",
        database: "standard_db",
        user:     "adam",
        password: "aBV=qwer123423"
    },
    pool: {
        min: 2,
        max: 10
    }
};

var knex = require("knex")(config);

module.exports = knex;