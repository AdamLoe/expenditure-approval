import defaultState from "./defaultState";

var state = {};
try {
	state = sessionStorage.getItem("redux-state");
	state = JSON.parse(state)
	console.log("Got session state", state);
	console.log('Got session login', JSON.stringify(state.login));
}
catch(err) {
	state = defaultState;
	console.log("Got default state", state);
}

export default state;
