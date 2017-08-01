import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            serverCopy: this.props.user,
            newPassword: '',
            newName: '',
            newType: '',
            newApprover: '',
            newLimit: 0
        };

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



    updateUser(user) {
        console.log('updated user to', user);
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
        this.props.updateUser(this.state.serverCopy.username,'password', this.state.newPassword, this.updateUser);
    }
    handleNameSubmit(e) {
        this.props.updateUser(this.state.serverCopy.username,'name', this.state.newName, this.updateUser);
    }
    handleApproverSubmit(e) {
        this.props.updateUser(this.state.serverCopy.username,'approver', this.state.newApprover, this.updateUser);
    }
    handleLimitSubmit(e) {
        this.props.updateUser(this.state.serverCopy.username, 'limit', this.state.newLimit, this.updateUser);
    }

    render() {
        return (
            <div className="user" >
                <h1> {this.state.serverCopy.username} </h1>
                <h1> {this.state.serverCopy.type} </h1>

                <input onChange={this.handlePassChange}></input>
                <button onClick={this.handlePassSubmit}> passwordSubmit</button>

                <h1> {this.state.serverCopy.name} </h1>
                <input onChange={this.handleNameChange}></input>
                <button onClick={this.handleNameSubmit}> nameSubmit</button>


                <h1> {this.state.serverCopy.nextapprover} </h1>
                <input onChange={this.handleApproverChange}></input>
                <button onClick={this.handleApproverSubmit}> approverSubmit</button>

                <h1> {this.state.serverCopy.approvelimit} </h1>
                <input onChange={this.handleLimitChange}></input>
                <button onClick={this.handleLimitSubmit}> limitSubmit</button>

            </div>
        )
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