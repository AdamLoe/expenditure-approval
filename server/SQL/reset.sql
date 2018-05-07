DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS requests;

CREATE TABLE users (
    id serial PRIMARY KEY NOT NULL,
    username varchar(20) NOT NULL,
    password varchar(64) NOT NULL,
    access_token varchar(64),
    token_expir timestamp DEFAULT CURRENT_TIMESTAMP,
    nickname varchar(20),
    fullname varchar(60),
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
    amount varchar(15) NOT NULL,
    unitName varchar(60) NOT NULL,
    requesterId int NOT NULL REFERENCES users(id),
    approverId  int NOT NULL REFERENCES users(id),
    createDate timestamp DEFAULT CURRENT_TIMESTAMP,
    updateDate timestamp DEFAULT CURRENT_TIMESTAMP,
    description varchar(240) NOT NULL,
    attributes text[][],
    comments text[][]
);

INSERT INTO users VALUES
-- id,       username,     pasword,acc,exp,  'nickname',                    'fullname',        type,             email,approveLimit,  approverId, status
( 1,         'terryB',     'terry','a',null,    'Terry',            'Terry Bobbachoni',     'admin',    'terry@se.com',           0,        null,  true),
( 2,          'eddyG',      'eddy','a',null,     'Eddy',                'Eddy Gorreat',  'approver',     'eddy@se.com',        null,        null,  true),
( 3,         'sarahP',     'sarah','a',null,    'Sarah',             'Sarah Parantino',  'approver',    'sarah@se.com',        5000,           2,  true),
( 4,        'sandraT',    'sandra','a',null,   'Sandra', 'Sandra Tornapotarainyapolis',  'approver',   'sandra@se.com',        4000,           2,  true),
( 5,        'tonyaB' ,     'tonya','a',null,    'Tonya',                 'Tonya Baker',  'approver',    'tonya@se.com',        3000,           3,  true),
( 6,        'gerryL' ,     'gerry','a',null,    'Gerry',              'Gerry Lawrence',  'approver',    'gerry@se.com',        1000,           4,  true),
( 7,  'crawfordPlace',  'crawford','a',null, 'Crawford',              'Crawford Place', 'requester', 'crawford@se.com',           0,           5,  true),
( 8, 'corneliusVilla', 'cornelius','a',null,'Cornelius',             'Cornelius Villa', 'requester','cornelius@se.com',           0,           5,  true),
( 9,    'debianHomes',    'debian','a',null,   'Debian',                'Debian Homes', 'requester',   'debian@se.com',           0,           4,  true),
(10,    'marklandApts', 'markland','a',null, 'Markland',         'Markland Apartments', 'requester', 'markland@se.com',           0,           6,  true)
;


CREATE OR REPLACE FUNCTION updatetokenexpir()
	RETURNS TRIGGER AS $$
BEGIN
	NEW.token_expir = current_timestamp;
	RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

CREATE TRIGGER OnTokenUpdate
    BEFORE UPDATE
    ON users
    FOR EACH ROW
    EXECUTE PROCEDURE updatetokenexpir();

UPDATE Users
	SET access_token='WW0ZSilosbcpMufIoWFhLRUp2rMKgHxEPVDN4U4xqjhv4MNjvBf2Wk5LGwgm92zm'
	WHERE id=1;
SELECT * FROM users;
--SELECT * FROM requests;
