let initialState = {
	message: "",
	type: ""
};

export default (state=initialState, action) => {
	switch(action.type) {
		case "deleteNotification":
			return initialState;
	}

	switch(action.showNotification) {
		case false:
			return initialState;
		case undefined:
			return state;
		default:
			return {
				message: action.notification,
				type: action.showNotification
			};
	}
};