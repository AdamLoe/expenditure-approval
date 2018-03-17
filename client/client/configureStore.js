const { createStore } = require("redux");
const state = require("./helpers/loadState.js");
const reducers = require("/reducers/");

const getStore = () => {
	return createStore(reducers, state);
};

export default getStore;