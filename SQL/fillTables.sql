INSERT INTO users VALUES 
-- id,       username,     pasword,                          name,        type, approveLimit,  approverId, approverName,     status
( 1,         'terryB',     'terry',            'Terry Bobbachoni',     'admin',            0,          -1,                           -1, true)
( 2,          'eddyG',      'eddy',                'Eddy Gorreat',  'approver',           -1,          -1,                           -1, true)
( 3,         'sarahP',     'sarah',             'Sarah Parantino',  'approver',         5000,           2,                'Eddy Gorreat', true)
( 4,        'sandraT',    'sandra', 'Sandra Tornapotarainyapolis',  'approver',         4000,           2,                'Eddy Gorreat', true)
( 5,        'tonyaB' ,     'tonya',                 'Tonya Baker',  'approver',         3000,           3,             'Sarah Parantino', true)
( 6,        'gerryL' ,     'gerry',              'Gerry Lawrence',  'approver',         1000,           4, 'Sandra Tornapotarainyapolis', true)
( 7,  'crawfordPlace',  'crawford',              'Crawford Place', 'requester',            0,           5,                 'Tonya Baker', true)
( 8, 'corneliusVilla', 'cornelius',             'Cornelius Villa', 'requester',            0,           5,                 'Tonya Baker', true)
( 9,    'debianHomes',    'debian',                'Debian Homes', 'requester',            0,           4, 'Sandra Tornapotarainyapolis', true)
(10,    'marlandApts',  'markland',         'Markland Apartments', 'requester',            0,           6,              'Gerry Lawrence', true)
;
