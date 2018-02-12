var express = require('express');
var router = express.Router();

//User has to be logged in
var { authenticate} = require('./helpers/auth.js');
router.use(authenticate);

//We send the user a database of all the users
var { sendUserIndex } = require('./helpers/userIndex.js');
router.get('/login', sendUserIndex);

var { query, myRequests} = require('./requestControllers/queryController');
router.post('/query', query);
router.get('/myrequests', myRequests);

var { comment } = require('./requestControllers/commentController');
var { checkApprover, checkRequester, checkAdmin } = require('./helpers/checkType');
router.post('/requests/:id', checkApprover, comment);

var { createRequest } = require('./requestControllers/createController');
router.post('/requests/', checkRequester, createRequest);

//Only Admins Past Here, tho technically only a malicious user could get here anyways, they would have to have
//Authentication but be purposefully trying to mess up things out of their control

//WHole Idea Behind This System rm
//Approvers  - Views All Requests, Approves/Rejects Requests, Comments on Request,
//Requesters - Views THEIR requests, Submits Requests, Can Cancel Pending Request?
//Admin      - Views ALL Users, Edits All Users, Creates New Users, Can Make Users Inactive? Dont wanna add something that a
//malicious user could affect.
router.use(checkAdmin);

//No parameters, sends whole user list
var { userList } = require('./userControllers/queryController');
router.get('/users/:type', userList);

//Check if values being inputted are valid
var { updateUser } = require('./userControllers/updateController');
router.post('/users/:id', updateUser);

var { createUser } = require('./userControllers/createController');
router.post('/users/', createUser);

//Check if the user is already somebody's approver.
var { deactivateUser, activateUser } = require('./userControllers/statusController');
router.delete('/users/:username/true',  deactivateUser);
router.delete('/users/:username/false', activateUser);

module.exports = router;
