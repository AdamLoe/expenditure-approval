var knex = require("./knexfile.js");
var basicAuth = require("basic-auth");
var bcrypt = require("bcrypt");

module.exports = function(event) {
    return new Promise (function(resolve, reject) {

        let headers = event.headers.Authorization;
        let { name, pass } = basicAuth.parse(headers);
        knex("users").where({ username: name, status: true }).first()
            .then(function(user) {
                if (!user) {
                    console.log("Username not found");
                    reject("Username not found");
                } else if (user.password === pass) {
                    console.log(user.type+" "+user.username+" successfully authenticated");
                    resolve();
                } else {
                    console.log("Database query failed");
                    reject("Database query failed");
                }
            })
            .catch(function(err) {
                console.log("Database query failed", err);
                reject(err.message);
            });

    });
};