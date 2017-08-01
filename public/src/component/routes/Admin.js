var React = require('react');
var User = require('../request/User.js');
var axios = require('axios');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                current: 'requester',
                options: [
                    'admin', 'requester', 'approver', 'deleted'
                ]
            },
            users: [

            ]
        };
        this.loadUsers = this.loadUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers() {
        var that = this;
        console.log('Load Users started',this.props.user.username,this.props.user.password);
        axios({
            method: 'get',
            url: 'https://standardrequests.com/api/users/',
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        }).then(function(res){
            console.log('axios users worked', res);
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
        }).catch(function(err){
            console.log('Updatiing User Went Wrong');
            console.log(err);
        });
    }

    createUser(user) {
        console.log('Create user called');
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
        }).catch(function(err){
            console.log('Creating User Went Wrong');
            console.log(err);
        });
    }

    deleteUser(user) {
        console.log('Delete user called');
        axios({
            method: 'delete',
            url: 'https://standardrequests.com/api/users/' + user.username,
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: user
        }).then(function(res){
            console.log('axios delete user worked', res);
        }).catch(function(err){
            console.log('Deleting User Went Wrong');
            console.log(err);
        });
    }

    render() {
        console.log('Rendering Admin', this.state);
        return (
            <div className='AdminContainer'>
                <div className='TypeContainer'>
                    {this.state.filters.options.map(option =>
                        <button className="TypeButton" key={option}>
                            <h1> {option} </h1>
                        </button>
                    )}
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