import React from "react";
import { imgUrl } from "../../constants";

import { connect } from "react-redux";

import { prevPage, nextPage } from "../../actions/pagination";


let PaginationComponent = ({
	pageNum,
	prevPage, nextPage,
	hideBack, hideForward
}) => {
	//console.log("RENDER: Pagination");

	return (
		<div className="Pagination">
			<button onClick={prevPage} className={(hideBack)? "hidden" : "shown"}>
				<img src={imgUrl+"baseline-keyboard_arrow_left-24px.svg"} />
			</button>
			{ pageNum }
			<button onClick={nextPage} className={(hideForward)? "hidden" : "shown"}>
				<img src={imgUrl+"baseline-navigate_next-24px.svg"} />
			</button>
		</div>
	);
};


let mapState = (state) => {
	//console.log("MAPSTA: Pagination");

	return {
		pageNum: state.requests.filters.pageNum,
		hideBack: state.requests.filters.pageNum === 1,
		hideForward: state.requests.array.length < state.requests.maxItems
	};
};

export default connect(mapState, {prevPage, nextPage})(PaginationComponent);