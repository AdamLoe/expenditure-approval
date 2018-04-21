import React from "react";

export default ({children, hideCreateRequest, submitCreateRequest}) => {
	return (
		<div className="CreateRequestPanel">
			<div className="Relative">
				<button
					className="ExitCreateRequest"
					onClick={hideCreateRequest}
				>
				x
				</button>
			</div>
			{ children }
			<button
				onClick={submitCreateRequest}
			>
				Submit
			</button>
		</div>
	)
}
