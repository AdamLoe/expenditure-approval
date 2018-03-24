var knex = require("../helpers/knexfile.js");
var { updateFilters } = require("../helpers/userIndex.js");

exports.deactivateUser = function (req, res) {
	console.log("Deactivate User function Hit");
	knex("users").update({
		status: false
	}).where({
		username: req.params.username
	})
		.then(function(data) {
			console.log(data);
			res.status(200).json({
				data: data
			});
			updateFilters(req, res);
		})
		.catch(function(err){
			console.log("Database Failed at Deactivating User.");
			res.status(500).json({
				error: true,
				data: {
					message: err.message
				}
			});
		});
};


//If user is still connected, SEND ERROR DANGER MESSAGE
//Otherwise, move to deleted pile
exports.activateUser = function (req, res) {
	console.log("ActivateUser function Hit");
	knex("users").update({
		status: true
	}).where({
		username: req.params.username
	})
		.then(function(data) {
			console.log(data);
			res.status(200).json({
				data: data
			});
			updateFilters(req, res);
		})
		.catch(function(err){
			console.log("Database Failed at Sctivating User.");
			res.status(500).json({
				error: true,
				data: {
					message: err.message
				}
			});
		});
};
