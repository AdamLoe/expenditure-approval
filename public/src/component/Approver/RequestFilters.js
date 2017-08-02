var React = require('react');
var axios = require('axios');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                status: {
                    current: 'ALL0',
                    options: []
                },
                property: {
                    current: 'ALL1',
                    options: []
                },
                approver: {
                    current: 'eddyG',
                    options: []
                },
                period: {
                    current: 'ALL3',
                    options: []
                }
            },
            requests: []
        };
        this.loadRequests = this.loadRequests.bind(this);
    }

    loadRequests() {
        console.log('Load Request started');
        var parameterString =   this.props.state.filters.status.current + '/' +
                                this.props.state.filters.property.current + '/' +
                                this.props.state.filters.approver.current + '/' +
                                this.props.state.filters.period.current;
        this.props.loadRequests(parameterString);
    }

    render() {
        return(
            <div className="requestFilters">
                <h1> Request Filters </h1>
            </div>
        )
    }
}

module.exports = Approver;