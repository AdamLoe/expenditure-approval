var React = require('react');

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            type: '',
            approver: '',
            approveLimit: ''
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleApprover = this.handleApprover.bind(this);
        this.handleLimit = this.handleLimit.bind(this);

        this.createUser = this.createUser.bind(this);
    }
    createUser(e) {
        this.props.createUser(this.state);
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleType(e) {
        this.setState({
            type: e.target.value
        });
    }
    handleApprover(e) {
        this.setState({
            approver: e.target.value
        });
    }
    handleLimit(e) {
        this.setState({
            limit: e.target.value
        });
    }

    render() {
        return (
            <div className="CreateUser">
                <div className="CreateUserRow">
                    <div className="CreateUserColumn">
                        <h1> Username </h1>
                        <input onChange={this.handleUsername} />
                    </div>
                    <div className="CreateUserColumn">
                        <h1> Password </h1>
                        <input onChange={this.handlePassword} />
                    </div>
                    <div className="CreateUserColumn">
                        <h1> Name </h1>
                        <input onChange={this.handleName} />
                    </div>
                    <div className="CreateUserColumn">
                        <h1> Type </h1>
                        <input onChange={this.handleType} />
                    </div>
                    <div className="CreateUserColumn">
                        <h1> Next Approver </h1>
                        <input onChange={this.handleApprover} />
                    </div>
                    <div className="CreateUserColumn">
                        <h1> Approve Limit </h1>
                        <input onChange={this.handleLimit} />
                    </div>
                </div>
                <div className="CreateUserSubmit" onClick={this.createUser}>
                    <h1> Create</h1>
                    <h1> User </h1>
                </div>
            </div>
        )
    }
}

module.exports = CreateUser;
