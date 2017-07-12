/**
 * Created by Adam on 7/11/2017.
 */
var React = require('react');
var ReactRouter = require('react-router-dom');
var browserHistory = ReactRouter.browserHistory
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var axios = require('./Axios');
var NavBar = require('./NavBar');
var Home = require('./Home');
var MyProfile = require('./MyProfile');
var Profile = require('./Profile');
var Request = require('./Request');
var Admin = require('./Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        axios();
    }
    render() {
        return (
            <Router history={browserHistory}>
                <div className='App'>
                    <NavBar />
                    <axios />
                    <Switch>
                        <Route exact path='/'        component={Home}       />
                        <Route exact path='/profile' component={MyProfile}  />
                        <Route path='/profile/*'     component={Profile}    />
                        <Route path='/request/*'     component={Request}    />
                        <Route path='/admin'         component={Admin}      />
                        <Route render={function() {return<p>Not Found</p>}} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;