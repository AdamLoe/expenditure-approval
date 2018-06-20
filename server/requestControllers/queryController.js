var knex = require("../helpers/knexfile");


//Searches Database with filters, returns requests objects
exports.queryRequest = function (event, callback) {
	console.log("Query Requests Called", event.body);
	console.log("perPage", event.body.perPage, " offset", event.body.perPage * (event.body.page - 1));

	let filters = {
		status: event.body.status
	};

	if (event.body.requesterId !== -1 && event.body.requesterId !== "-1") {
		filters.requesterid = event.body.requesterId;
	}
	if (event.body.approverId !== -1 && event.body.approverId !== "-1") {
		filters.approverid = event.body.approverId;
	}

	console.log("Using filters", filters);
	knex("requests")
		.where(filters)
		.limit(event.body.perPage)
		.offset(event.body.perPage * (event.body.page - 1))
		.orderBy("createdate", "desc")
		.then(function(data) {
			console.log(data);
			callback(null, {
				"statusCode": 200,
				"body": JSON.stringify(data)
			});
		})
		.catch(function(err){
			console.log("Database query requests failed.", err);
			callback(err);
		});
};

//Searches Database with filters, returns requests objects
exports.myRequests = function (event, callback) {
	console.log("My Requests Called for", event.user.username);

	knex("requests")
		.where({
			requesterid: event.user.id
		})
		.limit(30)
		.orderBy("updatedate", "desc")
		.then(function(data) {
			console.log("Got myrequests data", data);
			var response = {
				"statusCode": 200,
				"body": JSON.stringify(data)
			};
			callback(null, response);
		})
		.catch(function(err){
			console.log("Database query requests failed.", err.message);
			callback(err);
		});
};