/*
 routes.js
 ------------
 two callable functions
 	use:  routes to param
 	admin: checks is admin before routing to param

 Only allows one route to be called
 Ignores characters after path, i.e. matches /login2 to /login
 Puts extra characters into event.paramObjectFAIL
*/


let routeMatches = function(routePath, userPath) {
	return (routePath === userPath) || ((routePath + '/') === userPath);
};

let getParamObject = function(routePath, userPath) {
	let len = userPath.length;
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
