// In case knex has a sql injection problem
// Or user is trying to put in bad data

let checkRequestName = function (requestName) {
	return true;
};
let checkAmount = function (amount) {
	return true;
};
let checkUnitName = function (unitName) {

	return true;
};
let checkItemType = function (itemType) {
	return true;

};
let checkReqComment = function(reqComment) {
	return true;

};
let checkAttributes = function(attributes) {
	return true;
};

exports.checkComment = function(req, res, next) {
	next();
};

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