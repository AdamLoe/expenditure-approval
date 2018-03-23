import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./containers/Root";
import configureStore from "./configureStore";

const store = configureStore();

render(
	<Router>
		<Root store={store} />
	</Router>
	, document.getElementById("app")
);