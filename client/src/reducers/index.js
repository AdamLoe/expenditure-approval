import { combineReducers } from "redux";

const initialState = {
	user_id: "",
	access_token: "",
};

const example = (state={}, action) => {
	if (action.type === "EXAMPLE") {
		console.log("made it inside exmaple");
		return {
			data: "hmm"
		};
	} else {
		return state;
	}
};

const login = (state=initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				user_id: action.usr,
				access_token: action.pas
			};
		default:
			return state;
	}
};

const logout = (state=initialState, action) => {
	return state;
};


export default combineReducers({
	example,
	login,
	logout
});
