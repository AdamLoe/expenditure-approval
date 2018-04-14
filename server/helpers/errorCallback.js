module.exports = (callback, statusCode, message, err=null) => {
	return callback(null, {
		"statusCode": status,
		"body": JSON.stringify({
			message: message,
			err: err
		})
	});
};