var fs = require('fs');

exports.updateFilters = function(req, res) {
    console.log('UpdateFilters called');
    var myJson = {
        key: "myValue"
    }
    fs.writeFile( "filename.json", JSON.stringify( myJson ), "utf8");
    var json = require('./filename.json');
    console.log('Filters is', json);
}