/****************************************************************
 * File name: user.js
 * **************************************************************
 * File purpose:
 * This file describes some dummy users that are used to
 * repopulate the database during testing.
 ***************************************************************/

import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Host User',
    email: 'host@example.com',
    password: bcrypt.hashSync('123456', 10),
    isHost: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
