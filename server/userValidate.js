var checkUsername = function(username) {

};

var checkPassword = function(password) {
    return true;
};

var checkType = function(type) {
    if (['approver', 'requester', 'admin'].indexOf(type) > -1) {
        return true;
    }
};

var checkName = function(name) {
    return true;
};

var checkApprover = function(approver) {
    return true;
};

var checkApproveLimit = function(limit) {
    return true;
};

exports.checkUpdateUser = function(req, res,next) {
    console.log('Check Update User Called');
    console.log('Key', req.body.key, 'Value', req.body.value);
    if (req.body.key === 'password') {
        if (checkPassword(req.body.value)) {
            next();
        }
    }
    if (req.body.key === 'name') {
        if (checkName(req.body.value)) {
            next();
        }
    }
    if (req.body.key === 'approver') {
        if (checkApprover(req.body.value)) {
            next();
        }
    }
    if (req.body.key === 'approvelimit') {
        if (checkApproveLimit(req.body.value)) {
            next()
        }

    }
};

exports.checkMakeUser = function(req, res, next) {
    console.log('Check Make User Called');
    if (checkUsername(req.body.username)) {
        if (checkPassword(req.body.password)) {
            if (checkType(req.body.type)) {
                if (checkApprover(req.body.approver)) {
                    if (checkApproveLimit(req.body.approvelimit)) {
                        next();
                    }
                }
            }
        }
    }
};

exports.checkUserListParams = function(req, res, next) {
    console.log('Check Remove User Called');
    if (checkType(req.params.type)){
        if ((req.params.status === true) || (req.params.status===false)) {
            next();
        }
    }
};