var checkRequestName = function (requestName) {
    return true;
};
var checkAmount = function (amount) {
    return true;
};
var checkUnitName = function (unitName) {

    return true;
};
var checkItemType = function (itemType) {
    return true;

};
var checkReqComment = function(reqComment) {
    return true;

};
var checkAttributes = function(attributes) {
    return true;
}

exports.checkCreateRequest = function(req, res, next) {
    if (checkRequestName(req.body.requestName) &&
        checkAmount(req.body.amount) &&
        checkUnitName(req.body.unitName) &&
        checkItemType(req.body.itemType) &&
        checkReqComment(req.body.reqComment) &&
        checkAttributes(req.body.attributes)) {
        next();
    }
};