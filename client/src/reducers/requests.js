let initialState = {
	showCards: false,
	array: [
		{
			id: "1122",
			name: "",
			unitName: "",
			amount: "",
			date: "",
			requestorName: "",
			nextApprover: "",
			description: "",
			attributes: []
		}
	]
};

export default (state=initialState, { type, index }) => {
	switch(type) {
		case "toggleRequest":
			return {
				...state,
				array: state.array.map((item, itemIndex) => {
					return {
						...item,
						showBig: (index===itemIndex) ? !item.showBig : item.showBig
					}
				})
			};

		case "toggleShowCards":
			return {
				array: state.array.map(item => {
					item.showBig = false;
					return item;
				}),
				showCards: !state.showCards
			};

		default:
			return state || initialState;
	}
};
