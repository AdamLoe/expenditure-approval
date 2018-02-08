var React = require('react');
var axios = require('axios');
var RequestFilters = require('./RequestFilters');
var PageChanger = require('./PageChanger');
var RequestPanel = require('./RequestPanel');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [],
            pageInfo: {
                page: 1,
                perPage: 2,
            },
            filters: {

            }
        };

        this.loadRequests = this.loadRequests.bind(this);
        this.commentRequest = this.commentRequest.bind(this);
        this.loadRequests({
            approverid: this.props.user.id
        });
    }

    loadRequests(filtersJson, pageInfo) {
        console.log('Loading Requests', filtersJson, pageInfo);
        var that = this;

        if(!filtersJson) {
            filtersJson = this.state.filters;
        } else {
            pageInfo = this.state.pageInfo;
        }

        axios({
            method: 'post',
            url: this.props.url + '/api/query',
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: {
                filters: filtersJson,
                page: pageInfo.page,
                perPage: pageInfo.perPage
            }
        }).then(function(res){
            console.log('axios get requests worked', res);
            that.setState({
                requests: res.data,
                filters: filtersJson,
                pageInfo: pageInfo
            });
        }).catch(function(err){
            console.log('Getting Requests Went Wrong');
            console.log(err);
        });
    }


    commentRequest(requestId, commentBool, comment) {
        var that = this;
        console.log('Commenting Request');
        axios({
            method: 'post',
            url: this.props.url + '/api/requests/' + requestId,
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
        console.log('Rendering Approver state', this.state, 'props', this.props);
        return (
            <div className='appContainer'>
                <RequestFilters  user={this.props.user}
                                 loadRequests={this.loadRequests}
                                 approvers={this.props.approvers}
                                 requesters={this.props.requesters}/>

                <PageChanger     user={this.props.user}
                                 loadRequests={this.loadRequests}
                                 info={this.state.pageInfo}/>

                <RequestPanel    requests={this.state.requests}
                                 commentRequest={this.commentRequest}/>
            </div>
        )
    }
}

module.exports = Approver;