/**
 * Created by Adam on 7/28/2017.
 */
var React = require('react');
var Request = require('../request/Request.js');

class Requester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        console.log('rendereing approver', this.props);
        return (
            <div className='ApproverContainer'>
                <div className='FilterContainer'>
                    <h1> Filter Container </h1>
                </div>
                <div className='ListContainer'>
                    {this.state.requests.map( request =>
                        <Request
                            state={request}
                            key={request.requestId}
                        />
                    )}
                </div>

            </div>
        )
    }
}

module.exports = Requester;