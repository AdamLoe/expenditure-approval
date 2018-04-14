var initialState = {
	loggedIn: false
};

export default (state=initialState, action) => {
	switch (action.type) {
		case "Login":
			console.log("loginSucc Reducers", action);
			return {
				usr: action.usr,
				tok: action.tok,
				userType: action.userType
			};
		case "LoginFail":
			return {
				loginFail: true,
				loggedIn: false
			};
		case "Logout":
			return null;
		default:
			return state;
	}
};