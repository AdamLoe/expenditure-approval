var express = require('express');
var router = express.Router();

var knex = require('./knexfile.js');

var home    = require('./routes/home');
var admin   = require('./routes/admin');
var profile = require('./routes/profile');
var login   = require('./routes/login');

router.get('/params/:username/:password', function(req, res, next) {
    console.log(req.params);
    console.log('/ Hit');
    res.send('/ page');
});

router.get('/login/:username/:password/:token', function(req,res,next) {
    var username = req.params.username;
    var password = req.params.password;
    var token = req.params.token;
    console.log('Login Hit', req.params);
    res.send('Login page'+ username + password + token);
    knex('users').where('username',username)
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err){
            console.log('Login Error');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});

router.get('/', function(req, res) {
    res.send('../public/src/index.js');
});

router.get('/home', function(req,res) {
    knex.select().table('users')
        .then(function(collection){
            console.log('Home Hit');
            /*
            res.json({
                error: false,
                data: collection
            })
            */
        })
        .catch(function(err){
            console.log('Home Error');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
});

router.get('/profile*', function(req,res,next) {

});
router.get('/admin*', function(req,res,next) {

});

module.exports = router;
