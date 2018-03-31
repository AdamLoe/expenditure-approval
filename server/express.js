var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var callback = function(err, data) {
	res = this.res;
	if (err) {
		res.status(500).json(err);
	}  else {
		res.status(200).json(data);
	}
};

var { handler } = require("./index");
app.use(function(req, res, next) {
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

//Static Files
//app.use(express.static('public', {dotfiles:'allow'}));

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