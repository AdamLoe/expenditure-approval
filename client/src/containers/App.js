import '../../scss/custom/App.scss';

import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import RequestPanel from "./RequestPanel";
import AdminPanel from "./AdminPanel";
import SettingsPanel from "./SettingsPanel";
import Login from "./Login";

let App = ({loggedIn, showAdminPanel, showSettings}) => {
	console.log("Render: App");

	if (loggedIn === false) {
		return (
			<Login />
		);
	}

	let Content = <RequestPanel />;
	if (showAdminPanel) { Content = <AdminPanel />; }

	return (
		<div className="App">
			<Header />
			<div className="SettingsContainer">
				{ showSettings &&
					<SettingsPanel />
				}
			</div>
			{ Content }
		</div>
	);
};

let mapStateToProps = (state) => {
	console.log("MapSta: APP", state);
	return {
		loggedIn: state.user.loggedIn,
		showAdminPanel: state.navigation.showAdminPanel,
		showSettings: state.navigation.showSettings
	};
};


export default connect(mapStateToProps)(App);
