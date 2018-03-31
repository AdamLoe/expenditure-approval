var knex = require("./knexfile.js");
var basicAuth = require("basic-auth");
var bcrypt = require("bcrypt");

exports.auth = function(event) {
	return new Promise (function(resolve, reject) {
		//Timeout on token is 2 hours, thats it, then logout
		//If access token not valid, tell em to login

	    let headers = event.headers.Authorization;
		let { name, pass } = basicAuth.parse(headers);
		knex("users").where({ username: name, status: true }).first()
			.then(function(user) {
				if (!user) {
					console.log("Username not found");
					reject("Username not found");
				} else if (user.password === pass) {
					console.log(user.type+" "+user.username+" successfully authenticated");
					resolve();
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

exports.login = function(event, callback) {
	//Access token = 2 hours
	//Get username, password from body
	var usr = event.body.usr;
	knex("users").where({ username: name, status: true }).first()
		.then(function(user) {
			if (!user) {
				callback("Username not found");
			} else if (user.password === event.body.pas){
				event.body.pas = "?????";
				console.log(user.type+" "+user.username+" logged in");
				knex("users").where({ username: name }).update({ access_token: genToken(), token_expir:  })
			} else {
				callback("Password not right");
			}
		})
		.catch(function(err) {
			console.log("Database login fail", err);
			callback("Database login fail");
		});

};