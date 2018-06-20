export default (timestamp) => {

	let year = timestamp.slice(2,4);
	let month = timestamp.slice(5,7);
	let day = timestamp.slice(8,10);

	return month + "/" + day + "/" + year;
};
