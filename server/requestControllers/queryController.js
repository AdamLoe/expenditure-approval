let knex = require("../helpers/knexfile");

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
	let { status, requesterId, approverId } = event.body;

	let filters = {
		status: status,
        requesterid: requesterId,
   		approverid: approverId
	};

    for (let i in filters) {
        if (filters[i] === '-1' || filters[i] === -1 || filters[i] === undefined) {
            delete filters[i]
        }
    }
	return filters;
};

//Searches Database with filters, returns requests objects
exports.queryRequest = async function (event, callback) {
	console.log("Query Requests Called", event.body);

	let { perPage, pageNum } = event.body;

	let filters = getFilters(event);

	let count = null;
	if (event.body.page === 1 || event.body.page === "1") {
		count = await getCount(event, callback, filters);
	}

	console.log("Using filters", filters);
	knex("requests")
		.where(filters)
		.limit(event.body.perPage)
		.offset(event.body.perPage * (event.body.pageNum - 1))
		.orderBy("createdate", "desc")
		.then(function(data) {
			callback(null, {
				"statusCode": 200,
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
