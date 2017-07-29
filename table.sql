CREATE TABLE users (
    username text, password text,
    name     text, type     text,
    nextapprover text, approvelimit int
);

CREATE TABLE requests (
    requestId int, requestName text,
    requestor name, nextRequestorName text, nextRequestorId id,
    status text, amount int,
    propertyId int, propertyName text,
    unitName text, itemType text,
    requestorComment text, createDate timestamp, lastEditDate timestamp,
    attributes text[][], -- {{Price, 2524},{Shipping, 0},{Tax, 0}, {OtherCost, 0}}
    comments text[][]   -- {{Date, Comment, Name}}
);