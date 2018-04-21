exports.getTime = function() {
	var a = new Date();
	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	const date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();

	const time = month + " " + date + " "  + year + " " + hour + ":" + min;
	return time;
};

exports.displayTime = function() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
};
