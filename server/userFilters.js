var fs = require('fs');

exports.updateFilters = function(req, res) {
    var myJson = {
        key: "myValue"
    }
    fs.writeFile( "filename.json", JSON.stringify( myJson ), "utf8");
}