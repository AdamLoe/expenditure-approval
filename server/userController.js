var knex = require('./knexfile.js');

//Search database for users of type
exports.userList = function (req, res) {
    console.log('Query Users Called');
    knex('users')
        /*
        .select(
        'username', 'name', 'type', 'nextapprover', 'approvelimit'
    )
    */
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
exports.editUser  = function (req, res) {
    console.log('EditUser function Hit');
    knex('users').update({
        [req.body.key]: req.body.value
    }).where({
        username: req.params.username
    })
        .then(function(data) {
            console.log(data);
            res.status(200);
        })
        .catch(function(err){
            console.log('Database update failed.');
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
    knex('users')
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


//If user is still connected, SEND ERROR DANGER MESSAGE
//Otherwise, move to deleted pile
exports.removeUser = function (req, res) {
    console.log('RemoveUser function Hit');
    knex('users')
        .then(function(data) {
            console.log(data);
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
