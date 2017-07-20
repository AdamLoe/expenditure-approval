var express = require('express');
var app = express();

var home    = require('./routes/home');
var admin   = require('./routes/admin');
var profile = require('./routes/profile');
var login   = require('./routes/login');

//Since we're serving app on cdn (github pages)
var cors = require('cors');
app.use(cors());

app.use('/', home);

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


//Serve All Files in /public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
console.log('Now serving' + __dirname + 'public');


app.listen( process.env.PORT || 80 );
console.log('Now Serving', process.env.PORT || 80 );

/*

 var passport = require('passport');
 var LocalStrategy = require('passport-local').Strategy;

 passport.use(new LocalStrategy(
 function(username, password, done) {
 User.findOne({ username: username }, function (err, user) {
 if (err) { return done(err); }
 if (!user) {
 return done(null, false, { message: 'Incorrect username.' });
 }
 if (!user.validPassword(password)) {
 return done(null, false, { message: 'Incorrect password.' });
 }
 return done(null, user);
 });
 }
 ));

 app.post('/login',
 passport.authenticate('local', { successRedirect: '/',
 failureRedirect: '/login',
 failureFlash: true })
 );



var isLoggedIn = false;
 app.use(function(req, res, next) {

 next();
 });

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


 */