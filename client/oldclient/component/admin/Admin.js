var React = require("react");
var User = require("./User.js");
var axios = require("axios");
var AdminFilters = require("./AdminFilters");
var CreateUser = require("./CreateUser");

class Admin extends React.Component {
	constructor(props) {
		console.log("Admin Constructed");
		super(props);
		this.state = {
			showCreateUser: false,
			type: "approver",
			status: true,
			users: [
			]
		};
		this.loadUsers = this.loadUsers.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.createUser = this.createUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);

		this.loadUsers("approver", "true");
	}


	loadUsers(type) {
		var that = this;
		console.log("Load Users started",this.props.user.username,this.props.user.password);
		axios({
			method: "get",
			url: this.props.url + "/api/users/" + type,
			auth: {
				username: this.props.user.username,
				password: this.props.user.password
			}
		}).then(function(res){
			console.log("axios get users worked", res);
			that.setState({
				users: res.data
			});
		}).catch(function(err){
			console.log("Getting Users Went Wrong");
			console.log(err);
		});
		console.log("Load Users Ended");
	}

	updateUser(id, key, value) {
		console.log("Update user called");
		console.log("id", id, "key", key, "value", value);
		axios({
			method: "post",
			url: this.props.url + "/api/users/" + id,
			auth: {
				username: this.props.user.username,
				password: this.props.user.password
			},
			data: {
				key: key,
				value: value
			}
		}).then(function(res){
			console.log("axios update user worked", res);
			alert(res.data.message);
		}).catch(function(err){
			console.log("Updating User Went Wrong");
			console.log(err);
		});
	}

	createUser(user) {
		var that = this;
		console.log("Create user called", user);
		axios({
			method: "post",
			url: this.props.url + "/api/users/",
			auth: {
				username: this.props.user.username,
				password: this.props.user.password
			},
			data: user
		}).then(function(res){
			console.log("axios create user worked", res);
			if (res.data.data === 0) {
				alert("Cannot Add User, maybe try to using right type, approver, requester, or admin");
			} else {
				that.setState({
					type: user.type,
					status: "true"
				});
				that.loadUsers(user.type, true);
			}
		}).catch(function(err){
			console.log("Creating User Went Wrong");
			console.log(err);
		});
	}

	deleteUser(username, currStatus) {
		console.log("Delete user called");
		var that = this;
		axios({
			method: "delete",
			url: this.props.url + "/api/users/" + username + "/" + currStatus,
			auth: {
				username: this.props.user.username,
				password: this.props.user.password
			}
		}).then(function(res){
			console.log("axios delete user worked", res);
			const users = that.state.users.filter((user) => {
				if(user.username !== username) return user;
			});
			that.setState({
				users: users
			});
		}).catch(function(err){
			console.log("Deleting User Went Wrong");
			console.log(err);
		});
	}


	render() {
		console.log("Rendering Admin", this.state, this.props.approvers[0]);
		return (
			<div className='appContainer'>
				<AdminFilters loadUsers={this.loadUsers} type={this.state.type} />
				{ (this.state.showCreateUser) &&
                    <CreateUser createUser={this.createUser} />
				}
				<div className='listContainer'>
					<div className="listItem listHeader">
						<div className="column6">
							<h1> Username </h1>
						</div>
						<div className="column6">
							<h1> Password </h1>
						</div>
						<div className="column6">
							<h1> Name </h1>
						</div>
						<div className="column6">
							<h1> Next Approver </h1>
						</div>
						<div className="column6">
							<h1> Approve Limit </h1>
						</div>
					</div>
					{this.state.users.map( user =>
						<User
							user={user}
							key={user.username}
							updateUser={this.updateUser}
							deleteUser={this.deleteUser}
							approvers={this.props.approvers}
						/>
					)}
				</div>
			</div>
		);
	}
}

module.exports = Admin;

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