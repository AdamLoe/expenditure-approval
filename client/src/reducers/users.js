var initialState = {
};

var updateUser = (user, action) => {
	if (user.id !== action.userId) {
		return user;
	} else {

	}
};
export default (state=initialState, action) => {
	switch (action.type) {
		case "gotUsers":
			return {
				list: action.users
			};
		case "updateUser":
			users = state.users;
			users = list.map((user) => {
				return updateUser(user, action);
				if (user.id === action.userId) {

				} else {
					return user;
				}
			});
			return {
				list: users
			};
		default:
			return state;
	}
};