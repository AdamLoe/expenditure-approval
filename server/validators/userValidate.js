
exports.checkUsername = function(req, res, next) {
    return true;
};

exports.checkPassword = function(req, res, next) {
    return true;
};

exports.checkType = function(req, res, next) {
    if (['approver', 'requester', 'admin'].indexOf(req.body.value) > -1) {
        next();
    }
    else {
        return false;
    }
};

exports.checkName = function(req, res, next) {
    return true;
};

exports.checkApprover = function(req, res, next) {
    return true;
};

exports.checkApproveLimit = function(req, res, next) {
    return true;
};