CREATE TABLE users (
    username text, password text,
    name     text, type     text,
    approver text, approvelimit int,
    status bool
);

CREATE TABLE requests (
    requestId int, requestName text,
    status text,          amount int,
    unitName text,     itemType text,
    requester text, requesterName text,
    approver  text,
    reqComment text, createDate text,
    attributes text[][], comments text[][]
);