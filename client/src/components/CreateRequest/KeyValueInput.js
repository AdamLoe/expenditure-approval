import React from "react";
import {connect} from "react-redux";

let KeyValueInput = ({key, value}) => {
	return (
		<div>
			<h4> {key} : {value} </h4>
		</div>
	)
};

let mapStateToProps = (state, {id, index}) => {
	return {
		key: state.createRequest.attributes[index],
		value: state.createRequest.attributes[index]
	};
};

export default connect(mapStateToProps, {})(KeyValueInput);
