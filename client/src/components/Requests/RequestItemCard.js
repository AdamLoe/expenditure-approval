import React from "react";

export default ({userName, pasChange, email, nickName, showBig, toggleRequest}) => {
	return (
		<div>
			<ul onClick={toggleRequest}>
				Card
				<li>
					{userName}
				</li>
				<li>
					{pasChange}
				</li>
				<li>
					{email}
				</li>
				<li>
					{nickName}
				</li>
				<li>
					Noone
				</li>
				<li>
					Unlimited
				</li>
				<li>
					{ showBig }
				</li>
			</ul>
			{ showBig &&
				<h1> Big </h1>
			}
		</div>
	);
}

