import { apiCall, checkFail } from "./axios";

let maxApiFails = 3;

let GotRequestsSuccess = (res) => {
	return (dispatch) => {

		console.log("Got requests", res);
		dispatch({
			type: "GotRequestsSuccess",
			array: res.data
		});

	};
};

let GotRequestsFail = (err, apiFails) => {
	return (dispatch) => {

		checkFail(dispatch, err).then(() => {

			console.log("Got Requests Fail", err);
			console.log("ApiFails", apiFails);
			dispatch({
				type: "GotRequestsFail",
				errorType: "GotRequest",
				err: err
			});
			if (apiFails < maxApiFails) {
				return setTimeout(dispatch(getRequests()), 1000);
			}

		});

	};
};

let buildQueryRequestBody = (filters) => {
	return {
		page: filters.pageNum,
		perPage: 10,
		approverId: filters.Approver,
		requesterId: filters.Requester,
		status: filters.Status
	};
};

export const getRequests = (key, value) => {
	return (dispatch, getState) => {

		let url = "/requests/query/";
		let state = getState();

		let filters = state.requests.filters;
		let apiFails = state.requests.apiFails;
		if (key !== undefined) {
			filters[key] = value;
		}
		let body = buildQueryRequestBody(filters);

		apiCall(url, state.user, body)
			.then(
				res => dispatch(GotRequestsSuccess(res)),
				err => dispatch(GotRequestsFail(err, apiFails))
			);
	};
};

export const updateRequestFilters = (key, value) => {
	console.log('key, value', key, value);
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
	console.log('Request Updated successfully', res);

	return {
		type: "UpdateRequestSuccess"
	};
};

let updateRequestFailure = (err) => {
	console.log('Request Update Error', err);

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
			)
	}
}
export const submitComment = (id, comment) => {
	return (dispatch) => dispatch(
		updateRequest(
			"/requests/submit",
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
