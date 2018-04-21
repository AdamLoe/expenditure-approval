import axios from 'axios';
import { apiURL, apiPort, salt } from "../constants";

exports.apiCall = (path, {username, token}, body) => {
	return axios({
		method: "post",
		baseURL: apiURL+path,
		port: apiPort,
		auth: {
			username: username,
			password: token
		},
		data: body
	})
};

exports.loginCall = (username, password) => {
	return axios.post(apiURL + "/login", {
		usr: username,
		pas: password
	});
};
