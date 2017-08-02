var React = require('react');

var Login     = require('./Login')
var Approver  = require('./Approver/Approver')
var Requester = require('./Requester/Requester');
var Admin     = require('./Admin/Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'tonyaB',  password: 'tonya',
                type: 'approver',  name: ''
            },
            approvers: [

            ], requesters: [

            ]
        };

        this.loginSetState = this.loginSetState.bind(this);
    }

    loginSetState(user) {
        console.log('got user', user);
        this.setState({
            user: user
        })
    }

    render() {
        if (!this.state.user.type) {
            return (
                <Login loginSetState={this.loginSetState}/>
            )
        } else if (this.state.user.type === 'requester') {
            return (
                <Requester user={this.state.user}/>
            )
        } else if (this.state.user.type === 'admin') {
            return (
                <Admin user={this.state.user}/>
            )
        } else if (this.state.user.type === 'approver') {
            return (
                <Approver user={this.state.user}/>
        )
        } else {
            return (
                <h1> User is unknown type? </h1>
            )
        }
    }
}

module.exports = App;
