import React from "react";
import {connect} from "react-redux";

export default ({nickName, fullName, email, exitSettings}) => {
	return (
		<div className="SettingsPanel">
			<div className="FloatRightContainer">
				<img className="ExitSettingsImg"
					 onClick={exitSettings}
					 src="http://localhost:2002/torso.png"
				/>
			</div>
			<h2>Settings</h2>
			<div className="Settings">
				<div className="SettingsRow">
					<h3 className="cell medium-6"> {nickName} </h3>
					<input className="cell medium-6"/>
				</div>
				<div className="SettingsRow">
					<h3 className="cell medium-6"> {fullName }  </h3>
					<input className="cell medium-6"/>
				</div>
				<div className="SettingsRow">
					<h3 className="cell medium-6"> {email} </h3>
					<input className="cell medium-6"/>
				</div>
			</div>
		</div>
	);
};

