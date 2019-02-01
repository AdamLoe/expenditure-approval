import React from "react";
import { connect } from "react-redux";

import UserGreeting from "../../components/Header/UserGreeting";
import UserButton   from "../../components/Header/ProfileButton";
import UserDropdown from "../../components/Header/UserDropdown";
import ToggleAdmin from "../../components/Header/ToggleAdmin";

import {logout, toggleSettings, toggleAdmin, toggleUserDropdown} from "../../actions/index";

let Header = ({
	nickName, fullName,	showAdminPanel, isAdmin,  showUserDropdown,
	logout, toggleSettings, toggleAdmin, toggleUserDropdown
}) => {
	//console.log("RENDER: Header", showSettings);
	return (
		<div className="Header">
			Hello, { nickName }
			{ isAdmin &&
				<button
					onClick={toggleAdmin}
				>
					{
						showAdminPanel ?
							<p> Goto Requests </p>
							:
							<p> Goto Users </p>
					}
				</button>
			}
			<button
				onClick={toggleSettings}
			>
				Settings
			</button>
			<button
				onClick={logout}
			>
				Logout
			</button>
		</div>

	);
};

let mapStateToProps = (state) => {
	//console.log("MAPSTA: HEADER");
	return {
		userType: state.user.userType,
		nickName: state.user.nickName,
		fullName: state.user.fullName,
		isAdmin: (state.user.userType === "admin"),
		showAdminPanel: state.navigation.showAdminPanel,
		showUserDropdown: state.navigation.showUserDropdown,
		showSettings: state.navigation.showSettings
	}
};

export default connect(mapStateToProps, {logout, toggleSettings, toggleAdmin, toggleUserDropdown})(Header);
