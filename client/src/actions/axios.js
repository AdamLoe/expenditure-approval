import axios from "axios";
import { url, salt } from "../constants";

import { logout } from "./index";

let maxApiFails = 3;

exports.apiCall = (path, {username, token}, body) => {
	console.log("Api call to ", path);
	return axios.post(url+path, body, {
		auth: {
			username: username,
			password: token
		}
	});
};

exports.loginCall = (username, password) => {
	return axios.post(url + "/login", {
		usr: username,
		pas: password
	});
};


exports.checkFail = (dispatch, err) => {
	return new Promise((resolve) => {

		switch(err.response.status) {
			case 401:
			case 403:
				console.log("hi");
				dispatch(logout());
				break;
			default:
				resolve();
		}
	});
};



exports.apiCall2 = (path, {username, token}, body) => {


	console.log("Api call to ", path);
	return axios.post(url+path, body, {
		auth: {
			username: username,
			password: token
		}
	});
};