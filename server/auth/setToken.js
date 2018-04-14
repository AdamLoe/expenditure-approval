var knex = require("../helpers/knexfile.js");

var genToken = (length) => {
	//edit the token allowed characters
	var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
	var b = [];
	for (var i=0; i<length; i++) {
		var j = (Math.random() * (a.length-1)).toFixed(0);
		b[i] = a[j];
	}
	return b.join("");
};

module.exports = (event, callback) => {
	return new Promise(resolve => {

		var token = genToken(64);
		knex("users")
			.where({ username: event.body.usr })
			.update({ access_token: token, token_expir: null})
			.then(function(data) {
				console.log("Access token created", token);
				resolve(token);
			})
			.catch(function(err) {
				console.log("Failed making access token", err);
				callback(null, {
					"statusCode": 500,
					"body": JSON.stringify({
						message: "failed making access token",
						err: err
					})
				});
			});

	});
};