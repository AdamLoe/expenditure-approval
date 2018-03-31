var callback = function(err, data) {
  if (err) {
      console.log('server responsed with error', err);
  } else {
      console.log('server succeeded', data.length)
  }
};

var { handler } = require('../index.js');
var event = require('../helpers/event');

handler(event, null, callback);