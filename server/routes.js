var express = require('express');
var router = express.Router();
var { authenticate } = require('./auth.js');
var { query, comment, request } = require('./requestController');
var { userList, editUser, makeUser, removeUser } = require('./userController');
router.use(authenticate);

router.get('/requests/', query);
router.post('/requests/:id', comment);
router.create('/requests/',  request);

router.get('/users',       userList);
router.post('/users/:id',  editUser);
router.create('/users',    makeUser);
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