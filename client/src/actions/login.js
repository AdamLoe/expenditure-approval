import { loginCall } from './axios';

let loginSuccess = (res, username) => {
	console.log("loginSuccess", username, res);
	return {
		type: "LoginSuccess",
		username: res.data.username,
		token:    res.data.token,
		userType: res.data.userType,
		nickName: res.data.nickName,
		fullName: res.data.fullName,
		email:    res.data.email
	};
};

let loginFail = (err) => {
	console.log("loginFail", err);
	return {
		type: "LoginFail",
		err: err
	};
};

export default (username, password) => {
	return (dispatch) => {
		return loginCall(username, password).then(
			res => dispatch(loginSuccess(res)),
			err  => dispatch(loginFail(err))
		);
	};
};
