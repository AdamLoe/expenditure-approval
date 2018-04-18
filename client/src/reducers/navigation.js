let initialState = {
	showAdminPanel: false,
	showSettings: false,
	showUserDropdown: false
};

export default (state=initialState, action) => {
	switch(action.type) {
		case "gotoSettings":
			return {
				...state,
				showSettings: true,
				showUserDropdown: false
			};

		case "exitSettings":
			return {
				...state,
				showSettings: false,
				showUserDropdown: false
			};

		case "toggleAdmin":
			return {
				...state,
				showAdminPanel: !state.showAdminPanel
			};

		case "toggleUserDropdown":
			return {
				...state,
				showUserDropdown: !state.showUserDropdown
			};

		case "Logout":
			return initialState;

		default:
			return state || initialState;
	}
};