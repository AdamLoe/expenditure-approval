var awsServerlessExpress = require('aws-serverless-express');

var routes = require('./router.js');

exports.handler = (event, context) => awsServerlessExpress.proxy( server, event, context)
