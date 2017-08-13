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

exports.login = function(req, res) {
    console.log('Sending filters and login info');
    knex('filters')
        .then(function(data) {
            var loginJson = {
                user: req.user,
                filters: data
            };
            res.send(loginJson);
            console.log(req.user.type, ' ' , req.user.username, ' successfully logged in.');
        })
        .catch(function(err){
            console.log('Getting Filters failed');
            res.status(500).json({
                error: true,
                data: err
            })
        })

}