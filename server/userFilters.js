var fs = require('fs');

var callback = function(data) {
    console.log('json filter callback', data)
}

exports.updateFilters = function(req, res) {
    console.log('UpdateFilters called');
    var myJson = {
        key: "myValue"
    }
    fs.writeFile( "filename.json", JSON.stringify( myJson ), "utf8", callback);
}

exports.getFilters = function() {
    var json = require('../filename.json');
    return json;
}