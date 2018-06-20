import React from "react";

import formatTimestamp from "../../helpers/time";

export default ({
	toggleRequest,
	createDate, requestName, requesterName, approverName, amount
}) => {
	return (
		<div
			className="RequestRow"
			onClick={toggleRequest}
		>
			<div className="RequestColumn Date">
				{formatTimestamp(createDate)}
			</div>
			<div className="RequestColumn Requester">
				{requesterName}
			</div>
			<div className="RequestColumn Approver">
				{approverName}
			</div>
			<div className="RequestColumn Name">
				{requestName}
			</div>
			<div className="RequestColumn Amount">
				{amount}
			</div>
		</div>
	);
};