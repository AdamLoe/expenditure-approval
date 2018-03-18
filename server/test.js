/**
 * Created by Adam on 3/17/2018.
 */
var lambda = require("./index");

var sample = require("./sampleHttpRequest.json");

var _callback = function(data) {
	console.log("Callback was called with data", data);
};

lambda(sample.event, sample.context, _callback);