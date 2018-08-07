import { apiCall, checkFail } from "./axios";

let maxApiFails = 3;

let GotRequestsSuccess = (res) => {
	return (dispatch) => {
		console.log("Got requests", res);


		dispatch({
			type: "GotRequestsSuccess",
			array: res.data.array,
			count: res.data.count
		});

	};
};

let GotRequestsFail = (err,) => {
	return (dispatch) => {

		console.log("Got Requests Fail", err);
		dispatch({
			type: "GotRequestsFail",
			errorType: "GotRequest",
			err: err
		});
	};
};

// If item in request body is object, replace object with the value
let buildQueryRequestBody = (filters, changeKey, changeValue) => {
	let body = {};
	for (let key in filters) {
		if (typeof filters[key] === "object") {
			body[key] = filters[key].value;
		} else {
			body[key] = filters[key];
		}
	}
	body[changeKey] = changeValue;
	return body;
};

let buildQueryRequestBody2 = (changeKey, changeValue) => {
	return (dispatch, getState) => {

		let state = getState();
		let filters = state.requests.filters;

		let body = {};
		for (let key in filters) {
			if (typeof filters[key] === "object") {
				body[key] = filters[key].value;
			} else {
				body[key] = filters[key];
			}
		}

		body[changeKey] = changeValue;
		return body;
	};

};

//Using Key, Value because Async
//Need instant UI update, but also need instant request
export const getRequests = (key, value) => {
	return (dispatch, getState) => {

		let url = "/requests/query/";
		let state = getState();

		let filters = state.requests.filters;

		let body = buildQueryRequestBody(filters, key, value);
		apiCall(url, state.user, body)
			.then(
				res => dispatch(GotRequestsSuccess(res)),
				err => dispatch(GotRequestsFail(err))
			);
	};
};

export const updateRequestFilters = (key, value) => {
	// SELECT Options converts numbers to string, so we convert to number if it was a number before
	if (!isNaN(value)) {
		value = parseInt(value);
	}
	console.log("key, value", key, value);
	return (dispatch) => {
		dispatch({
			type: "UpdateRequestFilters",
			key: key,
			value: value
		});
		return dispatch(getRequests(key, value));
	};
};

let updateRequestSuccess = (res) => {
	return (dispatch) => {
		console.log("Request Updated successfully", res);
		dispatch({
			type: "UpdateRequestSuccess"
		});
		return dispatch(updateRequestFilters());
	};
};

let updateRequestFailure = (err) => {
	console.log("Request Update Error", err);

	return  {
		type: "UpdateRequestFailure"
	};
};

export const updateRequest = (url, id, comment=null) => {
	return (dispatch, getState) => {

		let state = getState();

		apiCall(url, state.user, { id, comment })
			.then(
				res => dispatch(updateRequestSuccess(res)),
				err => dispatch(updateRequestFailure(err))
			);
	};
};
export const submitComment = (id, comment) => {
	return (dispatch) => dispatch(
		updateRequest(
			"/requests/comment",
			id,
			"This is a new comment"
		)
	);
};

export const approveRequest = (id) => {
	return (dispatch) => dispatch(
		updateRequest(
			"/requests/approve",
			id
		)
	);
};

export const rejectRequest = (id) => {
	return (dispatch) => dispatch(
		updateRequest(
			"/requests/reject",
			id
		)
	);
};
