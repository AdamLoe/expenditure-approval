let knex = require("../helpers/knexfile.js");

module.exports = (event, callback) => {
  return new Promise(resolve => {
    let { body } = event;
    let username = body.usr;
    let password = body.pas;

    knex("users")
      .where("username", username)
      .where("status", true)
      .first()
      .then(function(user) {
        console.log(user);
        if (!user) {
          callback(null, {
            statusCode: 403,
            body: '{"message":"Username doesnt exist or deleted"}'
          });
        } else if (user.password === password) {
          user.password = "null";
          resolve(user);
        } else {
          callback(null, {
            statusCode: 403,
            body: '{"message":"Password not right"}'
          });
        }
      })
      .catch(function(err) {
        console.log("Database login fail", err);
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            message: "Database login fail",
            err: err
          })
        });
      });
  });
};
