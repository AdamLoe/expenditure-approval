import React from "react";
import {connect} from "react-redux";

import { toggleRequest } from "../actions/";

import RequestItemCard from "../components/Requests/RequestItemCard";
import RequestItemRow  from "../components/Requests/RequestItemRow";

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

	let user = state.requests.array.filter(req => (req.id === id))[0];
	return {
		userName: user.userName,
		email: user.email,
		nickName: user.nickName,
		pasChange: "5 Months ago",
		showBig: user.showBig,
		showCards: state.requests.showCards
	};
};

let mapDispatchToProps = (dispatch, {index}) => {
	return {
		toggleRequest: () => dispatch(toggleRequest(index)),

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);

