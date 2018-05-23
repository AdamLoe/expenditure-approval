exports.getTime = function() {
	let a = new Date();
	let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	year  =  a.getFullYear();
	month =  months[a.getMonth()];
	date  = a.getDate();
	hour  =  a.getHours();
	min   = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();

	const time = month + " " + date + " "  + year + " " + hour + ":" + min;
	return time;
};

exports.displayTime = function() {
	let str = "";

	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	str += hours + ":" + minutes + ":" + seconds + " ";
	if(hours > 11){
		str += "PM";
	} else {
		str += "AM";
	}
	return str;
};
