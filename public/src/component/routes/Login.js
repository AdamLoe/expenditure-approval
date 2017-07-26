var React = require('react');


class Login extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='Content' onSubmit={this.props.onLoginSubmit}>
                <form className="Login Form">
                    <h1> Login </h1>
                    <input type="text" id="username" placeholder="username" onChange={this.props.handleUserChange}/>
                    <input type="text" id="password" placeholder="password" onChange={this.props.handlePassChange}/>
                    <input type="button expanded" type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

module.exports = Login;