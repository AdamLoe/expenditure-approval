import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers/";
import customMid from "./middleware/";

const middleware = applyMiddleware(
	customMid,
	thunk,
	logger
);

export const store = createStore(
	reducers,
	middleware
);
