var fs = require('fs');
var knex = require('./knexfile.js');

var callback = function(data) {
    console.log('json filter callback', data)
}

exports.updateFilters = function(req, res) {
    console.log('UpdateFilters called');
    getApprovers();
    getRequesters();
}

var getApprovers = function() {
    knex('users').select(
         'id',
         'name'
     ).where({
        type: 'approver',
        status: 'true'
    })
        .then(function(data) {
            updateApprovers(data);
        })
        .catch(function(err){
            console.log('Updating Approvers went wrong, this is bad.');
        })
}

var updateApprovers = function(approvers) {
     console.log('UpdateApprovers Called', approvers);
}

var getRequesters = function() {
    knex('users').select(
         'id',
         'name'
     ).where({
        type: 'requester',
        status: 'true'
    })
        .then(function(data) {
            updateRequesters(data);
        })
        .catch(function(err){
            console.log('Updating Requesters went wrong, this is bad.');
        })
}
var updateRequesters = function(requesters) {
    console.log('Update requesters hit', requesters);
    
}

exports.getApprovers = function() {
    var json = require('../approvers.json');
    return json;
}

exports.getRequesters = function() {
    var json = require('../requesters.json');
    return json;
}