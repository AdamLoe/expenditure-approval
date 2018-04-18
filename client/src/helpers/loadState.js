let state = {};

try {
	state = localStorage.getItem("Standard-Requests-State");
	state = JSON.parse(state);
	console.log('Got localStorage', state);

	let userState = sessionStorage.getItem("Standard-Requests-User-State");
	userState = JSON.parse(userState);
	console.log('Got sessionStorage', userState);

	if (userState) {
		state.user = userState;
	}

	console.log("Got session state", state);
}
catch(err) {
	state = {};
	console.log('Session state null', err);
}

export default state || {};