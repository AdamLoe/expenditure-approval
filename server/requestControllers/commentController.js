var knex = require("../helpers/knexfile.js");

//Add comment to history, change lastEditDate
//Does user have power to finalize request? Move to Approved/Rejected. Change Status
//If not, change nextApprover to user's next Approver.
exports.comment  = function (req, res) {
	console.log("Comment function Hit");
};