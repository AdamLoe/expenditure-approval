var knex = require("../helpers/knexfile");
var errorCallback = require('../helpers/errorCallback');

var checkCanApprove = require("./checkCanApprove");

let denyRequest = async (event, callback) => {
	callback(null, {
		"statusCode": 200,
		"body": JSON.stringify({})
	});
};

exports.rejectRequest = async function (event, callback) {
	console.log("Reject Request Called", event.body);

	await checkCanApprove(event, callback);
	await denyRequest(event, callback);
};