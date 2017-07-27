var home    = require('./routes/home');
var admin   = require('./routes/admin');
var profile = require('./routes/profile');
var login   = require('./routes/login');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('Home Hit');
    res.send('home page');
});

module.exports = router;


//Serve All Files in /public
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
console.log('Now serving' + __dirname + '/public');

