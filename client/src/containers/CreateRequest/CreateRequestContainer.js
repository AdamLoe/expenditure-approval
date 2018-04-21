import React from "react";
import {connect} from "react-redux";

import CreateRequestPanel from "../../components/CreateRequest/CreateRequestPanel";
import { hideCreateRequest } from "../../actions/index";
import submitCreateRequest from "../../actions/createRequest";

import RequestPresets from "../../components/CreateRequest/RequestPresets";
import { setRequestType } from "../../actions/createRequest";


import RequiredAttribute from "./RequiredAttribute";
import OptionalAttribute from "./OptionalAttribute";


let CreateRequestContainer = ({
	requestType, attributeIds,
	hideCreateRequest, submitCreateRequest, setRequestType
}) => {
	console.log("RENDER: CreateContainer");

	return (
		<CreateRequestPanel
			hideCreateRequest={hideCreateRequest}
			submitCreateRequest={submitCreateRequest}
		>
			<RequiredAttribute keyProp="Name"/>
			<RequiredAttribute keyProp="Amount"/>
			<RequiredAttribute keyProp="Description"/>
			<RequiredAttribute keyProp="UnitName"/>
			<RequestPresets
				currentPreset={requestType}
				setRequestType={setRequestType}
			/>
			{ attributeIds.map((id, index) =>
				<OptionalAttribute
					id={id}
					index={index}
				/>
			)}
		</CreateRequestPanel>
	);
};

let mapStateToProps = (state) => {
	console.log("MAPSTA: CreateContainer");
	return {
		requestType: state.createRequest.type,
		attributeIds: state.createRequest.attributes.map((attr)=> {
			return attr.id;
		})
	};
};

let dispatches = {
	hideCreateRequest,
	submitCreateRequest,
	setRequestType
};

export default connect(mapStateToProps, dispatches)(CreateRequestContainer);
