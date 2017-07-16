/**
 * Created by Adam on 7/11/2017.
 */
var pg = require('knex')({
    client: 'pg',
    searchPath: 'knex,public',
    debug: true,
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'adam'
    }
});


var express = require('express');
var app = express();

var path = require('path');

var helpers = require('./helpers');
var routes = require('./routes');

var cors = require('cors');
app.use(cors());

app.get('/', function (req,res) {
    console.log('Hey i did a thing.');
    res.send( 'HiYa there8');
});
console.log('Now Serving /');

app.get('/home*', function (req,res) {
    helpers.catchErrors( res.send( 'Home Page, aka your request feed.') );
});

app.get('/profile/*', function (req,res) {
    res.send( 'Look at your or other profiles');
});

app.get('/register', function (req,res) {
    res.send( 'Register Here');
});

app.get('/history/*', function (req,res) {
    res.send( 'Look up history of users here');
});

app.get('/admin', function (req,res) {
    res.send( 'Admin Panel Here');
});

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






app.use(express.static(path.join(__dirname, 'public')));
console.log('Now serving /public');

app.listen( process.env.PORT || 7778 );

console.log('Now Serving', process.env.PORT || 7777 );
