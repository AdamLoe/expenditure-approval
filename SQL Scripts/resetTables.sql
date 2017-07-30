DROP TABLE users;
DROP TABLE requests;
CREATE TABLE users (
    username text, password text,
    name     text, type     text,
    nextapprover text, approvelimit int
);

CREATE TABLE requests (
    requestId int, requestName text,
    status text, amount int,
    unitName text, itemType text,
    requestorName text, requestorId int,
    approverName  text, approverId  int,
    propertyName text,   propertyId int,
    requestorComment text, createDate timestamp,
    attributes text[][], comments text[][]
);