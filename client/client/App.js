var { Component } = require("react");

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch(userType) {
			case "Approver":
				return (
					<Approver />
				);
			case "Requester":
				return (
					<Requester />
				);
			default:
				return (
					<Login />
				);
		}
	}
}

module.exports = App;
