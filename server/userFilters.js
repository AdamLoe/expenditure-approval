var fs = require('fs');
var knex = require('./knexfile.js');

var callback = function(data) {
    console.log('json filter callback', data)
}

exports.updateFilters = function(req, res) {
    console.log('UpdateFilters called');
    updateApprovers();
    updateRequesters();
}

var updateApprovers = function() {
     knex('users').where({
        type: 'approver',
        status: 'true'
    })
        .then(function(data) {
            fs.writeFile( "approvers.json", JSON.stringify(data.data), "utf8", callback);
        })
        .catch(function(err){
            console.log('Updating Approvers went wrong, this is bad.');
        })
}

var updateRequesters = function() {
    knex('users').where({
        type: 'requester',
        status: 'true'
    })
        .then(function(data) {
            fs.writeFile( "requester.json", JSON.stringify(data.data), "utf8", callback);
        })
        .catch(function(err){
            console.log('Updating Requesters went wrong, this is bad.');
        })
}

exports.getApprovers = function() {
    var json = require('../approvers.json');
    return json;
}

exports.getRequesters = function() {
    var json = require('../requesters.json');
    return json;
}