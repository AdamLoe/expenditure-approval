"use strict";

var routes = require("./routes");
var {auth} = require("./helpers/auth");
var {login} = require("./helpers/login");

exports.handler = function(event, context, callback) {
	console.log("New Lambda Call ", event.path, " with authoization ", event.headers.Authorization);
	if (event.path === "/login") {
		login(event, callback);
	} else {
		auth(event)
			.then(function() {
				routes(event, callback);
			})
			.catch(function(err) {
				console.log("Top Level Error || ", err);
				callback(err, null);
			});
	}

};