import React from "react";
import urls from "../../helpers/urls";
import { connect } from "react-redux";

import { updateRequestFilters } from "../../actions/requests";

let RequestFilters = ({
	currApprover, currRequester, currStatus,
	approvers, requesters,
	changeApprover, changeRequester, changeStatus,
	refresh
}) => {
	return (
		<div className="RequestFilters">
			<div className="Sort">
				<select
					value={currApprover}
					onChange={changeApprover}
				>
					<option className="option" value={-1}>
						Any Approver
					</option>
					{approvers.map(approver =>
						<option	className="option" value={approver.id}>
							{ approver.fullname }
						</option>
					)}
				</select>
				<select
					value={currRequester}
					onChange={changeRequester}
				>
					<option value={-1}>
						Any Property
					</option>
					{requesters.map(requester =>
						<option value={requester.id}>
							{ requester.fullname }
						</option>
					)}
				</select>
				<select
					value={currStatus}
					onChange={changeStatus}
				>
					{
						["Approved", "Denied", "In Process", "Cancelled"].map( str =>
							<option value={str}>
								{ str }
							</option>
						)
					}
				</select>
			</div>
			<div
				onClick={refresh}
				className="refresh"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
			</div>
		</div>
	);
};


let mapStateToProps = (state) => {
	return {
		currRequester: state.requests.filters.Requester,
		currApprover: state.requests.filters.Approver,
		currStatus: state.requests.filters.Status,
		approvers: state.user.approvers,
		requesters: state.user.requesters
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		changeApprover: (e) => dispatch(updateRequestFilters("Approver", e.target.value)),
		changeRequester: (e) => dispatch(updateRequestFilters("Requester", e.target.value)),
		changeStatus:   (e) => dispatch(updateRequestFilters("Status", e.target.value)),
		refresh: (e) => dispatch(updateRequestFilters())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(RequestFilters);