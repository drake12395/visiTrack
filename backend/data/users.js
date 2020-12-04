import bcrypt from 'bcryptjs';
// rvw user schema make sure it matches, the chen meeting (problme is probably in meeting)
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
