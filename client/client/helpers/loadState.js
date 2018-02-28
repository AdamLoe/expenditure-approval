/**
 * Created by Adam on 2/28/2018.
 */
const defaultState = require('./defaultState.js');

const loadState = () => {
    try {
        const state = sessionStorage.getItem('state');
        return (state === null ? defaultState : state );
    }
};

export default loadState;