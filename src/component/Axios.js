/**
 * Created by Adam on 7/12/2017.
 */
var axios = require('axios');

module.exports = function requestFeed () {
    return (
        axios.get('http://127.0.0.1:7777/')
            .then(function (response) {
                console.log(response);
            })
    )
};
