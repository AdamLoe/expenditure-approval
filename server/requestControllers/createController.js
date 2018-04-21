var knex = require("../helpers/knexfile.js");
var { getTime } = require("../helpers/time.js");
var errorCallback = require('../helpers/errorCallback');

//Pipe all props to knex to create a object
exports.createRequest = function (event, callback) {
	console.log('callback', callback);
	console.log('user', event.user);
	var request = {
		requestname: event.body.name,
		status: "In Process",
		amount: event.body.amount,
		unitname: event.body.unitname,
		requesterid: event.user.id,
		approverid: Math.ceil(Math.random() * 4),
		attributes: event.body.attributes,
		comments: [[getTime(), "Created", event.user.name]]
	};


	console.log("Create Request function Hit", request);
	knex.transaction(function(trx) {
		return trx.into("requests")
			.insert(request)
			.then(function(data) {

				return knex("users")
					.transacting(trx)
					.update({
						approvelimit: 1002
					}).where({
						id: event.user.id
					});

			})
			.then(trx.commit)
			.catch(trx.rollback);
	})
		.then(function(data) {
			console.log("Transaction worked");
			callback({
				"statusCode": 200,
				"body": JSON.stringify({
					message: "It worked"
				})
			})
		})
		.catch(function(err){
			errorCallback(callback, 500, "Transaction Failed", err);
		});
};
