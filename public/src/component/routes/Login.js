var React = require('react');


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: '',     pas: ''
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.onLoginSubmit    = this.onLoginSubmit.bind(this);
        this.onLoginAccept    = this.onLoginAccept.bind(this);
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

    onLoginAccept (user) {
        this.setState({
            type: user.type
            name: user.name

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
            const {username, name, type } = user;
            that.onLoginAccept(user);
            console.log(username, name, type);

        }).catch(function(err){
            console.log('its fucked!');
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