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
		filters: {}
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
	return (dispatch) => {
		dispatch({
			type: "UpdateRequestFilters",
			key: key,
			value: value
		});
		return dispatch(getRequests(key, value));
	};
};
