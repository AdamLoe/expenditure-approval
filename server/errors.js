exports.catchErrors = (fn) => {
    console.log('ran catch Errors');
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

exports.notFound = (req, res, next) => {
    console.log('Not Found used');
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};