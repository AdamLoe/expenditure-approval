import defaultState from "./defaultState";

var state = {};
try {
	state = sessionStorage.getItem("state");
	console.log("Got session state", state);
	x = 0
}
catch(err) {
	state = defaultState;
	console.log("Got default state", state);
}

export default state;