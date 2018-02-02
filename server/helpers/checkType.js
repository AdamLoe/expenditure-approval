exports.checkAdmin = function(req,res,next) {
    if (req.user.type === 'admin') {
        next();
    }
};

exports.checkRequester = function(req, res, next) {
    if (req.user.type === 'requester') {
        next();
    }
};

exports.checkApprover = function(req, res, next) {
    if (req.user.type === 'approver') {
        next();
    }
};