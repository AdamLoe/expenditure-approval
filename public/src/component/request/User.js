import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        return (
            <div className="user" >
                <h1> {this.props.state.username} </h1>
                <h1> {this.props.state.name} </h1>
                <h1> {this.props.state.type} </h1>
                <h1> {this.props.state.nextapprover} </h1>
                <h1> {this.props.state.approvelimit} </h1>
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