var knex = require("../helpers/knexfile.js");
var { updateFilters } = require("../helpers/userIndex.js");

//Create new row in database with values
exports.createUser = function (event, callback) {
	console.log("MakeUser function Hit");
	knex("users").insert({
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		type: req.body.type,
		approver: req.body.approver,
		approvelimit: req.body.approvelimit,
		status: true
	})
		.then(function(data) {
			res.status(200).send(data);
			updateFilters(req, res);
		})
		.catch(function(err){
			console.log("Database query failed.");
			res.status(500).json({
				error: true,
				data: {
					message: err.message
				}
			});
		});
};