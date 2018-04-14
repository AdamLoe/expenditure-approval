var knex = require("../helpers/knexfile.js");


module.exports = (event, callback) => {
	return new Promise( resolve => {

		console.log("login called", event.body);
		knex("users").where({ username: event.body.usr, status: true }).first()
			.then(function(user) {
				if (!user) {
					callback(null, {
						"statusCode": 403,
						"body": "{\"message\":\"Username doesnt exist or deleted\"}"
					});
				} else if (user.password === event.body.pas){
					resolve(user);
				} else {
					callback(null,  {
						"statusCode": 403,
						"body": "{\"message\":\"Password not right\"}"
					});
				}
			})
			.catch(function(err) {
				console.log("Database login fail", err);
				callback(null, {
					"statusCode": 500,
					"body": JSON.stringify({
						message: "Database login fail",
						err: err
					})
				});
			});

	});
};

