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
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers() {
        var that = this;
        console.log('Load Users started',this.props.state.user.username,this.props.state.user.password);
        axios.post('https://standardrequests.com/api/users/', {
            auth: {
                username: this.props.state.user.username,
                password: this.props.state.user.password
            }
        }).then(function(res){
            console.log(res);
            /*
            console.log('axios users worked', res.data);
            that.setState({
                users: res.data
            })
            */
        }).catch(function(err){
            console.log('Getting Users Went Wrong');
            console.log(err);
        });
        console.log('Load Users Ended');
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
                            state={user}
                            key={user.username}
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