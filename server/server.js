var express = require('express');
var app = express();

var home    = require('./routes/home');
var admin   = require('./routes/admin');
var profile = require('./routes/profile');
var login   = require('./routes/login');

//Since we're serving app on cdn (github pages)
var cors = require('cors');
app.use(cors());


var isLoggedIn = false;
/*
app.use(function(req, res, next) {

    next();
});
*/
if (isLoggedIn === true) {
    console.log('A logged in user just requested site');
    app.use('/home*', home);
    app.use('/admin*', admin);
    app.use('/profile*', profile);
}
else {
    console.log('A non logged in user accessed site');
    app.use('/login', login);
}

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

app.listen( process.env.PORT || 7778 );
console.log('Now Serving', process.env.PORT || 7777 );

