// routes point to controllers

import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import { protect, visitor } from '../middleware/authMiddleware.js';

router.route('/').post(visitor, registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
