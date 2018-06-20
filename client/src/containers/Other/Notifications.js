import React from "react";
import {connect} from "react-redux";

import { deleteNotification } from "../../actions/";

import Notification from "../../components/Notification/Notification";

let Notifications = ({message, timeout, deleteNotification}) => {
	return (
		<div className="FloatCenterContainer">
			<div className="NotificationContainer">
				{ (message !== null) &&
					<Notification
						message={message}
						timeout={timeout}
						delete={deleteNotification}
					/>
				}
			</div>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		message: state.notification.message,
		time: state.notification.time
	}
};

export default connect(mapStateToProps, { deleteNotification })(Notifications);

/*

	 { (type === "modal") &&
	 <NotificationModal
	 message={message}
	 deleteNotification={deleteNotification}
	 />
	 }
	 { (type === "error") &&
	 <NotificationError
	 message={message}
	 />
	 }
	 { (type === "small") &&
	 <NotificationSmall
	 message={message}
	 />
	 }

 */
