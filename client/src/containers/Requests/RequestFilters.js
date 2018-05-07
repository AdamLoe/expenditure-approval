import React from "react";
import { connect } from "react-redux";

import { getRequests, updateFilters } from "../../actions/requests";
import { toggleShowCards } from "../../actions/index";

import RequestFiltersComponent from "../../components/Requests/RequestFilters";

let RequestFilters = ({showCards, toggleShowCards, filters}) => {
	return (
		<RequestFiltersComponent
			showCards={showCards}
			toggleShowCards={toggleShowCards}
			filters={filters}
		/>
	);
};


let mapStateToProps = (state) => {
	return {
		showCards: state.requests.showCards,
		filters: state.requests.filters
	};
};

let mapDispatchToProps =  {
	toggleShowCards,
	getRequests,
	updateFilters
};

let mergeProps = (stateProps, dispatchProps) => {
	return {
		...stateProps,
		...dispatchProps,
		getRequests: (key, value) => dispatchProps.getRequestsFilterChange(stateProps.filters, key, value)
	};
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(RequestFilters);