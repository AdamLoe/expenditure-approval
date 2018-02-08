var AWS = require('aws-sdk');
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

var fs = require('fs');
var path = require('path');
var zip = new require('node-zip')();
zip.file('index.js');

var data = zip.generate({base64:false, compression:'DEFLATE'});
console.log(data);

/*
var params = {
    FunctionName: 'tutorial',
    ZipFile: data
};
lambda.updateFunctionCode(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
*/
