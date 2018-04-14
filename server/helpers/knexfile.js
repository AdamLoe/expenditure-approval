var config = {
	client: "postgresql",
	connection: {
		host: "postgres.cmhslq3dvaoe.us-east-1.rds.amazonaws.com",
		port: 5432,
		database: "standard_db",
		user:     "adam",
		password: "aBV=qwer123423"
	},
	pool: {
		min: 1,
		max: 2
	},
    acquireConnectionTimeout: 3000
};

module.exports = require("knex")(config);