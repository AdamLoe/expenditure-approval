let initialState = {
	loggedIn: false,
};

let exampleState = {
	loggedIn: true,
	username: "terryB",
	token: "WW0ZSilosbcpMufIoWFhLRUp2rMKgHxEPVDN4U4xqjhv4MNjvBf2Wk5LGwgm92zm",
	userType: "admin",
	nickName: "Bert",
	fullName: "Bert Loe",
	email: "bertloe@comcast.net"
};

export default (state=initialState, action) => {
	switch (action.type) {
		case "LoginSuccess":
			return {
				loggedIn: true,
				username: action.username,
				token: action.token,
				userType: action.userType,
				nickName: action.nickName,
				fullName: action.fullName,
				email: action.email
			};

		case "LoginFail":
			return {
				loginFail: true,
				loggedIn: false
			};

		case "Logout":
			return {
				loggedIn: false
			};

		case "ChangeEmail":
			return {
				...state,
				email: action.email
			};

		default:
			return state || initialState;
	}
}
