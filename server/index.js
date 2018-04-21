/*
 index.js
 ------------
 We pass 3 objects
 event, see defaultEvent.js
 context, empty
 callback, function(err, data) //one will be null
 -----------
 Login or auth into routes
 */

"use strict";

var routes = require("./routes");
var login = require("./auth/login");
var auth  = require("./auth/auth");

exports.handler = function(event, context, callback) {
	//Knex wont let event loop be empty, so we force pause application after callback
	context.callbackWaitsForEmptyEventLoop = false;
	//Api Gateway stringifies the body, but express doensnt
	if (typeof event === "string") {
		event.body = JSON.parse(event.body);
	}
	console.log("Got lambda function", event);



	//They either need to be logging in, or be authorized to use our routes.
	if (event.path === "/login") {
		login(event, callback);
	} else {
		auth(event, callback)
			.then(function() {
				routes(event, callback);
			})
			.catch(function(statusCode, err) {
				console.log(statusCode, "Error Authenticating, or uncaught ", err);
				callback({
					"statusCode": statusCode,
					"body": JSON.stringify({
						message: "Error authenticating or uncaught",
						err: err
					})
				});
			});
	}
};

process.on("unhandledRejection", (err) => {
	console.error('unhandledRejection', err);
	process.exit(1);
});
