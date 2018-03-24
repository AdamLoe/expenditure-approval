exports.getDetailedTime = function() {
	var a = new Date();
	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	const date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();

	const time = month + " " + date + " "  + year + " " + hour + ":" + min;
	console.log("Made time", time, a);
	return time;
};