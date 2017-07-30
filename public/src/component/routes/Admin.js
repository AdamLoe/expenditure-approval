var React = require('react');
var User = require('../request/User.js');
var axios = require('axios');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usr: 'eddyG',
            pas: 'earl',
            user: this.props.state.user,
            filters: {
                current: 'Requester',
                options: [
                    'Admin', 'Requester', 'Approver', 'Deleted'
                ]
            }
        };
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers() {
        console.log('Load Users started');
        console.log('Requesting:  ', 'https://standardrequests.com/api/users/' + this.state.filters.current);
        axios.get('https://standardrequests.com/api/users/' + this.state.filters.current, {
            auth: {
                username: this.state.usr,
                password: this.state.pas
            }
        }).then(function(res){
            console.log('axios request worked', res);
            console.log(res);
        }).catch(function(err){
            console.log('Getting Requests Went Wrong');
            console.log(err);
        })
        console.log('Load Request Ended');
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