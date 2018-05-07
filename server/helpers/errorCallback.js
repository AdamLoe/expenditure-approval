module.exports = (callback, statusCode, message, err=null) => {
	return callback(null, {
		"statusCode": statusCode,
		"body": JSON.stringify({
			message: message,
			err: err
		})
	});
};
