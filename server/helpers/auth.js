var knex = require("./knexfile.js");
var basicAuth = require("basic-auth");
var bcrypt = require("bcrypt");

exports.auth = function(event) {
	return new Promise (function(resolve, reject) {
		//Timeout on token is 2 hours, thats it, then logout
		//If access token not valid, tell em to login

	    let headers = event.headers.Authorization;
	    console.log("auth headers", headers);
		let { name, pass } = basicAuth.parse(headers);
		knex("users")
			.select("id", "username", "access_token", "approverid")
			.where({ username: name, status: true })
			.first()
			.then(function(user) {
				if (!user) {
					console.log("Username not found");
					reject("Username not found");
				} else if (user.access_token === pass) {
					console.log(user.type, " ", user.username, " successfully authenticated");
					event.user = user;
					resolve("it worked");
				} else {
					console.log("Database query failed");
					reject("Database query failed");
				}
			})
			.catch(function(err) {
				console.log("Database query failed", err);
				reject(err.message);
			});

	});
};