INSERT INTO users VALUES (
  -- username  |  password
     'terryB'  ,   'terry',
  --   name    |    type
 'Terry Bobbachoni' ,  'admin',
  --  nextAprv |  aprvLimit
       -1  ,   -1
 );
INSERT INTO users VALUES (
 -- username  |  password
    'eddyG'   ,   'eddy',
 --   name    |    type
'Eddy Gorreat',  'approver',
 --  nextAprv |  aprvLimit
      -1      ,    -1,
      true
);
INSERT INTO users VALUES (
 -- username  |  password
    'sarahP'  ,   'sarah',
 --   name    |    type
'Sarah Parantino',  'approver',
 --  nextAprv |  aprvLimit
      'eddyG' ,    5000,
      true
);
INSERT INTO users VALUES (
 -- username  |  password
    'sandraT'  ,   'sandra',
 --   name    |    type
'Sandra Tornapotarainyapolis' ,  'approver',
 --  nextAprv |  aprvLimit
      'eddyG'  ,    4000,
      true
);
INSERT INTO users VALUES (
  -- username  |  password
     'tonyaB'  ,   'tonya',
  --   name    |    type
 'Tonya Baker' ,  'approver',
  --  nextAprv |  aprvLimit
       'sarahP'  ,    3000,
      true
 );
 INSERT INTO users VALUES (
  -- username  |  password
     'gerryL'  ,   'gerry',
  --   name    |    type
 'Gerry Lawnrence' ,  'approver',
  --  nextAprv |  aprvLimit
       'sandraT'  ,   1000,
      true
 );
INSERT INTO users VALUES (
  -- username  |  password
     'crawfordPlace'  ,   'crawford',
  --   name    |    type
 'Crawford Place' ,  'requester',
  --  nextAprv |  aprvLimit
       'tonyaB'  ,   0,
      true
 );
 INSERT INTO users VALUES (
   -- username  |  password
      'corneliusVilla'  ,   'cornelius',
   --   name    |    type
  'Cornelius Villa Apartments' ,  'requester',
   --  nextAprv |  aprvLimit
        'tonyaB'  ,   0,
      true
  );
INSERT INTO users VALUES (
  -- username  |  password
     'debianHomes'  ,   'debian',
  --   name    |    type
 'Debian Homes' ,  'requester',
  --  nextAprv |  aprvLimit
       'sandraT'  ,   0,
      true
 );
INSERT INTO users VALUES (
  -- username  |  password
     'marklandApts'  ,   'markland',
  --   name    |    type
 'Markland Apts' ,  'requester',
  --  nextAprv |  aprvLimit
       'gerryL'  ,   0,
      true
 );





INSERT INTO requests VALUES (
--   id        |      name
       1       ,   'Hand Dryer'  ,
-- status      |   amount
  'In Process' ,     85
--   unit    |    type
   'AC45'      ,    'Personal'
-- requestor  | requestorId
   'Clankus Tamperskin',
-- approver   | approverId

--  property  | propertyId |
--  requestorComment | createDate
);


