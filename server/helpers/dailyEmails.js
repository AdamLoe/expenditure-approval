/**
 * Created by Adam on 7/5/2018.
 */

exports.dailyEmails = () => {
	let { email } = event.user;
	let subject = "Password Update";
	let text = "";
	let html = "";
	sendEmail(email, subject, text, html);
};