var knex = require('./knexfile.js');

exports.updateFilters = function(req, res) {
    console.log('UpdateFilters called');
    getUserFiltersQuery('approver');
    getUserFiltersQuery('requester');
}

var getUserFiltersQuery = function(type) {
    knex('users').select(
         'id',
         'name'
     ).where({
        type: type,
        status: 'true'
    })  
        .then(function(data) {
            updateFilter(data, type + 's');
        })
        .catch(function(err){
            console.log('Updating', type, 'went wrong, this is bad.', err);
        })
}


var updateFilter = function(data, type) {
     console.log('Update', type, ' Called', data);
    knex('filters').update({
        json: JSON.stringify(data)
    }).where({
        name: type
    })
        .then(function(data) {
            console.log('Updating', type,' worked', data);
        })
        .catch(function(err){
            console.log('Updating', type, ' went wrong, this is bad.', err);
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