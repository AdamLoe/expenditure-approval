let state = {};

try {
	state = localStorage.getItem("Standard-Requests-State");
	state = JSON.parse(state);
	console.log('Got localStorage', state);

}
catch(err) {
	state = {};
	console.log('Session state null', err);
}

export default state || {};