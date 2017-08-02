var React = require('react');
var User = require('../Admin/User.js');
var axios = require('axios');
var AdminFilters = require('../Admin/AdminFilters');
var CreateUser = require('../Admin/CreateUser');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
            ]
        };
        this.loadUsers = this.loadUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.loadUsers('approver', 'true');
    }


    loadUsers(type, status) {
        var that = this;
        console.log('Load Users started',this.props.user.username,this.props.user.password);
        axios({
            method: 'get',
            url: 'https://standardrequests.com/api/users/' + type + '/' + status,
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios get users worked', res);
            that.setState({
                users: res.data
            });
        }).catch(function(err){
            console.log('Getting Users Went Wrong');
            console.log(err);
        });
        console.log('Load Users Ended');
    }

    updateUser(username, key, value, callback) {
        console.log('Update user called');
        console.log('key', key, 'value', value);
        axios({
            method: 'post',
            url: 'https://standardrequests.com/api/users/' + username ,
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: {
                key: key,
                value: value
            }
        }).then(function(res){
            console.log('axios update user worked', res);
            callback(res, key, value);
        }).catch(function(err){
            console.log('Updating User Went Wrong');
            console.log(err);
        });
    }

    createUser(user) {
        that = this;
        console.log('Create user called', user);
        axios({
            method: 'post',
            url: 'https://standardrequests.com/api/users/',
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: user
        }).then(function(res){
            console.log('axios create user worked', res);
            if (res.da)
        }).catch(function(err){
            console.log('Creating User Went Wrong');
            console.log(err);
        });
    }

    deleteUser(username, currStatus, callback) {
        console.log('Delete user called');
        axios({
            method: 'delete',
            url: 'https://standardrequests.com/api/users/' + username + '/' + currStatus,
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios delete user worked', res);
            callback(res);
        }).catch(function(err){
            console.log('Deleting User Went Wrong');
            console.log(err);
        });
    }


    render() {
        console.log('Rendering Admin', this.state);
        return (
            <div className='AdminContainer'>
                <AdminFilters loadUsers={this.loadUsers} />
                <CreateUser createUser={this.createUser} />
                <div className="UserHeaders">
                    <div className="headerColumn">
                        <h1> Username </h1>
                    </div>
                    <div className="headerColumn">
                        <h1> Password </h1>
                    </div>
                    <div className="headerColumn">
                        <h1> Name </h1>
                    </div>
                    <div className="headerColumn">
                        <h1> Next Approver </h1>
                    </div>
                    <div className="headerColumn">
                        <h1> Approve Limit </h1>
                    </div>
                </div>
                <div className='UsersContainer'>
                    {this.state.users.map( user =>
                        <User
                            user={user}
                            key={user.username}
                            updateUser={this.updateUser}
                            createUser={this.createUser}
                            deleteUser={this.deleteUser}
                        />
                    )}
                </div>
            </div>
        )
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