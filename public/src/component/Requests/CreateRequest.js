var React = require('react');
var axios = require('axios');

class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <div className='CreateRequestContainer'>
                <h1> Create Requests </h1>
            </div>
        )
    }
}

module.exports = CreateRequest;