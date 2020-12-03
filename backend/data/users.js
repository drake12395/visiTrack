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
    email: 'host@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'host@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
