// Initiate Express
var express = require('express');
var app = express();

app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://standardrequests.com' + req.url);
}});

//MiddleWare
var cors = require('cors');
app.use(cors());
var session = require('express-session');
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Do they want static file?
app.use(express.static('public', {dotfiles:'allow'}));
//Are they pinging requests server?
var routes = require('./routes');
app.use('/api/*', routes);
//Otherwise, just give them the client webApp
app.use('*', function(req,res){
    res.sendFile('/home/adam/standard-requests/public/dist/index.html');
});


var fs = require('fs');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/cert.pem', 'utf8');
var ca          = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/chain.pem', 'utf8');
var options = {key: privateKey, cert: certificate, ca: ca};
var http  = require('http');
var https = require('https');
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

/*

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
