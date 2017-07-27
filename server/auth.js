var knex = require('./knexfile.js');
var bcrypt = require('bcrypt');

exports.authenticate = function(req,res,next) {
    var username = req.query.username;
    var password = req.query.password;
    console.log(username, password);
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
};

exports.authenticateAdmin = function(req,res,next) {
    if (req.user.type == 'admin') {
        next();
    }
};
