var knex = require('../helpers/knexfile.js');
var { getDetailedTime } = require('../helpers/time.js');

//Pipe all props to knex to create a object
exports.createRequest = function (req, res) {
    console.log('Create Request function Hit', req.body);
    knex.transaction(function(trx) {
        return trx.into('requests')
            .insert({
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
                comments: [[getDetailedTime(), 'Created', req.user.id, req.user.name]]
            })
            .then(function(data) {

                return knex('users')
                    .transacting(trx)
                    .update({
                        approvelimit: 1002
                    }).where({
                        id: req.user.id
                    })

            })
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function(data) {
            console.log('Transaction worked');
            res.status(200).json(data);
        })
        .catch(function(err){
            console.log('Transaction Failed', err);
            res.status(500);
        })
};