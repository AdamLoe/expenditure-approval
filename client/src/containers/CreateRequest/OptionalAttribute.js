import {connect} from "react-redux";

import { changeOptionalAttribute, deleteAttribute } from "../../actions/createRequest";

import Attribute from "../../Components/CreateRequest/Attribute";

let mapStateToProps = (state, { id, index}) => {
	console.log('MAPSTA: Optional Attribute');
	return {
		keyProp: state.createRequest.attributes[index].key,
		value: state.createRequest.attributes[index].value,
		isRequired: false
	};
};


let mergeProps = (state, dispatchProps, {index}) => {
	console.log('MERPRO: Optional Attribute');
	return {
		...state,
		onKeyChange: (e) => {
			dispatchProps.changeOptionalAttribute(index, e.target.value, state.value);
		},
		onValueChange: (e) => {
			dispatchProps.changeOptionalAttribute(index, state.keyProp, e.target.value);
		},
		deleteAttribute: (e) => {
			dispatchProps.deleteAttribute(index);
		}
	};
};

export default connect(mapStateToProps, { changeOptionalAttribute, deleteAttribute}, mergeProps)(Attribute);