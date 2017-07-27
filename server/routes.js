var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('./knexfile.js');

router.use( function(req, res, next) {
    var username = req.params.username;
    var password = req.params.password;
    var username = 'steve';
    var password = 'bettyy';
    knex('users').where( {username}).first()
        .then(function(user) {
            if (!user) {
                res.send('Username Not Found.');
                console.log('Username Not Found.');
            } else if (user.password == password) {
                console.log('User successfully logged in.');
                user.password = '';
                req.user = user;
                console.log(req.user);
                next();
            }
            else {
                res.send('Wrong Password.');
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