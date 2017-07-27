var React = require('react');
var axios = require('axios');

var Home = require('./routes/Home');
var Admin = require('./routes/Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: '',     pas: '',
            type: '',    nam: '',
            nextAprv: '',apprLimt: '',
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.onLoginSubmit    = this.onLoginSubmit.bind(this);
    }

    handleUserChange(evt) {
        this.setState({
            usr: evt.target.value
        });
        console.log(this.state);
    }

    handlePassChange(evt) {
        this.setState({
            pas: evt.target.value
        });
    }

    onLoginSubmit(e) {
        e.preventDefault();
        var username = this.state.usr;
        var password = this.state.pas;
        axios.post('http://standardrequests.com/api/login', {
                username: username,
                password: password
        })
        .then(function(res){
            console.log('axios request worked');
            var {username, name, type, nextapprover, approvelimit} = JSON.parse(res.request.response);
            console.log(username, name, type, nextapprover, approvelimit);
        })
         .catch(function(err){
             console.log('its fucked!');
             console.log(err);
        })
    }

    render() {
        if (!this.state.type) {
            return (
                <div className='App'>
                    <form className="Login Form" onSubmit={this.onLoginSubmit}>
                        <h1> Login </h1>
                        <input type="text" id="username" placeholder="username" onChange={this.handleUserChange}/>
                        <input type="text" id="password" placeholder="password" onChange={this.handlePassChange}/>
                        <input type="button expanded" type="submit" value="Login" />
                    </form>
                </div>
            )
        } else if (this.state.type == 'manager') {

        } else if (this.state.type == 'admin') {


        } else if (this.state.type == 'property') {

        } else {
            return (
                <h1> HiYa </h1>
            )
        }
    }
}

module.exports = App;
