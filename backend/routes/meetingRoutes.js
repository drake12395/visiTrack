import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Meeting from '../models/meetingModel.js';

// request all meetings
// GET /api/meetings

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const meetings = await Meeting.find({});
    res.json(meetings);
  })
);

// request meeting by id
// check each id in meetings object and find the one that matches the one in the browser
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const meeting = await Meeting.findById(req.params.id);

    if (meeting) {
      res.json(meeting);
    } else {
      res.status(404).json({ message: 'Meeting not found' });
    }
  })
);

export default router;
