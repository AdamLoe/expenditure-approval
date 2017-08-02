var React = require('react');
var CreateRequest = require('../Requests/CreateRequest');
var MyRequests = require('../Requests/MyRequests.js');

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
                <div className={this.state.createBool? 'show' : 'hidden'}>
                    <CreateRequest user={this.props.user}/>
                </div>
                <h1> Requester </h1>
                <MyRequests user={this.props.user} />
            </div>
        )
    }
}

module.exports = Requester;