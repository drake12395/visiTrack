/****************************************************************
 * File name: generateToken.js
 * **************************************************************
 * File purpose:
 * This file is responsible for generating a json web token for
 * a registered user. The user id is passed to the jwt sign
 * method along with our JWT_SECRET stored as an environment
 * variable. This token allows for validation of a particular
 * user in the database. Each token is set to expire in 30 days.
 ***************************************************************/

import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export default generateToken;
