import React from "react";

export default ({ attributes }) => {
	let attrList = attributes.map( attr => {
		let { key, value } = JSON.parse(attr);
		return [key, value];
	});
	console.log("got attributes", attrList);
	return (
		<div>
			Attributes
			{attributes.map( attr => {
				let { key, value } = JSON.parse(attr);
				return (
					<h4>
						{ key }
						{ value }
					</h4>
				);
			})}
		</div>
	);
};