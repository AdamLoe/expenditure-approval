import {connect} from "react-redux";

import { changeRequiredAttribute } from "../../actions/createRequest";

import Attribute from "../../Components/CreateRequest/Attribute";

let mapStateToProps = (state, {keyProp}) => {
	console.log("MAPSTA: Required Attribute", keyProp);
	return {
		keyProp: keyProp,
		value: state.createRequest[keyProp],
		isRequired: true
	};
};

let mapDispatchToProps = (dispatch, {keyProp}) => ({
	onKeyChange: null,
	onValueChange: (e) => {
		return dispatch(changeRequiredAttribute(keyProp, e.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
