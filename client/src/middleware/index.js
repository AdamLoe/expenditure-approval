const middleware = store => next => action => {

	try {
		let result = next(action);
		let state = store.getState();
		localStorage.setItem("Standard-Requests-State", JSON.stringify({
			...state,
			user: null
		}));
		sessionStorage.setItem("Standard-Requests-User-State", JSON.stringify(state.user));
		console.log('Successfully set state');
		return result;
	}
	catch(err) {
		console.log('error settings state', err);
	}
};

export default middleware;
