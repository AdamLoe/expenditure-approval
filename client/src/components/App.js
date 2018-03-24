import React from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './Login';

import { example } from '../actions/';

const App = ({dispatch}) => (
	<div className="App">
		<Login/>
		{/*
		<div onClick={()=> dispatch(example())}>
			Hello
		</div>
		*/}
	</div>
)

export default connect()(App)
