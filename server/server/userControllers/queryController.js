var knex = require('../helpers/knexfile.js');

//Search database for users of type
exports.userList = function (req, res) {
    if (req.params.type === 'inactive') {
        getUsersInactive(req, res);
    } else {
        getUsersType(req, res);
    }
};

var getUsersType = function(req, res) {
    knex('users').select(
        'id',
        'name',
        'username',
        'type',
        'approvelimit',
        'approverid',
        'approvername'
    ).where({
        type: req.params.type,
        status: 'true'
    })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err){
            console.log('Database query failed.', err);
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })

};

var getUsersInactive = function(req, res) {
    knex('users').select(
        'id',
        'username',
        'name',
        'type',
        'approvelimit',
        'approverid',
        'approvername'
    ).where({
        status: 'false'
    })
        .then(function(data) {
            res.status(200).send(data);
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
