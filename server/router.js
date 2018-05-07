/*
 routesr.js
 ------------
 Only allows one route to be called
 Allows /login2, /login/, and /login?adam to match to /login
 Fills event.paramObject with anything after matchUrl
 	/login/2 = 2
 	/login//2 = /2 FAIL
 */


var routeMatches = function(routePath, userPath) {
	return (routePath === userPath) || ((routePath + '/') === userPath);
};

var getParamObject = function(routePath, userPath) {
	var len = userPath.length;
	return routePath.slice(len+2);
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
				console.log('Hit route', routePath);
				this.consumed = true;
				this.event.paramObject = getParamObject(routePath, this.path);
				route(this.event, this.callback);
			}
		},
		//Makes sure its an admin before sending to route
		admin: function(routePath, route) {
			if (event.user.type === "admin") {
				this.use(routePath, route);
			}
		}
	};
};
