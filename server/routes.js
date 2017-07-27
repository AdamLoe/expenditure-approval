var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('./knexfile.js');

router.use( function(req, res, next) {
    var username = req.params.username;
    var password = req.params.password;
    var username = 'steve';
    var password = 'betty';
    knex('users').where( {username}).first()
        .then(function(user) {
            if (!user) {
                console.log('Username: ', user.username, ' not Found.');
            } else if (user.password == password) {
                console.log('Username: ', user.username, ' successfully logged in.');
                user.password = '';
                req.user = user;
                next();
            }
            else {
                console.log('Wrong Password.');
            }
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })

});

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


 */