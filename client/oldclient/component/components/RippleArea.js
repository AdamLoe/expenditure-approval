import React from 'react';
var ReactDOM = require('react-dom');

class RippleArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ripples: []
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        var rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
        console.log('Rectangle', rect);
        var styles = {
            top:  e.pageY - rect.top,
            left: e.pageX - rect.left
        };
        var ripples = this.state.ripples;
        ripples.push(styles);
        this.setState({
            ripples: ripples
        });
        var that = this;
        setTimeout(function(){
            ripples = that.state.ripples;
            delete ripples[ripples.indexOf(styles)];
            that.setState({
                ripples: ripples
            })
        }, 2000);
        this.props.onClick();
    }

    render() {
        console.log('Rendering ripple area', this.props);
        return (
            <div className={"rippleButton " + this.props.className}
                 onClick={this.onClick}
            >
                { this.props.children }
                {this.state.ripples.map( ripple =>
                    <div className="ripple"
                         style={ripple}
                    />
                )}
            </div>
        )
    }
}

module.exports = RippleArea;