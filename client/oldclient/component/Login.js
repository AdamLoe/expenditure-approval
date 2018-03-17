var React = require("react");
var axios = require("axios");
var RippleArea = require("./components/RippleArea");

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usr: "",     pas: ""
		};

		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.onLoginSubmit    = this.onLoginSubmit.bind(this);
	}

	handleUserChange(evt) {
		this.setState({
			usr: evt.target.value
		});
	}

	handlePassChange(evt) {
		this.setState({
			pas: evt.target.value
		});
	}

	onLoginSubmit(e) {
		var that = this;
		axios.get(this.props.url + "/api/login", {
			auth: {
				username: this.state.usr,
				password: this.state.pas
			}
		}).then(function(res){
			console.log("axios request worked", res);
			const { user, filters } = JSON.parse(res.request.response);
			user.password = that.state.pas;
			that.props.loginSetState(user, filters);
			that.setState({
				usr: null, pas: null
			});
		}).catch(function(err){
			console.log("Login Went Wrong");
			console.log(err);
		});
	}


	render() {
		return (
			<div className='LoginContainer' >
				<input className="LoginInputRow" type="text" placeholder="username" onChange={this.handleUserChange}/>
				<input className="LoginInputRow" type="password" placeholder="password" onChange={this.handlePassChange}/>
				<RippleArea onClick={this.onLoginSubmit}>
					<a>Login</a>
				</RippleArea>
			</div>
		);
	}
}

module.exports = Login;