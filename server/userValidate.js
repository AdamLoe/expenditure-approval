// In case knex has a sql injection problem
// Or user is trying to put in bad data

var checkUsername = function(username) {
    return true;
};

var checkPassword = function(password) {
    return true;
};

var checkType = function(type) {
    if (['approver', 'requester', 'admin'].indexOf(type) > -1) {
        console.log('check type worked');
        return true;
    }
    else {
        return false;
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
    console.log('Key', req.body.key, 'Value', req.body.value);
    if (req.body.key === 'username') {
        if (checkUsername(req.body.value)) {
            next();
        }
        else {
            res.status(200).json({
                data: 0,
                string: 'Username not right'
            });
        }
    } else if (req.body.key === 'password') {
        if (checkPassword(req.body.value)) {
            next();
        }
        else {
            res.status(200).json({
                data: 0,
                string: 'Password needs to be at least 8 letters'
            });
        }
    }
    else if (req.body.key === 'name') {
        if (checkName(req.body.value)) {
            next();
        }
        else {
            res.status(200).json({
                data: 0,
                string: 'Name must have normal characters'
            });
        }
    }
    else if (req.body.key === 'approver') {
        if (checkApprover(req.body.value)) {
            next();
        }
        else {
            res.status(200).json({
                data: 0,
                string: 'Next Approver must be an active approver'
            });
        }
    }
    else if (req.body.key === 'approvelimit') {
        if (checkApproveLimit(req.body.value)) {
            next();
        }
        else {
            res.status(200).json({
                data: 0,
                string: 'ApproveLimit must be a number'
            });
        }
    }
    else {
        res.status(200).json({
            data: 0,
            string: 'Uhhhhhhh'
        });
    }
};

exports.checkMakeUser = function(req, res, next) {
    console.log('Check Make User Called');
    if (checkUsername(req.body.username)) {
        if (checkPassword(req.body.password)) {
            if (checkType(req.body.type))  {
                if (checkApprover(req.body.approver)) {
                    if (checkApproveLimit(req.body.approvelimit)) {
                        next();
                    } else {
                        res.status(200).json({
                            data: 0,
                            string: 'ApproveLimit not right'
                        })
                    }
                } else {
                    res.status(200).json({
                        data: 0,
                        string: 'Approver not right'
                    })
                }
            } else {
                res.status(200).json({
                    data: 0,
                    string: 'Type not right'
                })
            }
        } else {
            res.status(200).json({
                data: 0,
                string: 'Password not right'
            })
        }
    } else {
        res.status(200).json({
            data: 0,
            string: 'Username not right'
        })
    }
};

exports.checkDeactivateUser = function(req, res, next) {
    next();
}
