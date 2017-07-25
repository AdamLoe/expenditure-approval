var React = require('react');
var ReactRouter = require('react-router-dom');

var browserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var NavBar = require('./NavBar');
var Home = require('./Home');
var Login = require('./Login');
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
                    <Switch>
                        <Route exact path='/'        component={Home}       />
                        <Route path='/home'          component={Home}  />
                        <Route path='/login'         component={Login}  />
                        <Route path='/admin'         component={Admin}      />
                        <Route render={function() {return<p>Not Found</p>}} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;