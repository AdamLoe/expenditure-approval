// use has two params, one is a array of values/functions that return true
// or false, telling us to use or not, 2nd is what to use
var use = require('./helpers/router');
var event.authenticated = false;
var { successCall, loginFailCall } = require('./helpers/defaultCallbacks');

use([true], authenticate);
if (event.authenticate != 'pass') {
  return failCallback;
}
use([isPath('/users/:type'), checkAdmin()], userList());
use([isPath('/users/:id'), checkRequester()], )
// ##############################################
//             Authentication
// ##############################################
// login & token handling
// Also populates event.user with
var { authenticate } = require('./helpers/auth');

// info needed once per session, if they have a key, they should have this info
//var { sendLoginInfo } = require('./helpers/loginInfo.js');

//Some paths should only be available to certain user classes
var { checkAdmin, checkApprover, checkRequester } = require('./helpers/checkType');

// #############################################
//                  Requests
// #############################################

var { query, myRequests } = require('./requestControllers/queryController');
// Approvers should be able to query all requests
var { comment } = require('./requestControllers/commentController');
// Requesters should be
var { createRequest } = require('./requestControllers/createController');


// ##############################################
//                    Users
// ##############################################
var { userList } = require('./userControllers/queryController');

// var { editUser } = require('./userControllers/editControlller');

var { createUser } = require('./userControllers/createController');

var { deactivateUser, activateUser } = require('./userControllers/statusController');
