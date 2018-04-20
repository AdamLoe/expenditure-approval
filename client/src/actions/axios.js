import axios from 'axios';
import { url, salt } from "../constants";

exports.apiCall = (path, {username, token}, body) => {
	return axios.post({
		url: url+path,
		auth: {
			username: username,
			token: token
		},
		data: body
	})
};

exports.loginCall = (username, password) => {
	return axios.post(url + "/login", {
		usr: username,
		pas: password
	});
};