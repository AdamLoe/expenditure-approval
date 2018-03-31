"use strict";

var {auth, login} = require("./helpers/auth");
var routes = require("./routes");

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