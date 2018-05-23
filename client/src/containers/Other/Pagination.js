import React from "react";

import { connect } from "react-redux";

import { prevPage, nextPage } from "../../actions/pagination";


let PaginationComponent = ({ numItems, maxItems, pageNum, prevPage, nextPage }) => {
	console.log("RENDER: Pagination");

	return (
		<div className="Pagination">
			<button onClick={prevPage} hidden={pageNum === 1}>
				Previous
			</button>
			{ pageNum }
			<button onClick={nextPage} hidden={numItems < maxItems}>
				Next
			</button>
		</div>
	);
};


let mapState = (state) => {
	console.log("MAPSTA: Pagination");

	return {
		numItems: state.requests.array.length,
		maxItems: state.requests.maxItems,
		pageNum: state.requests.filters.pageNum
	};
};

export default connect(mapState, {prevPage, nextPage })(PaginationComponent);