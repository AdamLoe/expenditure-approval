import React from "react";

export default ({ logout, gotoSettings }) => {
	console.log("UserDropdown");
	return (
		<div className="FloatRightContainer">
			<div className="ProfileDropdown">
				<h1 onClick={gotoSettings}>
					Settings
				</h1>
				<h1 onClick={logout}>
					Logout
				</h1>
			</div>
		</div>
	);
};