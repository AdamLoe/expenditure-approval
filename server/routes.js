var express = require('express');
var router = express.Router();
var { authenticate, login, authAdmin, authRequester, authApprover, authActive } = require('./auth.js');
var { query, comment, createRequest } = require('./requestController');
var { userList, updateUser, makeUser, deactivateUser, activateUser } = require('./userController');
var { checkUserListParams, checkUpdateUser, checkMakeUser } = require('./userValidate');

//User has to be logged in
router.use(authenticate);
//User has to be activated
router.use(authActive);

//If we are just logging in, send our users info & filters
router.get('/login', login);

router.get('/requests/:status/:property/:approver/:period', query);
router.post('/requests/:id', authApprover, comment);
router.post('/requests/', authRequester, createRequest);

//Only Admins Past Here
router.use(authAdmin);

//No parameters, sends whole user list
router.get('/users/:type/:status', checkUserListParams, userList);

//Check if parameters are valid, then make changes on database
router.post('/users/:username', checkUpdateUser, updateUser);
router.post('/users/', checkMakeUser, makeUser);
router.delete('/users/:username/true', deactivateUser);
router.delete('/users/:username/false', activateUser);

module.exports = router;