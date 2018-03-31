import React from "react";
import { connect } from "react-redux";

import Login from "./Login";

import axios from 'axios';
class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('start axios');
		axios.get('http://127.0.0.1:2002', {
			auth: {
				username: 'adam',
				password: 'loe'
			}
		}).then(function(res) {
			console.log('it worked', res);
		}).catch(function(err) {
			console.log('it failed', err);
		})
	}

	render() {
		return (
			<div className="App">
				<Login/>
			</div>
		);
	}
}

export default connect()(App);
