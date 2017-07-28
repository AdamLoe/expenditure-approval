var React = require('react');

var Login = require('./routes/Login')
var Home  = require('./routes/Home');
var Admin = require('./routes/Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: '',     pas: '',
            type: '',    nam: '',
            nextAprv: '',apprLimt: ''
        };
    }



    render() {
        if (!this.state.type) {
            return (
                <Login />
            )
        } else if (this.state.type === 'Requester') {
            return (
                <Requester />
            )
        } else if (this.state.type === 'Admin') {
            return (
                <Admin />
            )
        } else if (this.state.type === 'Approver') {
            return (
                <Approver />
        )
        } else {
            return (
                <h1> User is unknown type? </h1>
            )
        }
    }
}

module.exports = App;
