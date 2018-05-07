let initialState = {
	showCards: false,
	apiFails: 0,
	oldFilters: {

	},
	filters: {
		pageNum: 1
	},
	array: [
<<<<<<< HEAD
	]
};

let exampleArray = [
	{
		requestId: 1,
		requesterId: 1,
		approverId: 2,
		unitName: "Apt#219",
		amount: 400,
		requestName: "Groceries",
		status: "In Progress",
		createDate: "2018-04-21 07:54:15.657899",
		updateDate: "2018-04-22 09:42:15.657899"
	},
	{
		requestId: 2,
		requesterId: 1,
		approverId: 2,
		unitName: "Apt#219",
		amount: 400,
		requestName: "Apples",
		status: "In Progress",
		createDate: "2018-04-21 07:54:15.657899",
		updateDate: "2018-04-22 09:42:15.657899"
	}
];
/*
 let arr = state.array;
 let newItem = arr[index];
 newItem.showBig = !newItem.showBig;
 let newArray = arr.slice(0, index).concat(newItem, arr.slice(index + 1));
 return {
 	...state,
 	array: newArray
 }

 */

export default (state=initialState, { type, index, array, key, value }) => {
=======
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
>>>>>>> origin/master
	switch(type) {

		case "GotRequestsSuccess":
			console.log('got array', array);
			return {
				...state,
				array: array,
				apiFails: 0
			};

		case "GotRequestsFail":
			return {
				...state,
				filters: state.oldFilters,
				apiFails: state.apiFails + 1
			};

		case "UpdateRequestFilters":
			return {
				...state,
				oldFilters: state.filters,
				filters: {
					...state.filters,
					[key]: value
				}
			};

		case "toggleRequest":
			return {
				...state,
				array: state.array.map((item, itemIndex) => {
					return {
						...item,
						showBig: (index===itemIndex) ? !item.showBig : item.showBig
					};
				})
			};

		case "toggleShowCards":
			return {
				...state,
				array: state.array.map((item) => {
					item.showBig = false;
					return item;
				}),
				showCards: !state.showCards
			};


		default:
			return state || initialState;
	}
};
