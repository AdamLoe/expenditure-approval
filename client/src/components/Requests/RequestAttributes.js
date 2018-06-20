import React from "react";

export default ({ attributes }) => {
	let attrList = attributes.map( attr => {
		let { key, value } = JSON.parse(attr);
		return [key, value];
	});
	console.log("got attributes", attrList);
	return (
		<div className="RequestAttributes">
			<div className="Heading">
				Attributes
			</div>
			{attributes.map( attr => {
				let { key, value } = JSON.parse(attr);
				return (
					<div key={key}
						className="attribute">
						<div className="key">{ key }</div>
						<div className="value">{ value }</div>
					</div>
				);
			})}
		</div>
	);
};