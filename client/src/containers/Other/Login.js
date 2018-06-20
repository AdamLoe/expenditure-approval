import React from "react";
import { connect } from "react-redux";

import login from "../../actions/login";

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
				spellcheck="false" autocorrect="off" autocapitalize="off"
			/>
			<input
				className="LoginPassword" type="password" placeholder="Password" onChange={this.handlePassChange}
				spellcheck="false" autocorrect="off" autocapitalize="off"
			/>
			<button onClick={()=> {
				this.props.login(this.state.usr, this.state.pas);
			}}>
				Log In
			</button>
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
