"use strict";

var server = require("./server.js");

exports.handler = (event, context, callback) => {
	event = server(event, context, callback);
	callback(null, event.response);

	console.log("callback failed, index.js");
	callback("callback failed, index.js");
};
