// routes point to controllers

import express from 'express';

const router = express.Router();
import {
  getMeetingById,
  getMeetings,
  createMeeting,
  deleteMeeting,
  updateMeeting,
} from '../controllers/meetingController.js';
import { protect, host } from '../middleware/authMiddleware.js';

router.route('/').get(getMeetings).post(protect, host, createMeeting);

// router.put(protect, host, updateMeeting);
router
  .route('/:id')
  .get(getMeetingById)
  .delete(protect, host, deleteMeeting)
  .put(protect, host, updateMeeting);

export default router;
