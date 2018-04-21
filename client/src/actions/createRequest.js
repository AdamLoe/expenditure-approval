import { apiCall } from './axios';

let createRequestSuccess = (res) => {
		console.log('Success', res);
	return {
		type: "RequestCreated"
	}
};

let createRequestFail = (err) => {
		console.log('Fail', err);
	return {
		type: "API_FAIL",
		message: err.message,
		errorType: "CreateRequest",
		err: err
	}
};

let buildCreateRequestBody = (state) => {
	let{ newRequest } = state.createRequest;
	return {
		name: state.createRequest.Name,
		amount: state.createRequest.Amount,
		unitname: state.createRequest.UnitName,
		description: state.createRequest.Description,
		type: state.createRequest.Type,
		attributes: state.createRequest.attributes
	}
};

export default () => {
	return (dispatch, getState) => {

		console.log('CreateRequestCalled');

		let url = '/requests/create';
		let state = getState();
		let body = buildCreateRequestBody(state);

		console.log('Inserting request', body);
		return apiCall(url, state.user, body)
			.then(
				res => dispatch(createRequestSuccess(res)),
				err => dispatch(createRequestFail(err))
			)
			.then((data) => {
				console.log("got after");
			})
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
