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
    console.log('Key', req.body.key, 'Value', req.body.value);
    if (req.body.key === 'password') {
        if (checkPassword(req.body.value)) {
            next();
        }
    }
    if (req.body.key === 'name') {
        if (checkName(req.body.name)) {
            next();
        }
    }
    if (req.body.key === 'approver') {
        if (checkApprover(req.body.name)) {
            next();
        }
    }
    if (req.body.key === 'limit') {
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