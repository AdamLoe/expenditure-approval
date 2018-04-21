module.exports = (callback, statusCode, message, err=null) => {
	console.log('message', err.message);
	return callback(null, {
		"statusCode": statusCode,
		"body": JSON.stringify({
			message: message,
			err: err
		})
	});
};
