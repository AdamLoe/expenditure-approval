let initialState = {

};

export default (state=initialState, action) => {
	switch(action.type) {
		case "NextPage":
			return {
				page: state.page + 1
			};

		case "PrevPage":
			return {
				page: state.page - 1
			};

		case "ResetPage":
			return {
				page: 1
			};

		case "Logout":  case "toggleAdmin": case "updateFilters":
			return initialState;

		default:
			return state || initialState;
	}
};