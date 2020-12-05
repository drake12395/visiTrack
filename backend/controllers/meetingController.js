import asyncHandler from 'express-async-handler';
import Meeting from '../models/meetingModel.js';

// request all meetings
// GET /api/meetings
const getMeetings = asyncHandler(async (req, res) => {
  const meetings = await Meeting.find({});
  res.json(meetings);
});

// request meeting by id
// check each id in meetings object and find the one that matches the one in the browser
const getMeetingById = asyncHandler(async (req, res) => {
  const meeting = await Meeting.findById(req.params.id);

  if (meeting) {
    res.json(meeting);
  } else {
    //thrown for a formatted meeting id that doesnt exist in the db
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getMeetings, getMeetingById };
