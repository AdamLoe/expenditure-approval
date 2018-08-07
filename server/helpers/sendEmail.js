const nodemailer = require("nodemailer");

exports.sendEmail = (toAddress, subject, text, html) => {
	return new Promise(function(resolve) {
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "standardrequestsTEST", // generated ethereal user
				pass: "testPassword" // generated ethereal password
			}
		});

		let mailOptions = {
			from: "\"Standard Requests\" <standardrequestsTEST@gmail.com>", // sender address
			to: toAddress, // list of receivers
			subject: subject, // Subject line
			text: text, // plain text body
			html: html // html body "<b>Hello world?</b>"
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (!error) {
				resolve();
			} else {
				console.log(error);
			}
		});
	});
};

