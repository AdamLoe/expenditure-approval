var knex = require("../helpers/knexfile.js");

//Searches Database with filters, returns requests objects
exports.queryRequest = function (event, callback) {
	console.log("Query Requests Called", event.body);
	console.log("perPage", event.body.perPage, " offset", event.body.perPage * (event.body.page - 1));
	knex("requests")
		.where(event.body.filters)
		.limit(event.body.perPage)
		.offset(event.body.perPage * (req.body.page - 1))
		.orderBy("createdate", "desc")
		.then(function(data) {
			res.send(data);
		})
		.catch(function(err){
			console.log("Database query requests failed.", err);
			res.status(500).json({
				error: true,
				data: {
					message: err.message
				}
			});
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
			console.log('Got My Requests', data);
			callback(null , data);
		})
		.catch(function(err){
			console.log("Database query requests failed.", err.message);
			callback(err.message);
		});
};