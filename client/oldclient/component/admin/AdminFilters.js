var React = require('react');

class AdminFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        };
        this.changeToApprover  = this.changeToApprover.bind(this);
        this.changeToRequester = this.changeToRequester.bind(this);
        this.changeToAdmin     = this.changeToAdmin.bind(this);
        this.changeToInactive = this.changeToInactive.bind(this);

    }

    changeToApprover(e) {
        this.setState({
            type: 'approver'
        });
        this.props.loadUsers('approver');
    }

    changeToRequester(e) {
        this.setState({
            type: 'requester'
        });
        this.props.loadUsers('requester');
    }

    changeToAdmin(e) {
        this.setState({
            type: 'admin'
        });
        this.props.loadUsers('admin');
    }

    changeToInactive() {
        this.setState({
            type: 'inactive'
        });
        this.props.loadUsers('inactive');
    }

    render() {
        console.log('Rendering Filters');
        return (
            <div className="AdminFilters">
                    <div onClick={this.changeToApprover}
                        className={(this.state.type === 'approver') ? 'adminFilter active': 'adminFilter' } >
                        <h1> Approver </h1>
                    </div>
                    <div onClick={this.changeToRequester}
                         className={(this.state.type === 'requester') ? 'adminFilter active': 'adminFilter' } >
                        <h1> Requester </h1>
                    </div>
                    <div onClick={this.changeToAdmin}
                         className={(this.state.type === 'admin') ? 'adminFilter active': 'adminFilter' } >
                        <h1> Admin </h1>
                    </div>
                    <div onClick={this.changeToInactive}
                         className={(this.state.type === 'inactive') ? 'adminFilter active': 'adminFilter' } >
                        <h1> Deleted </h1>
                    </div>
            </div>
        )
    }
}

module.exports = AdminFilters;