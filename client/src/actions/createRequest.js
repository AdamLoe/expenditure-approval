import { apiCall } from './axios';

let createRequestSuccess = (res) => {
	return {
		type: "RequestCreated"
	}
};

let createRequestFail = (err) => {
	return {
		type: "CreateRequestFail",
		errorType: "CreateRequest",
		err: err
	}
};

let buildCreateRequestBody = (state) => {
	let{ newRequest } = state.createRequest;
	return {
	}
};

export default () => {
	return (dispatch, getState) => {

		let url = '/create-request';
		let state = getState();
		let body = buildCreateRequestBody(state);

		apiCall('/create-request', state.user, body)
			.then(
				res => dispatch(createRequestSuccess(res)),
				err => dispatch(createRequestFail(err))
			)
	};
};

export const setRequestType = (e) => {
	console.log('called');
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