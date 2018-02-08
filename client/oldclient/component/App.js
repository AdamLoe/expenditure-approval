var React = require('react');

var Login     = require('./Login');
var Approver  = require('./approver/Approver');
var Requester = require('./requester/Requester');
var Admin     = require('./admin/Admin');

var RippleArea = require('./components/RippleArea');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost',
            user: {},
            filters: {
                approvers: [],
                requesters: []
            },
        };

        var stateJson = sessionStorage.getItem('stateJson');

        if (stateJson) {
            stateJson = JSON.parse(stateJson);
            console.log('got stateJson', stateJson);
            this.state = stateJson;
        }

        this.loginSetState = this.loginSetState.bind(this);
    }

    loginSetState(user, filters) {
        var approvers = {};
        var requesters = {};
        filters.map( (filter) => {
            if (filter.name === 'approvers') {
                approvers = JSON.parse(filter.json);
            }
            if (filter.name === 'requesters') {
                requesters = JSON.parse(filter.json);
            }
        });
        approvers.unshift({
            id: '*',
            name: 'ALL'
        });
        requesters.unshift({
            id: '*',
            name: 'ALL'
        });
        console.log('got approvers', approvers);
        console.log('got requesters', requesters);
        var stateJson = {
            url: 'http://localhost',
            user: user,
            filters: {
                approvers: approvers,
                requesters: requesters
            }
        };
        this.setState(stateJson);
        sessionStorage.setItem('stateJson', JSON.stringify(stateJson));
    }

    render() {
        console.log('Rendering app ', this.state);
        if (!this.state.user.type) {
            return (
                <Login loginSetState={this.loginSetState}
                       url={this.state.url}/>
            )
        } else if (this.state.user.type === 'requester') {
            return (
                <Requester approvers={this.state.filters.approvers}
                           requesters={this.state.filters.requesters}
                           user={this.state.user}
                           url={this.state.url}/>
            )
        } else if (this.state.user.type === 'admin') {
            return (
                <Admin     approvers={this.state.filters.approvers}
                           requesters={this.state.filters.requesters}
                           user={this.state.user}
                           url={this.state.url}/>
            )
        } else {
            return (
                <Approver approvers={this.state.filters.approvers}
                          requesters={this.state.filters.requesters}
                          user={this.state.user}
                          url={this.state.url}/>
            )
        }
    }
}

module.exports = App;
