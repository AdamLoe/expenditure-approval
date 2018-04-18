import axios from "axios";
import { url, salt } from "../constants";

var loginSuccess = (res, username) => {
	console.log("loginSuccess", username, res);
	return {
		type: "LoginSuccess",
		username: username,
		token:    res.data.token,
		userType: res.data.userType,
		nickName: res.data.nickName,
		fullName: res.data.fullName,
		email:    res.data.email
	};
};

var loginFail = (err) => {
	console.log("loginFail", err);
	return {
		type: "LoginFail",
		err: err
	};
};

var login = (usr, pas) => {
	return axios.post(url + "/login", {
		usr: usr,
		pas: pas
	});
};

export default (username, password) => {
	return (dispatch) => {
		return login(username, password).then(
			res => dispatch(loginSuccess(res, username)),
			err  => dispatch(loginFail(err))
		);
	};
};
