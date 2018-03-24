import React from 'react';
import { connect } from 'react-redux';
import { usda, nutrix } from '../axiosFile';
///
import knex from '../knexfile';

import { loginAction } from '../actions/'
class Login extends React.Component {
  constructor(props) {
    super(props);


    knex('alexa_assesment_log')
        .then(function(data) {
            console.log('data', data);
        })





    this.state = {
      usr: '',
      pas: '',
      usdaResponse: 'hmm',
      foodItems: []
    }


  }
  componentWillMount ( ) {
    var url = "https://developer.nrel.gov/api/";
    url += "alt-fuel-stations/v1/nearest.json?";
    url += "api_key=12LmPw8zCQSYLaa8p1Wa6e1qP2oKs0AuGh6H9acX";
    url += "&location=Denver+CO";

    var that = this;
    usda.get(url)
      .then(function(res) {
        var resp = JSON.stringify(res, null , 4);
        console.log('Response', res);
      })

    url =  "https://trackapi.nutritionix.com/v2/";
    url += "natural/nutrients";
    nutrix({
      method: 'post',
      url: url,
      data: {
        "query": "a whopper with extra cheese"
      }
    })
      .then(function(res) {
        console.log('res', res);
        console.log('food', res.data.foods);
        var foodList = []
        var foodList = Object.keys(res.data.foods).map((i) => {
              var returnData = res.data.foods[i]
              returnData.full_nutrients = [];
              return Object.keys(returnData).map(i=>
                  i + '=' + returnData[i]
              )
        })
        console.log('Foodlist', foodList)
        that.setState({
          foodItems: foodList
        })
        console.log(res);
      })

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
				{ /*
          <input className="LoginPassword" type="password" placeholder="password" onChange={this.handlePassChange}/>
          */
        }
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
