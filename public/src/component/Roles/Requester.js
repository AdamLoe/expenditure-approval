var React = require('react');
var CreateRequest = require('../Requester/CreateRequest');
var MyRequests = require('../Requester/MyRequests.js');

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