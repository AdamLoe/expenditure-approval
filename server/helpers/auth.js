var knex = require("./knexfile.js");
var bcrypt = require("bcrypt");
var basicAuth = require("basic-auth");

exports.authenticate = function(req,res,next) {
	var {name , pass} = basicAuth.parse(req.headers.authorization);
	console.log("---------New Request------------");
	knex("users").where({ username: name, status: true }).first()
		.then(function(user) {
			if (!user) {
				console.log("Username not Found.");
				res.status(404);
				res.send("404");
			} else if (user.password === pass) {
				console.log(user.type, " " , user.username, " successfully authenticated.");
				user.password = "null";
				req.user = user;
				next();
			}
			else {
				console.log("Wrong Password.");
				res.status(404);
				res.send("404");
			}
		})
		.catch(function(err){
			console.log("Database query failed.");
			console.log(err);
			res.status(500).json({
				error: true,
				data: {
					message: err.message
				}
			});
		});
};

