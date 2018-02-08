import React from 'react';
var ReactDOM = require('react-dom');

var DropdownArea = ({className, onClick, children}) => {
    return (
        <Transition timeout={150} component={doThis}>
            {(status) =>
                switch(status) {
                    case 'entering':
                    case 'entered':
                    case 'exiting':
                    case 'exited'

                }
            }
            }
        </Transition>
        <div className={"DropdownArea " + className}
                onClick={onClick} >
            { children }
        </div>
    );
};

module.exports = DropdownArea;