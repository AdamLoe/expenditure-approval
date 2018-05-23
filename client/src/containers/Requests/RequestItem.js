import React from "react";
import {connect} from "react-redux";

import { toggleRequest } from "../../actions/index";

import RequestItemRow from "../../components/Requests/RequestItemRow";
import RequestItemMore from "../../components/Requests/RequestItemMore";

import RequestAttributes from "../../components/Requests/RequestAttributes";
import RequestCommentSubmit from "../../components/Requests/RequestCommentSubmit";

let RequestItem = ({ showCards, showBig, ...props}) => {
	console.log("RENDER: RequestItem", props);

	return (
		<div className="RequestItem">
			<RequestItemRow {...props} />
			{ showBig &&
			<RequestItemMore {...props} >
				<RequestAttributes {...props} />
				<RequestCommentSubmit {...props}/>
			</RequestItemMore>
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
		status: req.status,
		comments: req.comments
	};
};

let mapDispatchToProps = (dispatch, {index}) => {
	return {
		toggleRequest: () => dispatch(toggleRequest(index)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);