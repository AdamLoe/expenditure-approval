var React = require('react');
var Request = require('./Request.js');
var ListPanel = require('../components/ListPanel');
var ListItem =  require('../components/ListItem');

class MyRequests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ListPanel className='listContainer'>
                <ListItem >
                    <div className="listItem listHeader">
                        <div className="column6">
                            Status
                        </div>
                        <div className="column6">
                            Last Update
                        </div>
                        <div className="column6">
                            Next Approver
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
                </ListItem>
                {(this.props.myRequests.length) &&
                    this.props.myRequests.map(request =>
                        <Request
                            info={request}
                            key={request.createdate}
                        />
                    )
                }
            </ListPanel>
        )
    }
}

module.exports = MyRequests;