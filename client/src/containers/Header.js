import React from "react";
import { connect } from "react-redux";

import UserGreeting from "../components/Header/UserGreeting";
import UserButton   from "../components/Header/ProfileButton";
import UserDropdown from "../components/Header/UserDropdown";
import ToggleAdmin from "../components/Header/ToggleAdmin";

import {logout, gotoSettings, toggleAdmin, toggleUserDropdown} from "../actions/index";

var Header = ({
	nickName, fullName,	showAdminPanel, isAdmin,  showUserDropdown, showSettings,
	logout, gotoSettings, toggleAdmin, toggleUserDropdown
}) => {
	console.log("RENDER: Header", showSettings);
	return (
		<div className="HeaderContainer">
			<div className="HeaderStatic">
				<UserGreeting name={nickName} />
				<UserButton
					name={fullName}
					onClick={toggleUserDropdown}
				/>
			</div>
			{ showUserDropdown &&
				<UserDropdown
					gotoSettings={gotoSettings}
					logout={logout}
				/>
			}
			{ isAdmin &&
				<ToggleAdmin
					showAdminPanel={showAdminPanel}
					toggleAdmin={toggleAdmin}
				/>
			}
		</div>
	);
};

let mapStateToProps = (state) => {
	console.log("MAPSTA: HEADER");
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

export default connect(mapStateToProps, {logout, gotoSettings, toggleAdmin, toggleUserDropdown})(Header);