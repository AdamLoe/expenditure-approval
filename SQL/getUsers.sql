﻿DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS requests;

CREATE TABLE users (
    id serial PRIMARY KEY NOT NULL,
    username varchar(20) NOT NULL,
    password varchar(64) NOT NULL,
    access_token varchar(64),
    token_expir timestamp DEFAULT CURRENT_TIMESTAMP,
    name varchar(40),
    type varchar(20),
    email varchar(60),
    approvelimit int,
    approverId int REFERENCES users(id),
    status bool
);

CREATE TABLE requests (
    requestId serial PRIMARY KEY NOT NULL,
    status varchar(15) NOT NULL,
    requestName varchar(60) NOT NULL,
    amount int NOT NULL,
    unitName varchar(60) NOT NULL,
    requesterId int NOT NULL REFERENCES users(id),
    approverId  int NOT NULL REFERENCES users(id),
    createDate timestamp DEFAULT CURRENT_TIMESTAMP,
    updateDate timestamp DEFAULT CURRENT_TIMESTAMP,
    attributes text[][],
    comments text[][]
);


INSERT INTO users VALUES 
-- id,       username,     pasword,acc,exp,                          name,        type,  email, approveLimit,  approverId, status
( 1,         'terryB',     'terry','a',null,            'Terry Bobbachoni',     'admin',    'terry@se.com',      0,        null,  true),
( 2,          'eddyG',      'eddy','a',null,                'Eddy Gorreat',  'approver',     'eddy@se.com',    null,        null,  true),
( 3,         'sarahP',     'sarah','a',null,             'Sarah Parantino',  'approver',    'sarah@se.com',    5000,           2,  true),
( 4,        'sandraT',    'sandra','a',null, 'Sandra Tornapotarainyapolis',  'approver',   'sandra@se.com',    4000,           2,  true),
( 5,        'tonyaB' ,     'tonya','a',null,                 'Tonya Baker',  'approver',    'tonya@se.com',    3000,           3,  true),
( 6,        'gerryL' ,     'gerry','a',null,              'Gerry Lawrence',  'approver',    'gerry@se.com',    1000,           4,  true),
( 7,  'crawfordPlace',  'crawford','a',null,              'Crawford Place', 'requester', 'crawford@se.com',       0,           5,  true),
( 8, 'corneliusVilla', 'cornelius','a',null,             'Cornelius Villa', 'requester','cornelius@se.com',       0,           5,  true),
( 9,    'debianHomes',    'debian','a',null,                'Debian Homes', 'requester',   'debian@se.com',       0,           4,  true),
(10,    'marklandApts', 'markland','a',null,         'Markland Apartments', 'requester', 'markland@se.com',       0,           6,  true)
;


INSERT INTO requests
    (status,        requestName, amount,  unitName,requesterId, approverId)
   VALUES
    ('In Progress', 'Groceries',    400,  'Apt#219',         1,          2);

CREATE FUNCTION updateTokenExpir(int) RETURNS ROW AS $$
	BEGIN
		RETURN NEW
	END
	
CREATE TRIGGER OnTokenUpdate
    BEFORE UPDATE
    ON users
    FOR EACH ROW
    EXECUTE PROCEDURE updateTokenExpir();

UPDATE Users
	SET token_expir=DEFAULT
	WHERE id=1;
SELECT * FROM users;
--SELECT * FROM requests;
