import React from "react";

export default ({children, hideCreateRequest}) => {
	return (
		<div className="CreateRequestPanel">
			<button
				className="exit"
				onClick={hideCreateRequest}
			>
				x
			</button>
			{ children }
		</div>
	)
}