import React from "react";

import RequestAttributes from "./RequestAttributes";

let Attribute = ({ keyy, value }) => {
	return (
		<div className="attribute">
			<div className="key">
				{ keyy }
			</div>
			<div className="value">
				{ value }
			</div>
		</div>
	);
};

export default ({
	status, requestName, description,
	attributes
}) => {

	return (
		<div className="RequestLeftSide">
			<div className="Overview">
				<div className="Name">
					"{ requestName }"
				</div>
				<div className="Status">
					{ status }
				</div>
			</div>
			<div className="Description">
				{ description }
			</div>
			<div className="Heading">
				Details
			</div>
			<Attribute keyy="Request #" value={0}/>
			<Attribute keyy="Request Amount" value={0}/>
			<Attribute keyy="Property" value={0}/>
			<Attribute keyy="Unit Name" value={0}/>
			<Attribute keyy="Item Type" value={0}/>
			<RequestAttributes attributes={attributes} />
		</div>
	)
}
