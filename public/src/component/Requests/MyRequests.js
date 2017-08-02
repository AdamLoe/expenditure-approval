var React = require('react');

class MyRequests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='MyRequestsContainer'>
                <h1> My Requests </h1>
            </div>
        )
    }
}

module.exports = MyRequests;