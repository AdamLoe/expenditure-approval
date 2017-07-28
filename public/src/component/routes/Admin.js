var React = require('react');

class Admin extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='Content'>
                <h1> Admin2 </h1>
                <h1> Pears </h1>
            </div>
        )
    }
}

module.exports = Admin;