'use strict';

app = require('./server.js');

exports.handler = (event, context, callback) => {
    server(event, context, callback);
    callback(null, event.response);

    console.log('callback failed, index.js');
    callback('callback failed, index.js');
}
