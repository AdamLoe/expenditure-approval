var express = require('express');
var router = express.Router();

var knex = require('./knexfile.js');

var home    = require('./routes/home');
var admin   = require('./routes/admin');
var profile = require('./routes/profile');
var login   = require('./routes/login');


router.get('/params/:username/:password', function(req, res) {
    console.log(req.params);
    console.log('/ Hit');
    res.send('/ page');
});

router.post('/login', function(req,res) {
    var username = req.params.username;
    var password = req.params.password;
    console.log('Login Hit', req.params);
    console.log('Login', username, password);
    console.log(req);
    knex('users').where('username',username)
        .then(function(data) {
            console.log(data);
            res.send(data);
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
    res.send('/');
});


router.get('/a', function(req, res) {
    res.send('a');
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
