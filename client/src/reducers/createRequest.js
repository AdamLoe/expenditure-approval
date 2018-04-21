import presetList from "../components/requestPresets";

let initialState = {
	Name: "",
	Amount: 0,
	UnitName: "",
	Description: "",
	Type: "",
	attributes: [
	]
};

let setNewPreset = (newType) => {
	let presets;
	presets = presetList[newType].map(
		(type, index) => {
			return {key: type, value: "", id: index};
		});
	return presets;

};

let updateAttr = (attr, index, key, value) => {
	let newAttr;
	newAttr = [
		...attr.slice(0,index),
		{key:key, value:value, id: attr[index].id},
		...attr.slice(index+1)
	];
	return newAttr;
};

let deleteAttr = (attr, index) => {
	let newAttr;
	newAttr = [
		...attr.slice(0,index),
		...attr.slice(index+1)
	]
	return newAttr;
}

export default (state=initialState, {type, value, key, index}) => {
	switch(type) {
		case "CreateSuccess":
			return state;
		case "CreateFail":
			return state;
		case "setRequestType":
			return {
				...state,
				type: value,
				attributes: setNewPreset(value)
			};
		case "changeOptionalAttribute":
			return {
				...state,
				attributes: updateAttr(state.attributes, index, key, value)
			};
		case "changeRequiredAttribute":
			return {
				...state,
				[key]: value
			};
		case "deleteAttribute":
			return {
				...state,
				attributes: deleteAttr(state.attributes, index)
			}
		default:
			return state || initialState;
	}
};
