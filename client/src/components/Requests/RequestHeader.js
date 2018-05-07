import React from "react";

export default ({showCards, getRequests}) => {
	console.log('header', showCards);
	if (showCards) {
		return (
			<div>

			</div>
		)
	} else {
		return (
			<div className="RequestHeader RequestRow">
				<div className="RequestColumn">
					Created
				</div>
				<div className="RequestColumn">
					Property
				</div>
				<div className="RequestColumn">
					Approver
				</div>
				<div className="RequestColumn">
					Requester
				</div>
				<div className="RequestColumn">
					Amount
				</div>
				<button onClick={getRequests}>
					Refresh
				</button>
			</div>

		)

	}
}

