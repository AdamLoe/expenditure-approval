
import axios from "axios";
import { url, salt } from "../constants";

var loginSuccess = (res, usr) => {
	console.log("loginSuccess", usr, res);
	return {
		type: "LoginSuccess",
		usr: usr,
		tok: res.data.token,
		userType: res.data.userType
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

export default (usr, pas) => {
	return (dispatch) => {
		return login(usr, pas).then(
			res => dispatch(loginSuccess(res, usr)),
			err  => dispatch(loginFail(err))
		)
	}
}
