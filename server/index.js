/*
 index.js
 ------------
 This is meant for a AWS lambda server
 So, 3 object, Event, Context(useless), Callback
 	Callback(err, data)
 	Callback(null, {
 		statusCode: 200,
 		headers: {},
 		"body": {}
 	})
	///Approved, Property, Item, Next, Amount
 */

"use strict";

let routes = require("./routes");
let login = require("./auth/login");
let auth = require("./auth/auth");

exports.handler = function(event, context, originalCallback) {
  //Knex wont let event loop be empty, so we force pause application after callback
  context.callbackWaitsForEmptyEventLoop = false;

  //Api Gateway stringifies the body, but express doensnt
  if (typeof event.body === "string") {
    event.body = JSON.parse(event.body);
  }

  //We hijack the lambda callback, and pass our custom one, so we can add headers
  let callback = (err, response) => {
    originalCallback(err, {
      ...response,
      headers: {
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
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
    auth(event, callback).then(function() {
      routes(event, callback);
    });
  }
};

//Forgot why, but lambda can have unhandled rejections, and we need to log them in case, google it
process.on("unhandledRejection", err => {
  console.error("unhandledRejection", err);
  process.exit(1);
});
