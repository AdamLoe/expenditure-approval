# API Docs : Standard Requests

## Good
#### 200 : Ok
#### 201 : Created
#### 202 : Accepted

## Client Bad
#### 400  Bad Request
#### 403 : Forbidden
#### Too Many Requests

## Server Bad
#### 500 : Server Error
#### 503 : Service Unavailable
#### 501 : Not Implemented
#### 502 : Bad Gateway


## /login/
Send| Get
---|---
basicAuth: username : password |
body: none |body:
---|
Send|
#####    basicAuth: username : password
##### Get
    basicAuth: username : password

## /myrequests/
    basicAuth: username : token
    headers:
        Authorization: Basic Auth

## /requests/query/
    headers:
        Authorization:
        Basic Auth
    body:


## /requests/comment
    headers:
        Authorization: Basic Auth
    body:


## /requests/create
    headers:
        Authorization: Basic Auth
    body:


## /users/query
    headers:
        Authorization: Basic Auth
    body:


## /users/create
    headers:
        Authorization: Basic Auth
    body:


## /users/update
    headers:
        Authorization: Basic Auth
    body:


## Server
    First, we need to know what to put in our function to make it work

    Example Input Arguments
    Event {
        path: "/login",
        headers: {
            Authorization: 'Basic Auth goes here'
        },
        body: {}
    }
    Callback = function(err, data) {
        if (err)  // it failed
        if (data) // it worked
    }

    Next, how does our authorization work
        /login
            -checkPassword
            -setupSendToken
            -sendListOfUsers for client filter request and looking up IDs
        /checkToken

    What about routes

        /myrequests
            -Shows everything that user created
            -No arguments
        /requests/query
            -Query the requests
            -event.body.filters
                .Status
                .Requester {}
                .Next Approver {}
                .TimePeriod {}
        /requests/comment
            -Commenting included Approving/Reject
        /requests/create
            -Event.body.
        /users/query
        /users/create
        /users/update

## Client