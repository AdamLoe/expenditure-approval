var knex = require("../helpers/knexfile.js");

module.exports = (event, callback) => {
	return new Promise(resolve => {


		knex("users")
			.select("id", "name", "type", "status")
			.then(function (data) {
				console.log("Got user filters");
				resolve(data);
			})
			.catch(function (err) {
				console.log("Error getting user filters", err);
				callback(null, {
					"statusCode": 500,
					"body": JSON.stringify({
						message: "Error getting user filters",
						err: err
					})
				});
			});

	});
};