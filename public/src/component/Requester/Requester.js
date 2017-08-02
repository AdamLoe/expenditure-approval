var React = require('react');
var CreateRequest = require('./CreateRequest');
var MyRequests = require('./MyRequests.js');

class Requester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createBool: false
        };

    }
    render() {
        return (
            <div className="RequesterContainer">
                <CreateRequest user={this.props.user}/>
                <MyRequests user={this.props.user} />
            </div>
        )
    }
}

module.exports = Requester;