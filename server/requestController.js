var knex = require('./knexfile.js');

//Searches Database with filters, returns requests objects
exports.query = function (req, res) {
    var filters = req.params;
    console.log(req.params);
    knex('requests').where(    )
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

//Add comment to history, change lastEditDate
//Does user have power to finalize request? Move to Approved/Rejected. Change Status
//If not, change nextApprover to user's next Approver.
exports.comment  = function (req, res) {
    console.log('Comment function Hit');
};

//Pipe all props to knex to create a object
exports.request = function (req, res) {
    knex
    console.log('Request function Hit');
};