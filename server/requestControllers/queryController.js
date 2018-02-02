var knex = require('../helpers/knexfile.js');

//Searches Database with filters, returns requests objects
exports.query = function (req, res) {
    console.log('Query Requests Called', req.body);
    console.log('perPage', req.body.perPage, ' offset', req.body.perPage * (req.body.page - 1));
    knex('requests')
        .where(req.body.filters)
        .limit( req.body.perPage)
        .offset(req.body.perPage * (req.body.page - 1))
        .orderBy('createdate', 'desc')
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query requests failed.', err);
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

//Searches Database with filters, returns requests objects
exports.myRequests = function (req, res) {
    console.log('My Requests Called for', req.user.username);
    knex('requests')
        .where({
            requesterid: req.user.id
        })
        .limit(30)
        .orderBy('updatedate', 'desc')
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query requests failed.');
            res.status(500).json({
                error: true,
                data: err
            })
        })
};