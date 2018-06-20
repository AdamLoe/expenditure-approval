import React from "react";

export default ({getRequests}) => {
	return (
		<div className="RequestHeader RequestRow">
			<strong className="RequestColumn Date">
				Created
			</strong>
			<strong className="RequestColumn Approver">
				Property
			</strong>
			<strong className="RequestColumn Requester">
				Approver
			</strong>
			<strong className="RequestColumn Name">
				Name
			</strong>
			<strong className="RequestColumn Amount">
				Amount
			</strong>
		</div>

	)
}

