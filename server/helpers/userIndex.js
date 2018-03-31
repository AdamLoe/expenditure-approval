

exports.updateFilters = function(req, res) {
	getUserIndex("approver");
	getUserIndex("requester");
};

var getUserIndex = function(type) {
	knex("users").select(
		"id",
		"name"
	).where({
		type: type,
		status: "true"
	})  
		.then(function(data) {
			updateUserIndex(data, type + "s");
		})
		.catch(function(err){
			console.log("Updating", type, "went wrong, this is bad.", err);
		});
};


var updateUserIndex = function(data, type) {
	knex("filters").update({
		json: JSON.stringify(data)
	}).where({
		name: type
	})
		.catch(function(err){
			console.log("Updating", type, " went wrong, this is bad.", err);
		});
};

exports.sendUserIndex = function(req, res) {
	knex("filters")
		.then(function(data) {
			var loginJson = {
				user: req.user,
				filters: data
			};
			res.send(loginJson);
			console.log(req.user.type, " " , req.user.username, " successfully logged in.");
		})
		.catch(function(err){
			console.log("Getting Filters failed");
			res.status(500).json({
				error: true,
				data: err
			});
		});

};