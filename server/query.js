var knex = require('./config.js');

exports.query = function(req, res, next) {
  knex('users').where({
      username: req.params.username,
      password: req.params.password
  }).then(function(data) {

  }).catch(function(err){
      console.log('Login Error');
      res.status(500).json({
          error: true,
          data: {
              message: err.message
          }
      })
  })
};