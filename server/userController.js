exports.userList = function (req, res) {
    console.log('Query Users Called');
    var filters = req.params;
    console.log(req.params);
    knex('users').select(
        'usr', 'name', 'type', 'nextApprover', 'approveLimit'
    )
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

exports.editUser  = function (req, res) {
    console.log('EditUser function Hit');
    knex('users')


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

exports.makeUser = function (req, res) {
    console.log('MakeUser function Hit');
    knex('users')




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

exports.removeUser = function (req, res) {
    console.log('RemoveUser function Hit');
    knex('users')


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
