/*
 express.js
 ------------
 Very basic express server
 Idea is to map express to our lambda function
 */

console.log('Server listening on port 2002');
var express = require("express");
var app = express();


var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//On lambda callback, map either to correct status, and data to send
var callback = function(err, data) {
	console.log('got callback', err, data);
	res = this.res;
	if (err) {
		res.status(err.statusCode).send(err.body);
	}  else {
		res.status(data.statusCode).send(data.body);
	}
};

app.use(express.static('public', {dotfiles:'allow'}));
//Populate our fake event
//Bind our res to our callback

var { handler } = require("./index");
app.use('/api', function(req, res, next) {
	console.log("New Express Callback to ", req.path);
	var body = req.body;
	var auth = req.headers.authorization;
	var event = {
		path: req.path,
		headers: {
			Authorization: auth
		},
		body: req.body
	};
	var context = {};
	handler(event, context, callback.bind({res:res}));
});


console.log('Server listening on port 2002');
var http  = require("http");
http.createServer(app).listen(2002);

/*



console.log('App started');

//DELETE THIS


//HTTPS REDIRECT
app.use( function (req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('localhost:80/' + req.url);
    }
});


//If the webApp is using the api
//var routes = require('./routes');


//Otherwise, just give them the client webApp
//app.use('*', function(req,res){
//    res.sendFile('../client/public/dist/index.html');
//});



var fs = require('fs');
var privateKey = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/cert.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/chain.pem', 'utf8');
var options = {key: privateKey, cert: certificate, ca: ca};
var https = require('https');
https.createServer(options, app).listen(443);
*/
