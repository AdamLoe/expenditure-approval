import React from "react";
import { connect } from "react-redux";

import PaginationComponent from "../../components/Pagination";

import { updateFilters, getRequests } from "../../actions/requests";

let Pagination = ({pageNum, updateFilters, getRequests}) => {
	console.log("RENDER: Pagination");

	let changePage = (newPage) => {
		console.log("Changed page", newPage);

		updateFilters("pageNum", newPage);
		getRequests("pageNum", newPage);
	};
	return (
		<PaginationComponent
			pageNum={pageNum}
			changePage={changePage}
		/>
	);
};

let mapState = (state) => {
	console.log("MAPSTA: Pagination");
	console.log(state.requests);
	return {
		pageNum: state.requests.filters.pageNum
	};
};

export default connect(mapState, {updateFilters, getRequests})(Pagination);