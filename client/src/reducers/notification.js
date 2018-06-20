let initialState = {
	message: null,
	timeout: 0,
};

export default (state=initialState, action) => {
	switch(action.type) {
		case "deleteNotification":
			return initialState;

		case "UpdateRequestFilters":
			return {
				message: "Loading...",
				timeout: 1000
			};

		case "GotRequestsSuccess":
			if (state.message === "Loading...") {
				return initialState;
			}
			break;
		case "GotRequestsFail":
			return {
				message: "Failed to fetch requests",
				timeout: 1000
			}
	}
	return state;

};

/*

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

 */