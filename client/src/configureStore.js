import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import state from "./state/loadState.js";
import reducers from "./reducers/";
import customMid from './middleware/';


var configureStore = () => {
	return createStore(
		reducers,
		applyMiddleware(customMid, thunk, logger)
	);
}
export default configureStore;
