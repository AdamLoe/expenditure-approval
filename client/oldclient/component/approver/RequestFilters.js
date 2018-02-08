var React = require('react');
var axios = require('axios');
var RippleArea = require('../components/RippleArea');

class RequestFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                status: {
                    current: 'In Process',
                    options: ['ALL', 'In Process', 'Approved', 'Rejected', 'Completed', 'Cancelled']
                },
                requester: {
                    current: {
                        id: '*', name: 'ALL'
                    }
                },
                approver: {
                    current: {
                        id: this.props.user.id, name: this.props.user.name
                    }
                },
                period: {
                    current: '1 Month',
                    options: ['1 Month', '6 Month', 'ALL']
                }
            },
            type: 'none',
            showOptions: false
        };
        this.toggleType = this.toggleType.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.getFiltersJson = this.getFiltersJson.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state) {
            return true;
        }
        return false;
    }

    toggleType(string) {
        if (this.state.type === string && this.state.showOptions) {
            this.setState({
                showOptions: false
            })
        } else {
            this.setState({
                type: string,
                showOptions: true
            })
        }
    }

    setFilter(option) {
        console.log('Set Filter', this.state.type, ' to ', option);
        var filters = this.state.filters;
        filters[this.state.type].current = option;
        this.setState({
            filters: filters,
            showOptions: false
        });
        this.getFiltersJson(filters.status.current, filters.requests.current,
                            filters.approver.current, filters.period.current);
    }

    getFiltersJson(status, requesterid, approverid, period) {
        var filtersJson = {};
        if (status !== 'ALL') {
            filtersJson.status= status;
        }
        if (requesterid !== '*') {
            filtersJson.requesterid = requesterid;
        }
        if (approverid !== '*') {
            filtersJson.approverid  = approverid;
        }
        if (period === '*') {
            filtersJson.period = period;
        }
        this.props.loadRequests(filtersJson);
    }

    render() {
        console.log('Rendering request Filtesr', this.props.approvers, this.props.requesters);
        return(
            <div className="RequestFilters">
                {[
                    ['status', this.state.filters.status.current],
                    ['requester', this.state.filters.requester.current.name],
                    ['approver', this.state.filters.approver.current.name],
                    ['period', this.state.filters.period.current]
                 ].map( option =>
                        <RippleArea className={this.state.type === option[0] ?
                            "FilterButton ActiveFilter" :
                            "FilterButton"
                                             }  onClick={this.toggleType.bind(this, option[0])}>
                            <h1> {option[1]}</h1>
                        </RippleArea>
                 )}
                <div className={"FilterOptions " + (this.state.showOptions ? 'show' : 'hidden')}>
                    { (this.state.type === 'status') &&
                    this.state.filters.status.options.map(option =>
                        <a key={option}
                           onClick={this.setFilter.bind(this, option)}>
                            {option}
                        </a>
                    )}
                    { (this.state.type === 'approver') &&
                    this.props.approvers.map(approver =>
                        <a key={approver.id}
                           onClick={this.setFilter.bind(this, {
                               id: approver.id, name: approver.name
                           })}>
                            {approver.name}
                        </a>
                    )}
                    { (this.state.type === 'requester') &&
                    this.props.requesters.map(requester =>
                        <a key={requester.id}
                           onClick={this.setFilter.bind(this, {
                               id: requester.id, name: requester.name
                           })}>
                            {requester.name}
                        </a>
                    )}
                    { (this.state.type === 'period') &&
                    this.state.filters.period.options.map(option =>
                        <a key={option}
                           onClick={this.setFilter.bind(this, option)}>
                            {option}
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

module.exports = RequestFilters;