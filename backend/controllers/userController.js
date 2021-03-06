/****************************************************************
 * File name: userController.js
 * **************************************************************
 * File purpose:
 * This file defines the functionality for all users. User
 * routes point to functions in this file. Instead of having
 * all the route functionality described in the routes folder,
 * it is defined here and called in the route files.
 *
 ***************************************************************/

import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// authenticate a user and get user
// POST /api/users/login    (public)
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isHost: user.isHost,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// register a new user
// POST /api/users   (public)
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isHost: user.isHost,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

// get user profile
// GET /api/users/profile    (private)
const getUserProfile = asyncHandler(async (req, res) => {
  // get current logged in user
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isHost: user.isHost,
    });
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

// update user profile
// PUT /api/users/profile    (private)
const updateUserProfile = asyncHandler(async (req, res) => {
  // get current logged in user
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isHost: updatedUser.isHost,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
