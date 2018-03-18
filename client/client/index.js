import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import App from "./App";
import state from "./state/loadState";

const middleware = [
	thunk,
	createLogger({
		
	})
];

const store = createStore(
	reducers,
	applyMiddleware(...middleware)
);


render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById("app")
);