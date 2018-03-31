var { isAdmin } = require("./helpers/checkType");

var routeMatches = function(routePath, userPath) {
	console.log("routeMatches called", routePath, userPath);
	var len = userPath.length;
	return (routePath.slice(0, len) === userPath);
};

var getParamObject = function(routePath, userPath) {
	var len = userPath.length;
	return routePath.slice(len+1);
};

exports.createRouter = function(event, callback) {
	return {
		path: event.path,
		event: event,
		callback: callback,
		consumed: false,
        // Checks if no path used yet and path matches, then puts paramObject in event and sends it to function
		use: function(routePath, route) {
			if (!this.consumed && routeMatches(routePath, this.path)) {
				this.consumed = true;
				this.event.paramObject = getParamObject(routePath, this.path);
				route(this.event, this.callback);
			}
		},
        //Makes sure its an admin before sending to route
		admin: function(routePath, route) {
			if (isAdmin) {
				this.use(routePath, route);
			}
		}
	};
};