import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers/";
import state from "./state/loadState.js";

const configureStore = () => {
	const store = createStore(
		reducers,
		applyMiddleware(thunk, createLogger())
	)

	return store;
};

export default configureStore;

