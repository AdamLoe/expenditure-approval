let initialState = {
	showAdminPanel: false,
	showSettings: false,
	showUserDropdown: false,
	showCreateRequest: false
};

export default (state=initialState, action) => {

	if (action.goHome === true) {
		return {
			...state,
			showSettings: false,
			showUserDropdown: false,
			showAdminPanel: false,
			showCreateRequest: false,
		};
	}
	switch(action.type) {
		case "toggleSettings":
			return {
				...state,
				showSettings: !state.showSettings,
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

		case "showCreateRequest":
			return {
				...state,
				showCreateRequest: true
			};

		case "hideCreateRequest":
			return {
				...state,
				showCreateRequest: false
			};

		case "Logout":
			return initialState;

		default:
			return state || initialState;
	}
};