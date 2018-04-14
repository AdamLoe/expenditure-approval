import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import RequestPanel from "./RequestPanel";
import Admin from "./AdminPanel";
import Login from "./Login";

var App = ({userType, showAdminPanel, loggedIn}) => {
	console.log("Render: App");

	if (loggedIn === false) {
		return (
			<Login />
		);
	}

	return (
		<div className="App">
			<Header />
			{ (showAdminPanel) ?
				<AdminPanel />
				:
				<RequestPanel />
			}
		</div>
	);
};

var mapStateToProps = (state) => {
	console.log("MapSta: APP", state);
	return {
		userType: state.login.userType,
		loggedIn: state.login.loggedIn,
		showAdminPanel: (state.login.userType === "admin")
	};
};

export default connect(mapStateToProps)(App);
