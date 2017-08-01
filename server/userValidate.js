var checkUsername = function(username) {

};

var checkPassword = function(password) {
    return true;
};

var checkType = function(password) {

};

var checkName = function(name) {

};

var checkApprover = function(approver) {

};

var checkLimit = function(limit) {

};

exports.checkUpdateUser = function(req, res,next) {
    console.log('Check Update User Called');
    if (req.params.key === 'password') {
        if (checkPassword(req.body.value)) {
            next();
        }
    }
    if (req.params.key === 'name') {
        if (checkName(req.body.name)) {
            next();
        }
    }
    if (req.params.key === 'approver') {
        if (checkApprover(req.body.name)) {
            next();
        }
    }
    if (req.params.key === 'limit') {
        if (checkLimit(req.body.limit)) {
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
                    if (checkLimit(req.body.limit)) {
                        next();
                    }
                }
            }
        }
    }
};

exports.checkRemoveUser = function(req, res, next) {
    console.log('Check Remove User Called');
};