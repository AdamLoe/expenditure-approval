var { createRouter } = require("./router");

module.exports = function(event, callback) {
	var router = createRouter(event, callback);

	var { myRequests, queryRequest } = require("./requestControllers/queryController");
	var { commentRequest } = require("./requestControllers/commentController");
	var { createRequest } = require("./requestControllers/createController");
	var { queryUser } = require("./userControllers/queryUser");
	var { createUser } = require("./userControllers/createUser");
	var { updateUser } = require("./userControllers/updateUser");
	router.use("/myrequests", myRequests);
	router.use("/requests/query", queryRequest);
	router.use("/requests/comment", commentRequest);
	router.use("/requests/create", createRequest);
	router.admin("/users/query", queryUser);
	router.admin("/users/create", createUser);
	router.admin("/users/update", updateUser);

	router.use("/", function(event, callback) {
		callback("Route Not Found", null);
	});
};