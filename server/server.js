var express = require('express');
var app = express();

var routes = require('./routes');
app.use(routes);

app.use(express.static('public', {dotfiles:'allow'}));

// If that above routes didnt work, we 404 them and forward to error handler
app.use( function(req, res, next) {
    console.log('Not Found!');
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//Chekcing database valdiation errors
app.use( function(err, req, res, next) {
    console.log('Database Check!');
    if (!err.errors) return next(err);
    // validation errors look like
    const errorKeys = Object.keys(err.errors);
    errorKeys.forEach(key => req.flash('error', err.errors[key].message));
    res.redirect('back');
});

var cors = require('cors');
app.use(cors());

var fs = require('fs');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/cert.pem', 'utf8');
var options = {key: privateKey, cert: certificate};
var https = require('https');
https.createServer(options, app).listen(443);
/*
 var bodyParser = require('body-parser');
 var cookieParser = require('cookie-parser')
 app.use(cookieParser())
 app.use(express.cookieParser('secret'));
 app.use(express.cookieSession());

 var session = require('express-session');
 app.use(session({
 secret: process.env.SECRET_KEY,
 resave: false,
 saveUninitialized: true
 }));

 var passport = require('passport');
 app.use(passport.initialize());
 app.use(passport.session());
 */
