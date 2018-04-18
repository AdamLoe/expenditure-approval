import React from 'react';

export default ({ name }) => {
	console.log("UserGreeting");
	return (
		<h1 className="UserGreeting">
			Welcome { name }
		</h1>
	);
};