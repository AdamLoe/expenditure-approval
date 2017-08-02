var React = require('react');
var axios = require('axios');

class Approver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='ListContainer'>
                {this.props.requests.map( request =>
                    <Request
                        info={request}
                        key={request.requestId}
                    />
                )}
            </div>
        )
    }
}

module.exports = Approver;

