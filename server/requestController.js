var knex = require('./knexfile.js');

exports.query = function (req, res) {
    knex('requests').where(   )
        .then(function(data) {
            console.log(data);
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

exports.comment  = function (req, res) {
    console.log('Comment function Hit');
};

exports.request = function (req, res) {
    knex
    console.log('Request function Hit');
};