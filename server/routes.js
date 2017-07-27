var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('./knexfile.js');

router.use( function(req, res) {
    var username = req.params.username;
    var password = req.params.password;
    var username = 'steve';
    var password = 'betty';
    knex('users').where( {username}).first()
        .then(function(user) {
            if (!user) {
                console.log('Username Not Found.');
            } else if (user.password == password) {
                console.log('finished query');
                console.log(user);
                res.send( {
                    username:     user.username,
                    name:         user.name,
                    type:         user.type,
                    nextapprover: user.nextapprover,
                    approvelimit: user.approvelimit
                    }
                );
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
