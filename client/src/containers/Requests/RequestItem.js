import React from "react";
import {connect} from "react-redux";

import { toggleRequest } from "../../actions/index";

import RequestItemCardSmall from "../../components/Requests/RequestItemCardSmall";
import RequestItemCardLarge from "../../components/Requests/RequestItemCardLarge";
import RequestItemRowSmall from "../../components/Requests/RequestItemRowSmall";
import RequestItemRowLarge from "../../components/Requests/RequestItemRowLarge";


let RequestItem = ({ showCards, showBig, ...props}) => {
	console.log("RENDER: RequestItem");
	console.log(props);

	let renderSmall = <RequestItemCardSmall {...props} />;
	let renderLarge = <RequestItemCardLarge {...props} />;

	if (showCards) {
		renderSmall = <RequestItemRowSmall {...props} />;
		renderLarge = <RequestItemRowLarge {...props} />;
	}

	return (
		<div className="RequestItem">
			{ renderSmall }
			{ showBig &&
				renderLarge
			}
		</div>
	);
};

let mapStateToProps = (state, {id, index}) => {
	console.log('MAPSTA: RequestItem');

	let req = state.requests.array[index];
	return {
		requestId: req.requestid,
		updateDate: req.updatedate,
		createDate: req.createdate,
		requestName: req.requestname,
		amount: req.amount,
		unitName: req.unitname,
		requesterName: 'Johnny',
		approverName: 'April',
		description: req.description,
		attributes: req.attributes,
		showBig: req.showBig,
		status: req.status
	};
};

let mapDispatchToProps = (dispatch, {index}) => {
	return {
		toggleRequest: () => dispatch(toggleRequest(index)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);