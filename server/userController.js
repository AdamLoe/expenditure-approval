var knex = require('./knexfile.js');

//Search database for users of type
exports.userList = function (req, res) {
    console.log('Query Users Called');
    if (req.params.type === 'inactive') {
        getUsersInactive(req, res);
    } else if (req.params.type === 'admin'){
        getUsersType(req, res);
    } else if (req.params.type === 'approver'){
        getUsersType(req, res);
    } else if (req.params.type === 'requester'){
        getUsersType(req, res);
    }
};

var getUsersType = function(req, res) {
    knex('users').where({
        type: req.params.type
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

var getUsersInactive = function(req, res) {
    knex('users').where({
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

//Updates user account settings
exports.updateUser  = function (req, res) {
    console.log('Update User function Hit');
    knex('users').update({
        [req.body.key]: req.body.value
    }).where({
        username: req.params.username
    })
        .then(function(data) {
            console.log('data', data);
            res.status(200).json({
                data: data
            })
        })
        .catch(function(err){
            console.log('Database update failed.', err);
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

//Create new row in database with values
exports.makeUser = function (req, res) {
    console.log('MakeUser function Hit');
    knex('users').insert({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        type: req.body.type,
        approver: req.body.approver,
        approvelimit: req.body.approvelimit,
        status: true
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


exports.deactivateUser = function (req, res) {
    console.log('Deactivate User function Hit');
    knex('users').update({
        status: false
    }).where({
        username: req.params.username
    })
        .then(function(data) {
            console.log(data);
            res.status(200).json({
                data: data
            });
        })
        .catch(function(err){
            console.log('Database Failed at Deactivating User.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};


//If user is still connected, SEND ERROR DANGER MESSAGE
//Otherwise, move to deleted pile
exports.activateUser = function (req, res) {
    console.log('ActivateUser function Hit');
    knex('users').update({
        status: true
    }).where({
        username: req.params.username
    })
        .then(function(data) {
            console.log(data);
            res.status(200).json({
                data: data
            });
        })
        .catch(function(err){
            console.log('Database Failed at Sctivating User.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};