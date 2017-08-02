var React = require('react');
var axios = require('axios');
var Request = require('../Requests/Request.js');
var RequestFilters = require('../Requests/RequestFilters');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.loadRequests = this.loadRequests.bind(this);
        this.loadRequests('process/all/' + this.props.user.username + '/all');
    }

    loadRequests(parameterString) {
        console.log('Loading requests at https://standardrequests.com/api/requests/' + parameterString);
        axios.get('https://standardrequests.com/api/requests/' + parameterString, {
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios request worked', res);
            console.log(res);
        }).catch(function(err){
            console.log('Getting Requests Went Wrong');
            console.log(err);
        });
        console.log('Load Request Ended');
    }

    render() {
        console.log('Rendering Approver', this.state);
        return (
            <div className='ApproverContainer'>
                <RequestFilters filters={this.state.filters}/>
                <div className='ListContainer'>
                    {this.state.requests.map( request =>
                        <Request
                            state={request}
                            key={request.requestId}
                        />
                    )}
                </div>

            </div>
        )
    }
}

module.exports = Approver;