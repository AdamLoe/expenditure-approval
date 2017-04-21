var express = require('express');
var pg = require('pg');

var app = express(); // the main app



var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);



var birds = require('./birds');
app.use('/birds', birds);



app.get('/users/:userId/books/:bookId', function (req, res, next) {
    res.send(req.params);
    if (req.params.userId == 'adam') {
        next();
    }
});


var nextAchieved =  function (req, res) {
    console.log('next achieveda');
};
app.get('/users/:userId/books/:bookId', nextAchieved);



app.get('/', function (req, res) {
    var responseText = "<h1>memes</h1>";
    responseText += "<small>Requested at:" + req.requestTime + "</small>";

    res.send(responseText);
});



// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});






var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
});