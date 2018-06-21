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

exports.handler = function(event, context, originalCallback) {

	// If we are using lambda, we need to parse the body, if we arent, it will fail
	if (context === {}) {
		event.body = JSON.parse(event.body);
	}

	console.log('event', event);
	//Knex wont let event loop be empty, so we force pause application after callback
	context.callbackWaitsForEmptyEventLoop = false;
	//Api Gateway stringifies the body, but express doensnt
	if (typeof event === "string") {
		event.body = JSON.parse(event.body);
	}
	//console.log("Got lambda function", event);

	let callback = (err, response) => {
		originalCallback(err, {
			...response,
			headers: {
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
				"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				"Access-Control-Allow-Origin": "*", // Required for CORS support to work
				"Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
			}
		});
	};

	//They either need to be logging in, or be authorized to use our routes.
	if (event.path === "/login") {
		login(event, callback);
	} else {
		auth(event, callback)
			.then(function() {
				routes(event, callback);
			});
	}
};

process.on("unhandledRejection", (err) => {
	console.error("unhandledRejection", err);
	process.exit(1);
});
