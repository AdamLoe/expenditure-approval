import React from 'react';
import {getSimpleTime} from '../helpers/time.js';
var Attributes = require('../components/Attributes');
var CommentHistory = require('../components/CommentHistory');
var CreateComment = require('../components/CreateComment');

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderLarge: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({
            renderLarge: !this.state.renderLarge
        });
    }
    render() {
        console.log('Rendering request', this.props);
        return (
            <div className="listItem">
                <div className='simpleRequest' onClick={this.onClick}>
                    <div className="column6">
                        {getSimpleTime(this.props.info.createdate)}
                    </div>
                    <div className="column6">
                        {this.props.info.requestername}
                    </div>
                    <div className="column6">
                        {this.props.info.approvername}
                    </div>
                    <div className="column6">
                        {this.props.info.requestname}
                    </div>
                    <div className="column6">
                        {this.props.info.unitname}
                    </div>
                    <div className="column6">
                        {this.props.info.amount}
                    </div>
                </div>
                { (this.state.renderLarge) &&
                <div className="largeRequest">
                    <Attributes
                        info={this.props.info}
                    />
                    <div className="CommentsContainer">
                        <CommentHistory
                            info={this.props.info}
                            />
                        <CreateComment
                            info={this.props.info}
                            commentRequest={this.props.commentRequest}
                            />
                    </div>
                </div>
                }
            </div>
        )
    }
}

module.exports = Request;