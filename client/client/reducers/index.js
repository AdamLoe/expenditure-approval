import React from 'react';
import { combineReducers } from "redux";

const initialState = {
	user_id: '',
	access_token: '',
};

const login = (state=initialState, action) => {
	switch (action.type) {
		default:
			return {
				user_id: state.user_id,
				access_token: state.access_token
			}
	}
};

const logout = (state=initialState, action) => {
	return state;
};


export default combineReducers({
	login,
	logout
});