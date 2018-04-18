/**
 * Created by Adam on 4/8/2018.
 */

module.exports = (user, token, filters, callback) => {
	callback(null, {
		"statusCode": 200,
		"body": JSON.stringify({
			username: user.username,
			token: token,
			userType: user.type,
			nickName: user.nickname,
			fullName: user.fullname,
			email: user.email,
			filters: filters
		})
	});
};