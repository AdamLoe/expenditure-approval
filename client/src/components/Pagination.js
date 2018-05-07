import React from "react";

export default ({ changePage, pageNum }) => {
	let prevPage = () => {
		changePage(pageNum-1);
	};

	let nextPage = () => {
		changePage(pageNum+1);
	};

	return (
		<div className="Pagination">
			<button onClick={prevPage}>
				Previous
			</button>
			{ pageNum }
			<button onClick={nextPage}>
				Next
			</button>
		</div>
	);
};