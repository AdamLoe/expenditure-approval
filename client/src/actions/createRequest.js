import { apiCall } from "./axios";

let createSuccessMessage = "Request Successfully Created";

let createRequestSuccess = (res) => {
	return {
		type: "CreateRequestSucccess",
		notification: createSuccessMessage,
		showNotification: "modal",
		goHome: true
	};
};

let createRequestFail = (err) => {
	console.log("Create Request Error", err);
	console.log(err.response);
	return {
		type: "CreateRequestFail",
		errorType: "CreateRequest",
		err: err
	};
};

let buildCreateRequestBody = (state) => {
	let req = state.createRequest;
	return {
		name: req.Name,
		amount: req.Amount,
		unitname: req.UnitName,
		description: req.Description,
		type: req.Type,
		attributes: req.attributes
	};
};

export default () => {
	return (dispatch, getState) => {

		let url = "/requests/create";
		let state = getState();
		let body = buildCreateRequestBody(state);

		apiCall(url, state.user, body)
			.then(
				res => dispatch(createRequestSuccess(res)),
				err => dispatch(createRequestFail(err))
			);
	};
};

export const setRequestType = (e) => {
	console.log("called");
	return {
		type: "setRequestType",
		value: e.target.value
	};
};

export const changeOptionalAttribute = (index, key, value) => {
	return {
		type: "changeOptionalAttribute",
		index: index,
		key: key,
		value: value
	};
};

export const changeRequiredAttribute = (key, value) => {
	return {
		type: "changeRequiredAttribute",
		key: key,
		value: value
	};
};

export const deleteAttribute = (index) => {
	return {
		type: "deleteAttribute",
		index: index
	};
};