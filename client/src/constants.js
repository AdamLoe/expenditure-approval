
exports.apiPort = 2002;
exports.filesUrl = "https://app.adamloe.com/";

let localURL = "http://localhost:2002/api";
let outsideURL = "https://adqsv1eqy0.execute-api.us-east-1.amazonaws.com/dev";
export let url = ( process.env.NODE_ENV === "production" ?
    outsideURL :
    localURL
);
export let imgUrl = "https://app.adamloe.com/images/";