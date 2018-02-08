import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            approverDropdown: false,
            buttonBool: false,
        };

        this.expandUser = this.expandUser.bind(this);

        this.toggleApprovers = this.toggleApprovers.bind(this);
        this.setApprover = this.setApprover.bind(this);
        this.handleApproverSubmit = this.handleApproverSubmit.bind(this);
    }

    expandUser(e) {
        this.setState({
            buttonBool: !this.state.buttonBool
        })
    }


    toggleApprovers() {
        this.setState({
            approverDropdown: !this.state.approverDropdown
        });
    }
    setApprover(approverId, approverName) {
        this.setState({
            newApproverName: approverName,
            newApproverId: approverId
        });
    }
    handleApproverSubmit(e) {
        this.props.updateUser(this.props.user.id, 'approverid', this.state.newApproverId);
    }


    render() {
        return (
            <div className="listItem" >
                <div onClick={this.expandUser}>
                    <div className="column6">
                        <h1> {this.props.user.username} </h1>
                    </div>
                    <div className="column6">
                        <h1> Hidden </h1>
                    </div>
                    <div className="column6">
                        <h1> {this.props.user.name} </h1>
                    </div>
                    <div className="column6">
                        <h1> {this.props.user.approvername} </h1>
                    </div>
                    <div className="column6">
                        <h1> {this.props.user.approvelimit} </h1>
                    </div>
                </div>
            { this.state.buttonBool &&
                <div className="inputRow">
                   <InputColumn
                       id={this.props.user.id}
                       key={'password'}
                       value={this.props.user.password}
                       />
                </div>
            }
            </div>
        )
    }
}

module.exports = User;

/*

 <div className="inputColumn">
 <button className="delete" onClick={this.deleteUser}>
 { this.state.status ? 'Deactivate' : 'Activate'}
 </button>
 </div>
 <div className="inputColumn">
 <input onChange={this.handlePassChange}/>
 <button className="inputColumnButton" onClick={this.handlePassSubmit}/>
 </div>
 <div className="inputColumn">
 <input onChange={this.handleNameChange}></input>
 <button className="normal" onClick={this.handleNameSubmit}> </button>
 </div>
 <div className="inputColumn approverValue">
 {this.state.approverDropdown}
 <div onClick={this.toggleApprovers}> {this.state.newApproverName} </div>
 <button className="normal" onClick={this.handleApproverSubmit}> </button>
 </div>
 <div className="inputColumn">
 <input onChange={this.handleLimitChange}></input>
 <button className="normal" onClick={this.handleLimitSubmit}></button>
 </div>
 { this.state.approverDropdown &&
 <div className="ApproverDropdown">
 { this.props.approvers[0].map( approver =>
 <h1
 key={approver.id}
 onClick={this.setApprover.bind(this, approver.id, approver.name)}
 > {approver.name}
 </h1>
 )}
 </div>
 }




 */
