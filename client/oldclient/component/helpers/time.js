exports.getSimpleTime = function(timestamp) {
    var a = new Date( timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    const date = a.getDate();
    const time = month + ' ' + date + ', '  + year;
    return time;

};

exports.getDetailedTime = function(timestamp) {
    var a = new Date( timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    const date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();

    const time = hour + ':' + min + ' '+ month + ' ' + date + ' '  + year;
    return time;
};