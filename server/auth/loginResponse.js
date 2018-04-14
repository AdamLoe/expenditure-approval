/**
 * Created by Adam on 4/8/2018.
 */

module.exports = (user, token, filters, callback) => {
	callback(null, {
		"statusCode": 200,
		"body": JSON.stringify({
			userType: user.type,
			token: token,
			filters: filters
		})
	});
};