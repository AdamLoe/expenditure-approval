import React from 'react';
var Request = require('./Request.js');
//var ListPanel = require('../components/ListPanel');
//var ListItem =  require('../components/ListItem');

class RequestPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        };
    }

    render() {
        console.log('Rendering RequestPanel', this.props.requests);
        console.log('Requests length', this.props.requests.length);
        return (
            <div className="listContainer">
                <div >
                    <div className="listItem listHeader">
                        <div className="column6">
                            Created
                        </div>
                        <div className="column6">
                            Property
                        </div>
                        <div className="column6">
                            Approver
                        </div>
                        <div className="column6">
                            Name
                        </div>
                        <div className="column6">
                            Unit #
                        </div>
                        <div className="column6">
                            Amount
                        </div>
                    </div>
                </div>
                {(this.props.requests.length)  &&
                    this.props.requests.map(request =>
                        <div key={request.createdate}>
                            <Request
                                info={request}
                                key={request.createdate}
                                commentRequest={this.props.commentRequest}
                            />
                        </div>
                    )
                }
                {(this.props.requests.length === 0) &&
                    <div className="EmptyRequestsContainer">
                        <h1> You have no requests </h1>
                    </div>
                }
            </div>
        )
    }
}

module.exports = RequestPanel;