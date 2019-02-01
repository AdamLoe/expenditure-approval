let knex = require("../helpers/knexfile.js");

let genToken = (length) => {
	//edit the token allowed characters
	let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
	let b = [];
	for (let i=0; i<length; i++) {
		let j = (Math.random() * (a.length-1)).toFixed(0);
		b[i] = a[j];
	}
	return b.join("");
};

module.exports = (event, callback) => {
	return new Promise(resolve => {

		let token = genToken(64);
		knex("users")
			.where({ username: event.body.usr })
			.update("access_token", token)
			.update("token_expir", null)
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