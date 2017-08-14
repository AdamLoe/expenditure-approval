var knex = require('./knexfile.js');
var moment = require('moment');

//Searches Database with filters, returns requests objects
exports.query = function (req, res) {
    console.log('Query Requests Called');
    var filters = req.params;
    console.log(req.params);
    knex('requests').where({
        approverid: filters.approverid
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
        requesterid: req.user.id
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


var getDetailedTime = function() {
    var a = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    const date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();

    const time = month + ' ' + date + ' '  + year + ' ' + hour + ':' + min;
    console.log('Made time', time, a;
    return time;
};

//Pipe all props to knex to create a object
exports.createRequest = function (req, res) {
    console.log('Create Request function Hit', req.body);
    var timestamp = knex.fn.now();
    knex('requests').insert({
        requestname: req.body.requestName,
        status: 'In Process',
        amount: req.body.amount,
        unitname: req.body.unitName,
        requesterid: req.user.id,
        requestername: req.user.name,
        approverid: req.user.approverid,
        approvername: req.user.approvername,
        createdate: knex.fn.now(),
        updatedate: knex.fn.now(),
        attributes: req.body.attributes,
        comments: [[getDetailedTime(), 'Approved', req.user.id, req.user.name]]
    })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err){
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};