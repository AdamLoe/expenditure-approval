var knex = require('knex')( {
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',
        database: 'users',
        user:     'postgres',
        password: 'postgres'
    },
    pool: {
        min: 2,
        max: 10
    }
} );

exports.authenticate = function(req,res,next) {
    var username = req.params.username;
    var password = req.params.password;
    var username = 'steve';
    var password = 'betty';
    knex('users').where( {username}).first()
        .then(function(user) {
            if (!user) {
                console.log('Username: ', user.username, ' not Found.');
            } else if (user.password == password) {
                console.log('Username: ', user.username, ' successfully logged in.');
                user.password = '';
                req.user = user;
                next();
            }
            else {
                console.log('Wrong Password.');
            }
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

exports.authenticateAdmin = function(req,res,next) {
    if (req.user.type == 'admin') {
        next();
    }
};
