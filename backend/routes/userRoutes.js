/****************************************************************
 * File name: userRoutes.js
 * **************************************************************
 * File purpose:
 * This file interacts with the logic layed out in the user
 * controller. The user routes called here are responsible
 * for handling client requests which include: authenticating
 * a user, getting a users profile, registering a user,
 * and updating a users profile.
 ***************************************************************/

// routes point to controllers
import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
