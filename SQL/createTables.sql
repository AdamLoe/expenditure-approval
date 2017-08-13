CREATE TABLE users (
    userid int,
    username text, password text,
    name     text, type     text,
    approver text, approvelimit int,
    status bool
);

CREATE TABLE requests (
    requestId int, status text,
    requestName text, amount int,
    unitName text,
    requesterId int, requesterName text,
    approverId  int, approverName text,
    reqComment text, createDate timestamp,
    attributes text[][], comments text[][]
);