import React from 'react';
import ReactDOM from 'react-dom';

class CommentHistory extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick (e) {
        var rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
        var divX = rect.left;
        var divY = rect.top;
        console.log('rect', divX, divY);
        console.log('event', e);
        console.log('this', this);
        console.log('page', e.pageX, e.pageY);
    }

    render() {
        return (
            <div className="CommentHistoryContainer"
                onClick={this.onClick}>
                { this.props.info.comments.map( comment =>
                    <div className="comment">
                        <h2>{comment[3]}</h2>
                        <h3>{comment[1]}</h3>
                        <h4>{comment[0]}</h4>
                    </div>
                )}
            </div>
        )
    }
}

module.exports = CommentHistory;