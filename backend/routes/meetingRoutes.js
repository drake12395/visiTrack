// routes point to controllers

import express from 'express';
const router = express.Router();
import {
  getMeetingById,
  getMeetings,
} from '../controllers/meetingController.js';

router.route('/').get(getMeetings);
router.route('/:id').get(getMeetingById);

export default router;
