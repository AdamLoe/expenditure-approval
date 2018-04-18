import React from "react";

export default ({ nextPage, prevPage, page }) => {

	return (
		<div className="Pagination">
			<button onClick={prevPage}>
				Previous
			</button>
			{ page }
			<button onClick={nextPage}>
				Next
			</button>
		</div>
	);
};