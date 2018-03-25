import React from 'react';
import { connect } from 'react-redux';

import { loginAction } from '../actions/'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: '',
      pas: '',
      usdaResponse: 'hmm',
      foodItems: []
    }
  }

  handleUserChange = (evt) => {
		this.setState({
			usr: evt.target.value
		});
	}

  handlePassChange = (evt) => {
    this.setState({
      pas: evt.target.value
    })
  }

  render() {
    return (
      <div className="LoginContainer">
				<input className="LoginUsername" type="text" placeholder="username" onChange={this.handleUserChange}/>
				<input className="LoginPassword" type="password" placeholder="password" onChange={this.handlePassChange}/>
        <button onClick={ () => {
            this.props.dispatch(loginAction(this.state.usr, this.state.pas))
        }}>
          Login
        </button>
      </div>
    )
  }
}

export default connect()(Login);
