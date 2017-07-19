var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('Home Hit');
    res.send('home page');
    next();
});

module.exports = router;

/*
router.get('/', function (req,res) {
    console.log('Hey i did a thing.');
    pg.select().from('adam').timeout(1000).then
    res.send( 'HiYa there8');
});
console.log('Now Serving /');

app.get('/knex')
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

 //Serve All Files in /public
 var path = require('path');
 app.use(express.static(path.join(__dirname, 'public')));
 console.log('Now serving /public');


 */
