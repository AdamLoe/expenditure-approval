import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Hello
			</div>
		);
		/*
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
        */
	}
}

module.exports = App;
