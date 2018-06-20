let knex = require("../helpers/knexfile");
let { getTime } = require("../helpers/time.js");
let errorCallback = require('../helpers/errorCallback');

let checkCanApprove = require("./checkCanApprove");

exports.rejectRequest = function(event, callback) {
	updateRequest(event, callback, false);
};
exports.approveRequest = function(event, callback) {
	updateRequest(event, callback, true);
};

let updateRequest = async (event, callback, bool) => {
	console.log("Update Request Called", bool);

	let { id } = event.body;

	if (!checkCanApprove(event)) {
		errorCallback(callback, 403, "You Can't Approve That");
	} else {

		knex("requests")
			.where({ requestid: id })
			.first()
			.then((req) => {

				let newStatus;
				let newApproverId = req.approverid;
				let newComments = req.comments;

				if (bool) {

					newComments.push([getTime(), "Approved", event.user.fullname]);
					if (req.amount < event.user.approvelimit) {
						newApproverId = event.user.approverid;
						newStatus = "In Process"
					} else {
						newStatus = "Approved";
					}

				} else {

					newComments.push([getTime(), "Denied", event.user.fullname]);
					newStatus = "Denied"

				}



				knex("requests")
					.where({ requestid: id })
					.update({
						status: newStatus,
						approverid: newApproverId,
						comments: newComments
					})
					.then((data) => {
						console.log('Request ' + (bool? "Approved" : "Denied"));
						callback(null, {
							"statusCode": 200,
							"body": JSON.stringify({})
						});
					})
			})
			.catch((err) => {
				errorCallback(callback, 500, "Error finding that request");
			})

	}
};
