import React from "react";
import { connect } from "react-redux";

import Login from "./Login";

const App = () => (
	<div className="App">
		<Login/>
	</div>
);

export default connect()(App);
