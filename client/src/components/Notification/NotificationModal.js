import React from "react";

export default ({message, deleteNotification}) => {
	return (
		<div className="NotificationModal">
			{ message }
			<button onClick={deleteNotification}>
				x
			</button>
		</div>
	)
}
