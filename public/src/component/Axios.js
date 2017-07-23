/**
 * Created by Adam on 7/12/2017.
 */
var axios = require('axios');

module.exports = function requestFeed () {
    return (
        axios.get('http://localhost:80/')
        //axios.get('http://192.241.128.166:7778/')
            .then(function (response) {
                console.log(response);
            })
    )
};
