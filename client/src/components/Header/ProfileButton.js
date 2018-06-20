import React from "react";

export default ({ name, onClick })  => {
	console.log("ProfileButton");
	return (
		<div
			className="ProfileButton"
			 onClick={onClick}
		>
			<h1> { name }  </h1>
		</div>
	);
};

