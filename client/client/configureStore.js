import { createStore } from "redux";
import state from "./state/loadState.js";
import reducers from "./reducers/";


var configureStore = function () {
	console.log("reducers", reducers);
	console.log("state", state);
	var store = createStore(reducers);
	console.log("createStore", store);
	return store;
};

export default configureStore;
