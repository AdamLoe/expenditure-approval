var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('./knexfile.js');

router.use( function(req, res) {
    console.log(req);
    var username = req.params.username;
    var password = req.params.password;
    var username = 'adamloe';
    var password = 'booty';
    knex('users').where( {username}).first()
        .then(function(user) {
            if (!user) {
                console.log('Null User?');
            } else if (user.password == password) {
                console.log('finished query');
                console.log(user);
                res.send(user);
            }
            else {
                console.log('Wrong Pass');
            }
        })
        .catch(function(err){
            console.log('Username does not exist or Database isnt working');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })

});

module.exports = router;
