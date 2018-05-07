import React from "react";
import { connect } from "react-redux";

import RequestHeader from "../../components/Requests/RequestHeader";
import RequestItem from "./RequestItem";

import { getRequests } from "../../actions/requests";

import compareArrays from "../../helpers/compareArrays";

class RequestPanel extends React.Component {
	constructor(props) {
		super(props);
		console.log('Mount: RequestPanel');
		this.props.getRequests();
	}

	shouldComponentUpdate(nextProps) {
		console.log('ShoUpd: RequestPanel');

		return !(
			compareArrays(nextProps.requestIds, this.props.requestIds) &&
			this.props.showCards === nextProps.showCards
		);
	}

	render() {
		console.log("RENDER: RequestPanel");
		let {requestIds, showCards, getRequests} = this.props;

		return (
			<div className="RequestPanel">
				<RequestHeader
					showCards={showCards}
					getRequests={getRequests}
				/>
				{
					requestIds.map((id, index) => (
						<RequestItem
							id={id}
							key={id}
							index={index}
						/>
					))
				}
			</div>
		);
	}

}

let mapStateToProps = (state) => {
	console.log("MapSta: RequestPanel");
	return {
		requestIds: state.requests.array.map(req => req.requestid),
		showCards: state.requests.showCards
	};
};


export default connect(mapStateToProps, { getRequests })(RequestPanel);
