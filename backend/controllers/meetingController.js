/****************************************************************
 * File name: meetingController.js
 * **************************************************************
 * File purpose:
 * This file defines the functionality for all meetings. Meeting
 * routes point to functions in this file. Instead of having
 * all the route functionality described in the routes folder,
 * it is defined here and called in the route files.
 *
 ***************************************************************/

import asyncHandler from 'express-async-handler';
import Meeting from '../models/meetingModel.js';

// request all meetings
// GET /api/meetings
const getMeetings = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        visitor: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const meetings = await Meeting.find({ ...keyword });
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
    throw new Error('Meeting not found');
  }
});

// @desc    Create a meeting
// @route   POST /api/meetings
// @access  Private/Admin
const createMeeting = asyncHandler(async (req, res) => {
  const meeting = new Meeting({
    user: req.user._id,
    host: 'Sample name',
    visitor: 'Sample visitor',
    meetDayTime: new Date(),
    meetingTime: '',
    meetingRoom: 'sample location',
    description: 'Sample description',
  });

  const createdMeeting = await meeting.save();
  res.status(201).json(createdMeeting);
});

// @desc    Update a meeting
// @route   PUT /api/meeting/:id
// @access  Private/host
const updateMeeting = asyncHandler(async (req, res) => {
  const {
    host,
    visitor,
    meetDayTime,
    meetingTime,
    meetingRoom,
    description,
  } = req.body;

  const meeting = await Meeting.findById(req.params.id);

  if (meeting) {
    meeting.host = host;
    meeting.visitor = visitor;
    meeting.description = description;

    meeting.meetDayTime = meetDayTime;
    meeting.meetingTime = meetingTime;
    meeting.meetingRoom = meetingRoom;

    const updatedMeeting = await meeting.save();
    res.json(updatedMeeting);
  } else {
    res.status(404);
    throw new Error('Meeting not found');
  }
});

// @desc    Delete a meeting
// @route   DELETE /api/meetings/:id
// @access  Private/host
const deleteMeeting = asyncHandler(async (req, res) => {
  const meeting = await Meeting.findById(req.params.id);

  if (meeting) {
    await meeting.remove();
    res.json({ message: 'meeting removed' });
  } else {
    res.status(404);
    throw new Error('meeting not found');
  }
});

export {
  getMeetings,
  getMeetingById,
  createMeeting,
  deleteMeeting,
  updateMeeting,
};
