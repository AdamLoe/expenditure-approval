var knex = require("../helpers/knexfile.js");
var { checkUsername, checkPassword, checkName, checkApprover, checkApproveLimit } = require("../validators/userValidate");

exports.updateUser = function(req, res) {
	if (req.body.key === "username") {
		checkUsername(req, res, updateBasic);
	} else if (req.body.key === "password") {
		checkPassword(req, res, updatePassword);
	} else if (req.body.key === "name") {
		checkName(req, res, updateName);
	} else if (req.body.key === "approverid") {
		checkApprover(req, res, updateApprover);
	} else if (req.body.key === "approvelimit") {
		checkApproveLimit(req, res, updateBasic);
	}
};

//Simply update value
var updateBasic = function(req, res) {
	knex("users").update({
		[req.body.key]: req.body.value
	}).where({
		username: req.params.id
	})
		.then(function(data) {
			res.status(200).json({
				data: data
			});
		})
		.catch(function(err) {
			console.log("Database update failed.", err);
			res.status(200).json({
				data: 0,
				message: err.message
			});
		});
};

//Update Basic + update last password update
var updatePassword = function(req, res) {
	knex("users").update({
		password: req.body.value,
		passwordUpdate: knex.fn.now()
	}).where({
		username: req.params.id
	})
		.then(function(data) {
			res.status(200).json({
				data: data
			});
		})
		.catch(function(err) {
			console.log("Database update failed.", err);
			res.status(200).json({
				data: 0,
				message: err.message
			});
		});
};

//Update Basic + update all references to this users name in all requests/users
//Update filters because of name change
var { updateFilters } = require("../helpers/userIndex.js");
var updateName = function(req, res) {

};

//UpdateBasic + also get approver's name w/ given id, and update both
var updateApprover = function(req, res) {
	knex("users")
		.where({ id: req.params.id })
		.select("name")
		.first()
		.then(function(data) {
			console.log("Got approver", data);

		});
};
