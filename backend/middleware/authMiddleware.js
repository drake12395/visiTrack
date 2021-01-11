/****************************************************************
 * File name: authMiddleware.js
 * **************************************************************
 * File purpose:
 * This file uses JWT (jwt.io) to encode and decode protected
 * users (hosts and visitors). These authorization features are
 * used for restriced route access throughout the application.
 ***************************************************************/

import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// checks for auth and ensures its format is correct
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // isolate token and pass into verify with secret
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // fetch the user without the password to allow access to all protected routes
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// checks for host credentials
const host = (req, res, next) => {
  if (req.user && req.user.isHost) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an host');
  }
};

// checks for visitor credentials
const visitor = (req, res, next) => {
  if (req.user && !req.user.isHost) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as a visitor');
  }
};

export { protect, host, visitor };
