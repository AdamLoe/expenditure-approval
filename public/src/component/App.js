var React = require('react');
var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Login = require('./Login');
var Admin = require('./Admin');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/'        component={Home}       />
                        <Route path='/home'          component={Home}  />
                        <Route path='/login'         component={Login}  />
                        <Route path='/admin'         component={Admin}      />
                        <Route component={Login}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;