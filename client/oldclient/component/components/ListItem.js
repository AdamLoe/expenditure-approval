/*
    General Idea behind this,
    On Enter,
 */

import React from 'react';
import Transition from 'react-transition-group/Transition';
import _ from 'lodash';

const onEnter = (props) => {
    console.log('ENTER', props.getBoundingClientRect());
    props.style.top = props.getBoundingClientRect().top;
};
const onEntering = (props) => {
    console.log('ENTERING', props.getBoundingClientRect());
    props.style.top = props.getBoundingClientRect().top;
};
const onEntered = (props) => {
    console.log('ENTERED', props.getBoundingClientRect());
    props.style.top = props.getBoundingClientRect().top;
};
const onExit = (props) => {
    console.log('EXIT', props);
};
const onExiting = (props) => {
    console.log('EXITING', props);
};
const onExited = (props) => {
    console.log('EXITED', props);
};

class ListItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            children: {},
            props: {},
            style: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('CWRP ListITem', nextProps, this.props);
        if (this.props !== nextProps) {
            var newProps = _.mapValues(nextProps, function(value, label) {
                if (label !== 'children') return value;
            });
            this.state = {
                props: newProps,
                children: nextProps.children
            }
        }
    }

    render() {
        console.log('Rendering ListItem', this.state, this.props);
        return (
            <Transition {...this.state.props}
                        timeout={5000}
                        unmountOnExit={true}
                        component="li">
                {state => React.cloneElement(this.state.children, {
                    style: {

                    }
                })}
            </Transition>
        );
    }
};

module.exports = ListItem;