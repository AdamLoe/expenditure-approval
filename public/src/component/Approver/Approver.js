var React = require('react');
var axios = require('axios');
var Request = require('./Request.js');
var RequestFilters = require('./RequestFilters');
var RequestPanel = require('./RequestPanel');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        };

        this.loadRequests = this.loadRequests.bind(this);
        this.commentRequest = this.commentRequest.bind(this);

        this.loadRequests('process/all/' + this.props.user.username + '/all');
    }

    loadRequests(parameterString) {
        var that = this;
        console.log('Loading requests at https://standardrequests.com/api/requests/' + parameterString);
        axios.get('https://standardrequests.com/api/requests/' + parameterString, {
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios get requests worked', res);
            that.setState({
                requests: res.data
            })
        }).catch(function(err){
            console.log('Getting Requests Went Wrong');
            console.log(err);
        });
    }

    commentRequest(requestId, commentBool, comment, callback) {
        axios.post('https://standardrequests.com/api/requests/' + requestId, {
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: {
                commentBool: commentBool,
                comment: comment
            }
        }).then(function(res){
            console.log('axios comment request worked', res);
        }).catch(function(err){
            console.log('Commenting Requests Went Wrong');
            console.log(err);
        });
    }

    render() {
        console.log('Rendering Approver', this.state);
        return (
            <div className='ApproverContainer'>
                <RequestFilters loadRequests={this.loadRequests}/>
                {(this.state.requests.length > 0) &&
                    <div className='RequestContainer'>
                        {this.state.requests.map(request =>
                            <Request
                                info={request}
                                key={request.requestId}
                                commentRequest={this.commentRequest}
                            />
                        )}
                    </div>
                }
            </div>
        )
    }
}

module.exports = Approver;