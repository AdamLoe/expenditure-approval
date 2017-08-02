import React from 'react';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: 'small',
            comment: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onAccept = this.onAccept.bind(this);
        this.onReject = this.onReject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }
    onCommentChange(e) {
        e.preventDefault();
        this.setState({
            comment: e.target.value
        })
    }
    onSubmit(e, bool) {
        console.log('bool:', bool, '  comment:', this.state.comment);
        this.setState({
            render: 'none'
        });
    }
    onAccept(e) {
        this.onSubmit(e, true);
    }
    onReject(e) {
        this.onSubmit(e, false);
    }

    onClick(e) {
        console.log(e.target);
        if (this.state.render === 'large') {
            this.setState({
                render: 'small'
            });
        } else {
            this.setState({
                render: 'large'
            });
        }
    }
    render() {
        console.log('a request is rendering');
        if (this.state.render === 'large') {
            return (
                <div className="largeRequest">
                    <button className="largeRequestInfo" onClick={this.onClick}>
                        <h1> Name: {this.props.state.requestName} </h1>
                        <h1> Amount: {this.props.state.amount} </h1>
                    </button>
                    <input type="text" onChange={this.onCommentChange}/>
                    <button className="largeAccept" onClick={this.onAccept}> Accept </button>
                    <button className="largeReject" onClick={this.onReject}> Reject </button>
                </div>
            )
        }
        else if (this.state.render === 'small') {
            return (
                <div className="smallRequest">
                    <button className="smallRequestInfo" onClick={this.onClick}>
                        <h1> {this.props.state.requestName} </h1>
                        <h1> {this.props.state.amount} </h1>
                    </button>
                    <button className="smallAccept" onClick={this.onAccept}> Accept </button>
                    <button className="smallReject" onClick={this.onReject}> Reject </button>
                </div>

            )
        } else {
            return (
                <div className="DeleteRequest"></div>
            )
        }
    }
}

module.exports = Request;