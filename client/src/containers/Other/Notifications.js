import React from "react";
import {connect} from "react-redux";

import { deleteNotification } from "../../actions/";

import NotificationModal from "../../components/Notification/NotificationModal";
import NotificationError from "../../components/Notification/NotificationError";

let Notifications = ({message, type, deleteNotification}) => {
	return (
		<div className="NotificationContainer">
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
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		message: state.notification.message,
		type: state.notification.type
	}
};

export default connect(mapStateToProps, { deleteNotification })(Notifications)
