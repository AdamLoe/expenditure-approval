import React from "react";

class Notification extends React.Component {
	constructor(props) {
		super(props);
		let { timeout, deleteNotification } = this.props;

		setTimeout(deleteNotification, timeout);
	}

	render() {
		return (
			<div className="Notification">
				{ this.props.message }
			</div>
		)
	}
}

export default Notification;