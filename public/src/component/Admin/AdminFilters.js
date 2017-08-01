var React = require('react');

class AdminFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'approver',
            status: 'true'
        };
        this.changeToApprover  = this.changeToApprover.bind(this);
        this.changeToRequester = this.changeToRequester.bind(this);
        this.changeToAdmin     = this.changeToAdmin.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);

    }

    changeToApprover(e) {
        this.setState({
            type: 'approver'
        });
        this.props.loadUsers('approver', this.state.status);
    }

    changeToRequester(e) {
        this.setState({
            type: 'requester'
        });
        this.props.loadUsers('requester', this.state.status);
    }

    changeToAdmin(e) {
        this.setState({
            type: 'admin'
        });
        this.props.loadUsers('admin', this.state.status);
    }

    toggleStatus() {
        this.props.loadUsers(this.state.type, !this.state.status);
        this.setState({
            status: !this.state.status
        });
    }



    render() {
        console.log('Rendering Filters');
        return (
            <div className="UserFilters">
                    <div onClick={this.changeToApprover}
                        className={(this.state.type === 'approver') ? 'active': 'inactive' } >
                        <h1> Approver </h1>
                    </div>
                    <div onClick={this.changeToRequester}
                         className={(this.state.type === 'requester') ? 'active': 'inactive' } >
                        <h1> Requester </h1>
                    </div>
                    <div onClick={this.changeToAdmin}
                         className={(this.state.type === 'admin') ? 'active': 'inactive' } >
                        <h1> Admin </h1>
                    </div>
                    <div onClick={this.toggleStatus}
                         className={ this.state.status ? 'true': 'false' } >
                        <h1> {this.state.status ? 'Active': 'Inactive' } </h1>
                    </div>
            </div>
        )
    }
}

module.exports = AdminFilters;

/*

 <div className='UsersContainer'>
 {this.state.requests.map( request =>
 <Request
 state={request}
 key={request.requestId}
 />
 )}
 </div>


 */