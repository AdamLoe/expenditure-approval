CREATE TABLE users (
    username text, password text,
    name     text, type     text,
    approver text, approvelimit int
);

CREATE TABLE requests (
    requestId int, requestName text,
    status text,          amount int,
    unitName text,     itemType text,
    requestor text, requestorId text,
    approver  text, approverId  text,
    property text,   propertyId text,
    requestorComment text, createDate timestamp,
    attributes text[][], comments text[][]
);