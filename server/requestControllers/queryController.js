var knex = require("../helpers/knexfile");

let getCount = function(event, callback, filters) {
	return new Promise(function(resolve){


		knex("requests")
			.where(filters)
			.count()
			.then(function(data) {
				resolve(data[0].count);
			})
			.catch(function(err){
				console.log("Database count requests failed.", err);
				callback(err);
			})

	});
};

let getFilters = function(event) {
	let filters = {
		status: event.body.status
	};

	if (event.body.requesterId !== -1 && event.body.requesterId !== "-1") {
		filters.requesterid = event.body.requesterId;
	}
	if (event.body.approverId !== -1 && event.body.approverId !== "-1") {
		filters.approverid = event.body.approverId;
	}
	return filters;
};

//Searches Database with filters, returns requests objects
exports.queryRequest = async function (event, callback) {
	console.log("Query Requests Called", event.body);

	let filters = getFilters(event);

	let count = null;
	if (event.body.page === 1 || event.body.page === "1") {
		count = await getCount(event, callback, filters);
	}

	console.log("Using filters", filters);
	knex("requests")
		.where(filters)
		.limit(event.body.perPage)
		.offset(event.body.perPage * (event.body.page - 1))
		.orderBy("createdate", "desc")
		.then(function(data) {
			callback(null, {
				"statusCode": 200,
				headers: {
					'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
					'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
					"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
					"Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
				},
				"body": JSON.stringify({
					array: data,
					count: count
				})
			});
		})
		.catch(function(err){
			console.log("Database query requests failed.", err);
			callback(err);
		});
};
