/* eslint no-fallthrough: 0
 */

let initialState = {
	showCards: false,
	array: [
		{
			id: "1122",
			userName: "bertL",
			nickName: "Bert",
			email: "bertloe@comcast.net",
			showBig: false
		},
		{
			id: "1123",
			userName: "sarahP",
			nickName: "Sarah",
			email: "sarahP@comcast.net",
			showBig: false
		},
		{
			id: "1124",
			userName: "tonyaB",
			nickName: "Charleston Square",
			email: "tonyaB@comcast.net",
			showBig: false
		},
		{
			id: "1125",
			userName: "bettyC",
			nickName: "Village Square",
			email: "bettyC@comcast.net",
			showBig: false
		},
	]
};

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