var knex = require('./knexfile.js');
var bcrypt = require('bcrypt');
var basicAuth = require('basic-auth');

exports.authenticate = function(req,res,next) {
    var {name , pass} = basicAuth.parse(req.headers.authorization);
    console.log('---------New Request------------');
    knex('users').where({ username: name }).first()
        .then(function(user) {
            if (!user) {
                console.log('Username not Found.');
                res.status(404);
                res.send('404');
            } else if (user.password == pass) {
                console.log(user.type, ' ' , user.username, ' successfully authenticated.');
                req.user = user;
                next();
            }
            else {
                console.log('Wrong Password.');
                res.status(404);
                res.send('404');
            }
        })
        .catch(function(err){
            console.log('Database query failed.');
            console.log(err);
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

var { getApprovers, getRequesters } = require('./userFilters.js');
exports.login = function(req,res) {
    var loginJson = {
        user: req.user,
        approvers: getApprovers,
        requesters: getRequesters,
    };
    res.send(loginJson);
    console.log(req.user.type, ' ' , req.user.username, ' successfully logged in.');
}

exports.authAdmin = function(req,res,next) {
    if (req.user.type === 'admin') {
        next();
    }
};

exports.authRequester = function(req, res, next) {
    if (req.user.type === 'requester') {
        next();
    }
};

exports.authApprover = function(req, res, next) {
    if (req.user.type === 'approver') {
        next();
    }
};

exports.authActive = function(req, res, next) {
    if (req.user.status) {
        next()
    }
    else {
        console.log(req.user.username, 'is not active');
        res.status('404').json({
            err: 'You are not active'
        })
    }
};

