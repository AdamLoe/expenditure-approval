import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            show: true,
            buttonBool: false,

            status: this.props.user.status,

            username: this.props.user.username,

            password: this.props.user.password,
            newPassword: '',

            name: this.props.user.name,
            newName: '',

            type: this.props.user.type,

            approver: this.props.user.approver,
            newApprover: '',

            approvelimit: this.props.user.approvelimit,
            newLimit: 0
        };
        this.expandUser = this.expandUser.bind(this);

        this.deleteUser = this.deleteUser.bind(this);
        this.callbackDeleteUser = this.callbackDeleteUser.bind(this);

        this.updateUser = this.updateUser.bind(this);

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePassSubmit = this.handlePassSubmit.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);

        this.handleApproverChange = this.handleApproverChange.bind(this);
        this.handleApproverSubmit = this.handleApproverSubmit.bind(this);

        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleLimitSubmit = this.handleLimitSubmit.bind(this);
    }

    expandUser(e) {
        this.setState({
            buttonBool: !this.state.buttonBool
        })
    }

    deleteUser(e) {
        console.log('Delete/Activate user started');
        this.props.deleteUser(this.state.username, this.state.status, this.callbackDeleteUser);
    }

    callbackDeleteUser(res) {
        console.log('Delete/Activate User worked', res.data.data);
        if (res.data.data === 1) {
            this.setState({
                show: false
            });
        }
    }

    updateUser(res, key, value) {
        console.log('Updating user', res.data.data, key, value);
        if (res.data.data === 1) {
            this.setState({
                [key]: value
            });
        }
        else {
            console.log('Database returned 0 for update');
        }
    }

    handlePassChange(e) {
        this.setState({
           newPassword: e.target.value
        });
    }
    handleNameChange(e) {
        this.setState({
            newName: e.target.value
        });
    }
    handleApproverChange(e) {
        this.setState({
            newApprover: e.target.value
        });
    }
    handleLimitChange(e) {
        this.setState({
            newLimit: e.target.value
        });
    }
    handlePassSubmit(e) {
        this.props.updateUser(this.state.username,'password', this.state.newPassword, this.updateUser);
    }
    handleNameSubmit(e) {
        this.props.updateUser(this.state.username,'name', this.state.newName, this.updateUser);
    }
    handleApproverSubmit(e) {
        this.props.updateUser(this.state.username,'approver', this.state.newApprover, this.updateUser);
    }
    handleLimitSubmit(e) {
        this.props.updateUser(this.state.username, 'approvelimit', this.state.newLimit, this.updateUser);
    }

    render() {
        if (this.state.show === true) {
            return (
                <div className="user" >
                    <button className="valueRow" onClick={this.expandUser}>
                        <div className="valueColumn">
                            <h1> {this.state.username} </h1>
                        </div>
                        <div className="valueColumn">
                            <h1> {this.state.password} </h1>
                        </div>
                        <div className="valueColumn">
                            <h1> {this.state.name} </h1>
                        </div>
                        <div className="valueColumn">
                            <h1> {this.state.approver} </h1>
                        </div>
                        <div className="valueColumn">
                            <h1> {this.state.approvelimit} </h1>
                        </div>

                    </button>
                    { this.state.buttonBool &&
                    <div className="inputRow">
                        <div className="inputColumn">
                            <button className="delete" onClick={this.deleteUser}>
                                { this.state.status ? 'Deactivate' : 'Activate'}
                            </button>
                        </div>
                        <div className="inputColumn">
                            <input onChange={this.handlePassChange}></input>
                            <button className="normal" onClick={this.handlePassSubmit}></button>
                        </div>
                        <div className="inputColumn">
                            <input onChange={this.handleNameChange}></input>
                            <button className="normal" onClick={this.handleNameSubmit}></button>
                        </div>
                        <div className="inputColumn">
                            <input onChange={this.handleApproverChange}></input>
                            <button className="normal" onClick={this.handleApproverSubmit}></button>
                        </div>
                        <div className="inputColumn">
                            <input onChange={this.handleLimitChange}></input>
                            <button className="normal" onClick={this.handleLimitSubmit}></button>
                        </div>
                    </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div className="emptyUser"></div>
            )
        }
    }
}

module.exports = User;

/*

 this.onNameChange = this.onNameChange.bind(this);
 this.onApproverChange = this.onNameChange.bind(this);
 this.onLimitChange = this.onNameChange.bind(this);
 this.onPasswordChange = this.onNameChange.bind(this);
 this.toggleActivate = this.onNameChange.bind(this);


 */