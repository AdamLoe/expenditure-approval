import React from "react";

export default ({userName, pasChange, email, nickName, showBig, toggleRequest}) => {
	return (
		<div className="RequestRow">
			<div className="RequestColumn">
				{userName}
			</div>
			<div className="RequestColumn">
				{pasChange}
			</div>
			<div className="RequestColumn">
				{email}
			</div>
			<div className="RequestColumn">
				{nickName}
			</div>
			<div className="RequestColumn">
				$100.00
			</div>
		</div>
	);
}

