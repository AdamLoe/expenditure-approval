var React = require('react');
var axios = require('axios');
var CreateRequest = require('./CreateRequest');
var MyRequests = require('./MyRequests.js');

class Requester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderMyRequests: true,
            myRequests: []
        };
        this.goToMyReqs = this.goToMyReqs.bind(this);
        this.goToCreate = this.goToCreate.bind(this);
        this.loadMyRequests = this.loadMyRequests.bind(this);

        this.loadMyRequests();
    }

    goToMyReqs(){
        this.setState({
            renderMyRequests: true
        })
        this.loadMyRequests();
    }

    goToCreate(){
        this.setState({
            renderMyRequests: false
        })
    }

    loadMyRequests() {
        var that = this;
        axios.get(this.props.url + '/api/myrequests/', {
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios get requests worked', res);
            that.setState({
                myRequests: res.data
            })
        }).catch(function(err){
            console.log('Getting Requests Went Wrong');
            console.log(err);
            console.log(err.message);
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="appContainer">
                <div className="RequesterNavigation">
                    <h1 onClick={this.goToMyReqs}> My Requests </h1>
                    <h1 onClick={this.goToCreate}> Create Request </h1>
                </div>
                {
                    (this.state.renderMyRequests) ?
                        <MyRequests myRequests={this.state.myRequests} user={this.props.user} />
                        :
                        <CreateRequest user={this.props.user}
                                       url={this.props.url}/>
                }
            </div>
        )
    }
}

module.exports = Requester;