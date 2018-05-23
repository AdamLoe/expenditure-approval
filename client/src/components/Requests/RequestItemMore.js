import React from "react";

export default ({
	requestName, requesterName,
	children
}) => {
	console.log("RENDER: RequestIteMore");

	return (
		<div
			className="RequestRow"
		>
			<div className="RequestColumn">
				{requestName}
			</div>
			<div className="RequestColumn">
				{requesterName}
			</div>
			{ children }
		</div>
	);
};