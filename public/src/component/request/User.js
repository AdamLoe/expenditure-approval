import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            serverCopy: this.props.user,
            clientCopy: this.props.user
        },
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    handleNameChange(e) {

    }
    handleNameSubmit(e) {

    }
    handleTypeChange(e) {

    }
    handleTypeSubmit(e) {

    }
    handleApproverChange(e) {

    }
    handleApproverSubmit(e) {

    }

    render() {
        return (
            <div className="user" >
                <h1> {this.state.serverCopy.username} </h1>
                <h1> {this.state.serverCopy.name} </h1>
                <h1> {this.state.serverCopy.type} </h1>
                <h1> {this.state.serverCopy.nextapprover} </h1>
                <h1> {this.state.serverCopy.approvelimit} </h1>
                <button className="userSubmit" onSubmit={this.handleOnSubmit}>
                    Submit
                </button>
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