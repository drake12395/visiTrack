/****************************************************************
 * File name: userModel.js
 * **************************************************************
 * File purpose:
 * This file defines the model for all users. Each field has
 * has a type and a boolean requried value. Password matching is
 * handled here by bcrypt
 ***************************************************************/

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// the object below defines the schema for each user stored in MongoDB.

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isHost: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// call matchPassword on user and and compare passwords via bcrypt compare function
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// if the password hasn't been modified, call next. Otherwise,
// hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // hash the password ten times for optimal security
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
