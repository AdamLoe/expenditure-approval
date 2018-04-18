import React from "react";

export default ({showAdminPanel, toggleAdmin}) => {
	return (
		<div className="ToggleAdmin">
			<button
				className="button primary"
				disabled={showAdminPanel}
				onClick={toggleAdmin}>
				Users
			</button>
			<button
				className="button primary"
				disabled={!showAdminPanel}
				onClick={toggleAdmin} >
				Requests
			</button>
		</div>
	);
};
