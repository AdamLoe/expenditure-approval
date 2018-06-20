var knex = require("../helpers/knexfile");
var { getTime } = require("../helpers/time.js");
var errorCallback = require('../helpers/errorCallback');

//Searches Database with filters, returns requests objects
exports.submitComment = async function (event, callback) {
	let { id, comment } = event.body;
	console.log('Submit Comment', id, comment);

	knex("requests")
		.where("requestid", id)
		.first()
		.then(function({ comments }) {

			comments.push( [getTime(), comment, event.user.fullname] );

			knex("requests")
				.where({
					requestid: id
				})
				.update({
					comments: comments
				})
				.then(function(res) {
					console.log('Updating comments worked', res);

					callback(null, {
						"statusCode": 200,
						"body": JSON.stringify({})
					});

				})
				.catch(function(err) {
					errorCallback(callback, 500, "Error adding Submitting comment", err);
				})

		})
		.catch(function(err) {
			errorCallback(callback, 500, "Error Getting Old Comments", err);
		});
};