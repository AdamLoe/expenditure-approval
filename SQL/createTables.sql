CREATE TABLE users (
    id int, 
    username text, password text,
    name text, type text, 
    approvelimit int,
    approverId int, approverName text,
    status bool
);

CREATE TABLE requests (
    requestId int, status text,
    requestName text, 
    amount int,
    unitName text,
    requesterId int, requesterName text,
    approverId  int, approverName text,
    createDate timestamp,
    attributes text[][], 
    comments text[][]
);

CREATE TABLE filters (
    name text, json text
)

INSERT INTO filters VALUES ('approvers'),
                           ('requesters');