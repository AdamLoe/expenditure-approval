import React from "react";
import { connect } from "react-redux";

let AdminPanel = ({ }) => {
	console.log("RENDER: AdminPanel");
	return (
		<div className="AdminApp  cell">
			<h1>
				It's an admin panel
			</h1>
		</div>
	);
};

let mapStateToProps = (state) => {
	console.log("MapSta: AdminPanel", state);
	return {
	};
};


export default connect(mapStateToProps, {})(AdminPanel);