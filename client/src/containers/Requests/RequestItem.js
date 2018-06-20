import React from "react";
import {connect} from "react-redux";

import { toggleRequest } from "../../actions/index";
import { submitComment, approveRequest, rejectRequest } from "../../actions/requests";

import RequestItemRow from "../../components/Requests/RequestItemRow";
import RequestDetails from "../../components/Requests/RequestDetails";
import RequestCommentSubmit from "../../components/Requests/RequestCommentSubmit";


let RequestItem = (props) => {
	//console.log("RENDER: RequestItem", props);

	let { showBig } = props;

	return (
		<div className="RequestItem">
			<RequestItemRow {...props} />
			{ showBig &&
			<div className="RequestRowMore">
				<RequestDetails {...props} />
				<RequestCommentSubmit {...props}/>
			</div>
			}
		</div>
	);
};

let mapStateToProps = (state, {id, index}) => {
	//console.log("MAPSTA: RequestItem", id, index);

	let req = state.requests.array[index];
	return {
		requestId: req.requestid,
		updateDate: req.updatedate,
		createDate: req.createdate,
		requestName: req.requestname,
		amount: req.amount,
		unitName: req.unitname,
		requesterName: "Johnny",
		approverName: "April",
		description: req.description,
		attributes: req.attributes,
		showBig: req.showBig,
		status: req.status,
		comments: req.comments
	};
};

let mapDispatchToProps = (dispatch, {id, index}) => {
	return {
		toggleRequest: () => dispatch(toggleRequest(index)),
		submitComment: () => dispatch(submitComment(id)),
		approveRequest: () => dispatch(approveRequest(id)),
		rejectRequest: () => dispatch(rejectRequest(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);