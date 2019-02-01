/*
	login.js
	-----------
	Get username & password from Body
	Check Password
	Generate Access Token
	Get User List for client (client uses the list for filtering and id reference)
	Callback
*/
let checkLogin = require("./checkLogin");
let setToken = require("./setToken");
let getFilters = require("./getFilters");
let loginResponse = require("./loginResponse");

module.exports = async (event, callback) => {
	try {
		let user    = await checkLogin(event, callback);
		let token   = await setToken(event, callback);
		let filters = await getFilters(event, callback);
		loginResponse(user, token, filters, callback);
	}
	catch (err) {
		console.log("Error logging in", err);
		callback(err);
	}
};
