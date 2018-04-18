import React from "react";
import {connect} from "react-redux";

import { exitSettings } from "../actions/index";

import SettingsPanel from "../components/SettingsPanel";
/*
 let SettingsPanel = ({nickName, fullName, email, exitSettings}) => {
 return (
 <SettingsPanel
 ...props />
 );
 };

 */

let mapStateToProps = (state) => {
	return {
		nickName: state.user.nickName,
		fullName: state.user.fullName,
		email: state.user.email
	};
};


export default connect(mapStateToProps, { exitSettings})(SettingsPanel);

