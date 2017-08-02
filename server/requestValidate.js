var checkRequestName = function (requestName) {

};
var checkAmount = function (amount) {

};
var checkUnitName = function (unitName) {

};
var checkItemType = function (itemType) {

};
var checkReqComment = function(reqComment) {

};

exports.checkCreateRequest = function(req, res, next) {
    if (checkRequestName(req.body.requestName) &&
        checkAmount(req.body.amount) &&
        checkUnitName(req.body.unitName) &&
        checkItemType(req.body.itemType) &&
        checkReqComment(req.body.reqComment)) {
        next();
    }
};