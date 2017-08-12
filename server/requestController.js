var knex = require('./knexfile.js');
var moment = require('moment');

//Searches Database with filters, returns requests objects
exports.query = function (req, res) {
    console.log('Query Requests Called');
    var filters = req.params;
    console.log(req.params);
    knex('requests').where({
        approver: filters.approver
    })
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query requests failed.');
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
    knex('requests').where({
        requester: req.user.username
    })
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

//Add comment to history, change lastEditDate
//Does user have power to finalize request? Move to Approved/Rejected. Change Status
//If not, change nextApprover to user's next Approver.
exports.comment  = function (req, res) {
    console.log('Comment function Hit');
};


//Pipe all props to knex to create a object
exports.createRequest = function (req, res) {
    console.log('Create Request function Hit', req.body);
    knex('requests').insert({
        requestname: req.body.requestName,
        status: 'In Process',
        amount: req.body.amount,
        unitname: req.body.unitName,
        itemtype: req.body.itemType,
        requester: req.user.username,
        requestername: req.user.name,
        approver: req.user.approver,
        reqcomment: req.body.reqComment,
        createdate: knex.fn.now(),
        attributes: req.body.attributes,
        comments: [ [knex.fn.now(), req.user.username, req.user.name, 'Created'] ]
    })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err){
            console.log('Database create request failed.', err);
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};