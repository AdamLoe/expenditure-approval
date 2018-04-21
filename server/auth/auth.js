/*
	auth.js
	------------
	We pass our username and access_token in our basic-auth headers
	From there we check if our access_token is valid and timely
 */

var knex = require("../helpers/knexfile.js");

var basicAuth = require("basic-auth");
var errorCallback = require('../helpers/errorCallback');

module.exports = (event, callback) => {
	return new Promise ((resolve) => {

		//Make sure headers exist
		if (!event.headers.Authorization) {
			errorCallback(callback, 401, "Headers not present");
		} else {

			//Parse our basic-auth headers
			//Check database for token authorization
			let { name, pass } = basicAuth.parse(event.headers.Authorization);
			console.log(basicAuth.parse(event.headers.Authorization));
			let token = pass; // Because we are really passing a token

			console.log("token", token);
			knex("users")
				.select("id", "username", "access_token", "approverid", "token_expir", "type")
				.where("username", name)
				.where("status", true)
				.whereRaw("token_expir < CURRENT_TIMESTAMP")
				.first()
				.then(function(user) {
					console.log("trying to auth user", user);
					console.log('usr', user.access_token);
					console.log('tok', token);
					if (!user) {
						console.log('no username found matching');
						errorCallback(callback, 403, "Username not found or Token Expired or Token Wrong");
					} else if (user.access_token === token) {
						console.log(user.type, user.username, " successfully authenticated");
						event.user = user;
						resolve(200, "it worked");
					} else {
						console.log('Access token not correct');
						errorCallback(callback, 403, "Access_token not right");
					}
				})
				.catch(function(err) {
					errorCallback(callback, 500, "Database query failed", err);
				});
		}
	});
};
