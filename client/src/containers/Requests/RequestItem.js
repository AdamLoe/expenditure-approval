import React from "react";
import {connect} from "react-redux";

import { toggleRequest } from "../../actions/index";

import RequestItemCard from "../../components/Requests/RequestItemCard";
import RequestItemRow  from "../../components/Requests/RequestItemRow";

let RequestItem = ({ showCards, ...props}) => {
	console.log("RENDER: RequestItem");
	if (showCards) {
		return (
			<RequestItemCard
				{...props}
			/>
		);

	}
	else {
		return (
			<RequestItemRow
				{...props}
			/>
		);

	}
};

let mapStateToProps = (state, {id, index}) => {
	console.log('MAPSTA: RequestItem');

	let request = state.requests.array[index];
	return {
		updatedate: request.updatedate,
		createdate: request.createdate,
		name: request.requestname,
		amount: request.amount,
		unitname: request.unitname,
		requestorName: request.requestorid,
		approverName: request.approverid,
		description: request.description,
		attributes: request.attributes
	};
};

let mapDispatchToProps = (dispatch, {index}) => {
	return {
		toggleRequest: () => dispatch(toggleRequest(index)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);
