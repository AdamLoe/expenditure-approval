var React = require('react');
var axios = require('axios');
var CreateAttributes = require('./CreateAttributes.js');

class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestName: '',
            amount: '',
            unitName: '',
            itemType: '',
            reqComment: '',
            attributes: [[]]
        };
        this.handleRequestName = this.handleRequestName.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleUnitName = this.handleUnitName.bind(this);
        this.handleItemType = this.handleItemType.bind(this);
        this.handleAttributes = this.handleAttributes.bind(this);
        this.handleReqComment = this.handleReqComment.bind(this);
        this.handleAttributes = this.handleAttributes.bind(this);

        this.submitRequest = this.submitRequest.bind(this);
    }

    submitRequest(e) {
        console.log('Create Request called', this.state);
        axios({
            method: 'post',
            url: this.props.url + '/api/requests/',
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            data: this.state
        }).then(function(res){
            console.log('axios create request worked', res);
            if (res.data.data === 0) {
                alert('Cannot Add Request, one of your inputs isnt right');
            } else {
                alert('Request Successfully Created');
            }
        }).catch(function(err){
            console.log('Creating Request Went Wrong');
            console.log(err);
        });
    }

    handleRequestName(e) {
        this.setState({
            requestName: e.target.value
        });
    }
    handleAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }
    handleUnitName(e) {
        this.setState({
            unitName: e.target.value
        });
    }
    handleItemType(e) {
        this.setState({
            itemType: e.target.value
        });
    }
    handleAttributes(attributes) {
        this.setState({
            attributes: attributes
        });
        console.log('Set Attributes', attributes);
    }
    handleReqComment(e) {
        this.setState({
            reqComment: e.target.value
        });
    }

    render() {
        console.log('Rendering Create Requests', this.state);
        return (
            <div className="CreateRequestContainer">
                <div className="CreateDetailsContainer">
                    <h1>
                        Required Details
                    </h1>
                    <div className="CreateRequestColumn">
                        <h2> Request Name </h2>
                        <input onChange={this.handleRequestName} />
                    </div>
                    <div className="CreateRequestColumn">
                        <h2> Amount </h2>
                        <input onChange={this.handleAmount} />
                    </div>
                    <div className="CreateRequestColumn">
                        <h2> Unit Name </h2>
                        <input onChange={this.handleUnitName} />
                    </div>
                    <div className="CreateRequestColumn">
                        <h2> Item Type </h2>
                        <input onChange={this.handleItemType} />
                    </div>
                    <div className="CreateRequestColumn">
                        <h2> Commment </h2>
                        <textarea onChange={this.handleReqComment} />
                    </div>
                </div>
                <CreateAttributes handleAttributes={this.handleAttributes}/>
                <div onClick={this.submitRequest}
                     className="CreateRequestSubmit">
                  Submit
                </div>
            </div>
        )
    }
}

module.exports = CreateRequest;