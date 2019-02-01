/*
 express.js
 ------------
 Very basic express server
 Idea is to map express to our lambda function
 */

console.log("Server listening on port 2002");
let express = require("express");
let app = express();


let cors = require("cors");
app.use(cors());

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//On lambda callback, map either to correct status, and data to send
let callback = function(err, data) {
	let res = this.res;
	if (err) {
		res.status(err.statusCode).send(err.body);
	}  else {
		res.status(data.statusCode).send(data.body);
	}
};


app.use(express.static("../client/public/images", {dotfiles:"allow"}));
//Populate our fake event
//Bind our res to our callback

let { handler } = require("./index");

app.use("/api", function(req, res, next) {
	let body = req.body;
	let path = req.path;
	let auth = req.headers.authorization;
	let event = {
		headers: {
			Authorization: auth
		},
		path,
		body
	};
	let context = {};
	handler(event, context, callback.bind({res:res}));
});


console.log("Server listening on port 2002");
let http  = require("http");
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
//let routes = require('./routes');


//Otherwise, just give them the client webApp
//app.use('*', function(req,res){
//    res.sendFile('../client/public/dist/index.html');
//});



let fs = require('fs');
let privateKey = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/privkey.pem', 'utf8');
let certificate = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/cert.pem', 'utf8');
let ca = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/chain.pem', 'utf8');
let options = {key: privateKey, cert: certificate, ca: ca};
let https = require('https');
https.createServer(options, app).listen(443);
*/
