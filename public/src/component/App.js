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
                username: 'terryB',  password: 'terry',
                type: '',  name: ''
            },
            filters: {
                status: {
                    current: 'ALL0',
                    options: []
                },
                property: {
                    current: 'ALL1',
                    options: []
                },
                approver: {
                    current: 'eddyG',
                    options: []
                },
                period: {
                    current: 'ALL3',
                    options: []
                }
            }
        };

        this.loginSetState = this.loginSetState.bind(this);
    }

    loginSetState(user, filters) {
        console.log('got user', user);
        console.log('got filters', filters);
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
                <Requester state={this.state}/>
            )
        } else if (this.state.user.type === 'admin') {
            return (
                <Admin state={this.state}/>
            )
        } else if (this.state.user.type === 'approver') {
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
