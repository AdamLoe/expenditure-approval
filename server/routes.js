var express = require('express');
var router = express.Router();
var { authenticate, login, authenticateAdmin } = require('./auth.js');
var { query, comment, request } = require('./requestController');
var { userList, editUser, makeUser, removeUser } = require('./userController');

//Only normal accounts past here
router.use(authenticate);
//If we are just logging in, send our users info & filters
router.get('/login', login);
//Our 3 Request Routes
router.get('/requests/:param1/:param2/:param3/:param4/:param5', query);
router.post('/requests/:id/:responseBool/:response', comment);
router.post('/requests/', request);

//Only Admins Past Here
router.use(authenticateAdmin);
//Our 3 User Routes
router.get('/users/:param1/:param2/:param3/:param4/:param5', userList);
router.post('/users/:id', editUser);
router.post('/users/', makeUser);
router.delete('/users/id', removeUser);

module.exports = router;

/*

 res.send( {
 username:     user.username,
 name:         user.name,
 type:         user.type,
 nextapprover: user.nextapprover,
 approvelimit: user.approvelimit
 }
 );

 .where({
 username: req.params.username,
 password: req.params.password
 }).

 */