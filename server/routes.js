var express = require('express');
var router = express.Router();
var { authenticate, authenticateAdmin } = require('./auth.js');
var { query, comment, request } = require('./requestController');
var { userList, editUser, makeUser, removeUser } = require('./userController');

//Only normal accounts past here
router.use(authenticate);

//If we are just logging in, send our users info & filters
router.get('/login', function(req,res) {
    var loginJson = {
        user: req.user,
        filters: {
            color: 'red'
        }
    };
    res.send(loginJson);
});

//Our 3 Request Routes
router.get('/requests/', query);
router.post('/requests/:id', comment);
router.post('/requests/',    request);


//Only Admins Past Here
router.use(authenticateAdmin);
//Our 3 User Routes
router.get('/users',       userList);
router.post('/users/:id',  editUser);
router.post('/users',      makeUser);
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