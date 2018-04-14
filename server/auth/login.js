/*
	login.js
	-----------
	Get username & password from Body
	Check Password
	Generate Access Token
	Get User List for client (client uses the list for filtering and id reference)
	Callback
*/
var checkLogin = require('./checkLogin');
var setToken = require('./setToken');
var getFilters = require('./getFilters');
var loginResponse = require('./loginResponse');

module.exports = async (event, callback) => {
    try {
        var user    = await checkLogin(event, callback);
        var token   = await setToken(event, callback);
        var filters = await getFilters(event, callback);
        loginResponse(user, token, filters, callback);
    }
    catch (err) {
        console.log('Error logging in', err);
        callback(err);
	}
};
