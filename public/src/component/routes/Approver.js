/**
 * Created by Adam on 7/28/2017.
 */
var React = require('react');
var Request = require('../request/Request.js');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:      this.props.state.user,
            filters:   this.props.state.filters,
            requests:  this.props.state.requests
        }
        this.loadRequests = this.loadRequests.bind(this)
    }

    componentDidMount() {
        this.loadRequests();
    }

    loadRequests() {
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
            console.log('Getting Requests Went Wrong');
            console.log(err);
        })
    }

    render() {
        console.log('Rendering Approver', this.state);
        return (
            <div className='ApproverContainer'>
                <div className='FilterContainer'>
                    <h1> Filter Container </h1>
                </div>
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