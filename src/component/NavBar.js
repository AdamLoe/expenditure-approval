var React= require('react');
var NavLink = require('react-router-dom').NavLink;

function NavBar () {
    return (
        <div className='NavBar'>
            <div className='navLink'>
                <NavLink exact to='/'>Home</NavLink>
            </div>
            <div className='navLink'>
                <NavLink to='/profile'>My Profile</NavLink>
            </div>
            <div className='navLink'>
                <NavLink to='/Admin'>Admin</NavLink>
            </div>
        </div>
    )
}

module.exports = NavBar;