var express = require('express');
var router = express.Router();
var { authenticate, login, authAdmin, authRequester, authApprover, authActive } = require('./auth.js');
var { query, myRequests, comment, createRequest } = require('./requestController');
var { userList, updateUser, makeUser, deactivateUser, activateUser } = require('./userController');
var { checkUpdateUser, checkMakeUser, checkDeactivateUser} = require('./userValidate');
var { checkComment, checkCreateRequest } = require('./requestValidate');

//User has to be logged in
router.use(authenticate);
//User has to be activated
router.use(authActive);

//If we are just logging in, send the users info & list of all approvers/requests
router.get('/login', login);

router.get('/requests/:status/:property/:approver/:period', query);
router.get('/myrequests', myRequests);
router.post('/requests/:id', authApprover, checkComment, comment);
router.post('/requests/', authRequester, checkCreateRequest, createRequest);

//Only Admins Past Here
router.use(authAdmin);

//No parameters, sends whole user list
router.get('/users/:type', userList);

//Check if values being inputted are valid
router.post('/users/:username', checkUpdateUser, updateUser);
router.post('/users/', checkMakeUser, makeUser);

//Check if the user is already somebody's approver.
router.delete('/users/:username/true', checkDeactivateUser, deactivateUser);
router.delete('/users/:username/false', activateUser);

module.exports = router;