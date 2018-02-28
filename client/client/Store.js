const { createStore, combineReducers } = require("redux");
const state = require("./helpers/loadState.js");

const getStore = () => {
	const reducers = combineReducers( );
	return createStore(reducers, state);
};

export default getStore;