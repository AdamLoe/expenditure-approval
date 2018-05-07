import React from "react";
import {connect} from "react-redux";

import { showCreateRequest} from "../../actions/index";

let CreateRequestSwitch = ({canCreateRequest, showCreateRequest}) => {
	if (canCreateRequest) {
		return (
			<div className="OpenCreateRequest">
				<button
					onClick={showCreateRequest}
				>
					Create Request
				</button>
			</div>
		)
	}
	else {
		return (
			<div className="CantCreateRequest">
			</div>
		)
	}
};

let mapStateToProps = (state) => {
	return {
		canCreateRequest: (state.user.userType === "admin")
	}
}

export default connect(mapStateToProps, {showCreateRequest})(CreateRequestSwitch)
