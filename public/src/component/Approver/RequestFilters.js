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

    componentWillMount() {
        this.loadRequests();
    }

    loadRequests(parameterString) {
        console.log('Load Request started');
        var paramString = '';
        console.log('Load Request started');
        paramString += this.props.state.filters.status.current + '/';
        console.log('Load Request started');
        paramString += this.props.state.filters.property.current + '/';
        console.log('Load Request started');
        paramString += this.props.state.filters.approver.current + '/';
        console.log('Load Request started');
        paramString += this.props.state.filters.period.current;
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

module.exports = Approver;