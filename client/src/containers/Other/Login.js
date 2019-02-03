import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import login from "../../actions/login";
import LoginList from "./LoginList";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usr: "",
			pas: "",
		};
	}
	
	componentWillUnmount = (e) => {
		console.log("Yo the login component is unmounting", e);
	};

	login = () => {
		this.props.login(this.state.usr, this.state.pas);
	};

	usernameKeyPress = (e) => {
		if (e.key === "Enter") {
			ReactDOM.findDOMNode(this.refs.PasswordField).focus();
		}
	};

	passwordKeyPress = (e) => {
		if (e.key === "Enter") {
			this.login();
		}
	};

	handleUserChange = (evt) => {
		this.setState({
			usr: evt.target.value
		});
	};

	handlePassChange = (evt) => {
		this.setState({
			pas: evt.target.value
		});
	};

	render() {
		console.log("RENDER: Login");
		return (
			<div className="LoginContainer">
				<h3> Log In </h3>
				<input
					className="LoginUsername" type="text" placeholder="Email Address" onChange={this.handleUserChange}
					spellCheck="false" autoCorrect="off" autoCapitalize="off"
					onKeyPress={this.usernameKeyPress} autoFocus
				/>
				<input
					className="LoginPassword" type="password" placeholder="Password" onChange={this.handlePassChange}
					spellCheck="false" autoCorrect="off" autoCapitalize="off"
					onKeyPress={this.passwordKeyPress} ref="PasswordField"
				/>
				<button onClick={this.login}>
					Log In
				</button>
				<LoginList />
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		loginFail: state.user.loginFail
	};
};

export default connect(mapStateToProps, { login })(Login);
