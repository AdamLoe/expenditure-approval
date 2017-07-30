var React = require('react');

var Login     = require('./routes/Login')
var Approver  = require('./routes/Approver')
var Requester = require('./routes/Requester');
var Admin     = require('./routes/Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                usr: '',     pas: '',
                type: '',    nam: '',
                nextAprv: '',apprLimt: ''
            },
            filters: {
                status: {},
                property: {},
                approvers: {},
                period: {}
            }
        };

        this.loginSetState = this.loginSetState.bind(this);
    }

    loginSetState(user, filters) {
        console.log('got user', user);
        console.log('got filters', filters);
        this.setState({
            user: user,
            filters: filters
        })
    }

    render() {
        if (!this.state.user.type) {
            return (
                <Login loginSetState={this.loginSetState}/>
            )
        } else if (this.state.user.type === 'Requester') {
            return (
                <Requester state={this.state}/>
            )
        } else if (this.state.user.type === 'Admin') {
            return (
                <Admin state={this.state}/>
            )
        } else if (this.state.user.type === 'Approver') {
            return (
                <Approver state={this.state}/>
        )
        } else {
            return (
                <h1> User is unknown type? </h1>
            )
        }
    }
}

module.exports = App;
