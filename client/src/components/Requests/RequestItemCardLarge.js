import React from "react";

export default ({
	toggleRequest,
	requestId, createDate, updateDate, unitName, status,
	requestName, requesterName, approverName, amount
}) => {
	return (
		<div
			className="RequestRow"
			onClick={toggleRequest}
		>
			<div className="RequestColumn">
				{requestId}
			</div>
			<div className="RequestColumn">
				{createDate}
			</div>
			<div className="RequestColumn">
				{updateDate}
			</div>
			<div className="RequestColumn">
				{unitName}
			</div>
			<div className="RequestColumn">
				{status}
			</div>
			<div className="RequestColumn">
				{requestName}
			</div>
			<div className="RequestColumn">
				{requesterName}
			</div>
			<div className="RequestColumn">
				{approverName}
			</div>
			<div className="RequestColumn">
				{amount}
			</div>
		</div>
	);
};