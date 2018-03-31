var knex = require("./knexfile.js");


var getFilters = function(event, callback) {
	knex("users")
		.select("id", "name", "type", "status")
		.then(function(data) {
			console.log("Got user filters", data);
			callback(null, {
				token: event.token,
				filters: data
			});
		})
		.catch(function(err) {
			console.log("Error getting user filters", err);
			callback("Error getting user fitlers");
		});
};

function genToken(length){
	//edit the token allowed characters
	var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
	var b = [];
	for (var i=0; i<length; i++) {
		var j = (Math.random() * (a.length-1)).toFixed(0);
		b[i] = a[j];
	}
	return b.join("");
}

var createToken = function(event, callback) {
	event.token = genToken(64);
	knex("users")
		.where({ username: event.body.usr })
		.update({ access_token: event.token, token_expir: null})
		.then(function(data) {
			console.log("Access token created", event.token);
			getFilters(event, callback);
		})
		.catch(function(err) {
			console.log("Failed making access token", err);
			callback("Failed making access token");
		});
};

exports.login = function(event, callback) {
	knex("users").where({ username: event.body.usr, status: true }).first()
		.then(function(user) {
			if (!user) {
				callback("Username doesnt exist or deleted");
			} else if (user.password === event.body.pas){
				createToken(event, callback);
			} else {
				callback("Password not right");
			}
		})
		.catch(function(err) {
			console.log("Database login fail", err);
			callback("Database login fail");
		});

};


