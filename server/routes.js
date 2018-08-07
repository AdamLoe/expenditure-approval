/*
 routes.js
 -----------------
 Lists all the different paths, and what functions to route to
 Uses custom router mimicked after express.js
*/

let { createRouter } = require("./router");
let { queryRequest } = require("./requestControllers/queryController");
let { createRequest } = require("./requestControllers/createController");
let { queryUser } = require("./userControllers/queryUser");
let { createUser } = require("./userControllers/createUser");
let { updateUser } = require("./userControllers/updateUser");
let { approveRequest, rejectRequest } = require("./requestControllers/updateController");
let { submitComment } = require("./requestControllers/commentController");

let { dailyEmails } = require("./helpers/dailyEmails.js");
let { updateEmail } = require("./settings/updateEmail.js");
let { updatePassword } = require("./settings/updatePassword.js");


module.exports = (event, callback) => {
	console.log("Router called to ", event.path);
	let router = createRouter(event, callback);

	router.use("/requests/query", queryRequest);
	router.use("/requests/comment", submitComment);
	router.use("/requests/approve", approveRequest);
	router.use("/requests/reject", rejectRequest);
	router.use("/requests/create", createRequest);

	router.use("./settings/address", updateEmail);
	router.use("./settings/password", updatePassword);
	router.use("/dailyemails", dailyEmails);

	router.admin("/users/query", queryUser);
	router.admin("/users/create", createUser);
	router.admin("/users/update", updateUser);

	router.use("/", function(event, callback) {
		console.log("Route not found");
		callback({
			"statusCode": 404,
			"body": JSON.stringify({
				message: "Route Not Found"
			})
		});
	});
};

