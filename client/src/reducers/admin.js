var initialState = {
};

var updateUser = (user, action) => {
	if (user.id !== action.userId) {
		return user;
	} else {
		return user;
	}
};
export default (state=initialState, action) => {
	switch (action.type) {
		case "gotUsers":
			return {
				list: action.users
			};
		case "updateUser":
			let users = state.admin.list.map(user => updateUser(user, action));
			return {
				list: users
			};
		default:
			return state || initialState;
	}
};