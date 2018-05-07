import React from "react";

export default ({
	toggleRequest,
	createDate, requestName, requesterName, approverName, amount
}) => {
	return (
		<div
			className="RequestRow"
			onClick={toggleRequest}
		>
			<div className="RequestColumn">
				{createDate}
			</div>
			<div className="RequestColumn">
				{requesterName}
			</div>
			<div className="RequestColumn">
				{approverName}
			</div>
			<div className="RequestColumn">
				{requestName}
			</div>
			<div className="RequestColumn">
				{amount}
			</div>
		</div>
	);
};