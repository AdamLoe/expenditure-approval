var express = require('express');
var router = express.Router();
var { authenticate, isType } = require('./auth.js');
var { query, comment, request } = require('./requestController');
var { userList, editUser, makeUser, removeUser } = require('./userController');
router.use(authenticate);

router.get('/requests/', query);
router.post('/requests/:id', isType('approver'), comment);
router.create('/requests/',  isType('requester'), request);

router.get('/users',       isType('admin'), userList);
router.post('/users/:id',  isType('admin'), editUser);
router.create('/users',    isType('admin'), makeUser);
router.delete('/users/id', isType('admin'), removeUser);

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