/****************************************************************
 * File name: meetingRoutes.js
 * **************************************************************
 * File purpose:
 * This file interacts with the logic layed out in the meeting
 * controller. The meeting routes called here are responsible
 * for handling client requests which include: getting an meeting
 * by its ID, getting all meetings, creating a meeting, removing
 * a meeting, and updating a meeting.
 ***************************************************************/

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
router.route('/hostmeetings').get(protect, host, getMeetings);
router.route('/:id/notify');

router
  .route('/:id')
  .get(getMeetingById)
  .delete(protect, host, deleteMeeting)
  .put(protect, host, updateMeeting);

export default router;
