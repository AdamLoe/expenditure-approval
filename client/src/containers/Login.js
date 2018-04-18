import React from "react";
import { connect } from "react-redux";

import login from '../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: '',
      pas: '',
    };
  }

  componentWillUnmount = (e) => {
    console.log('Yo the login component is unmounting', e);
  };

  handleUserChange = (evt) => {
		this.setState({
			usr: evt.target.value
		});
	};

  handlePassChange = (evt) => {
    this.setState({
      pas: evt.target.value
    })
  };

  render() {
    console.log('RENDER: Login');
    return (
      <div className="LoginContainer">
        <input className="LoginUsername" type="text" placeholder="username" onChange={this.handleUserChange}/>
        <input className="LoginPassword" type="password" placeholder="password" onChange={this.handlePassChange}/>
        <button onClick={()=> {
          this.props.login(this.state.usr, this.state.pas)
        }}>
          Login
        </button>
          { this.props.loginFail &&
              <h1>
                Error loggin in
              </h1>
          }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    loginFail: state.user.loginFail
  }
};

export default connect(mapStateToProps, { login })(Login);
