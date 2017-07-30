var React = require('react');
var axios = require('axios');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: '',     pas: ''
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
        e.preventDefault();
        axios.get('https://standardrequests.com/api/login', {
            auth: {
                username: this.state.usr,
                password: this.state.pas
            }
        }).then(function(res){
            console.log('axios request worked');
            const { user, filters } = JSON.parse(res.request.response);
            user.password = that.state.pas;
            that.setState({
                usr: 'null', pas: 'null'
            });
            that.props.loginSetState(user, filters)
        }).catch(function(err){
            console.log('Login Went Wrong');
            console.log(err);
        })
    }


    render() {
        return (
            <div className='App' >
                <form className="Login Form" onSubmit={this.onLoginSubmit}>
                    <h1> Login </h1>
                    <input type="text" id="username" placeholder="username" onChange={this.handleUserChange}/>
                    <input type="text" id="password" placeholder="password" onChange={this.handlePassChange}/>
                    <input type="button expanded" type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

module.exports = Login;