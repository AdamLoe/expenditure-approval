import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from './configureStore';

var Store = configureStore()

render(
	<Provider store={Store}>
		<App />
	</Provider>
	, document.getElementById("app")
);
