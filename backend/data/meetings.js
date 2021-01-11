/****************************************************************
 * File name: meeting.js
 * **************************************************************
 * File purpose:
 * This file describes some dummy meetings that are used to
 * repopulate the database during testing.
 ***************************************************************/

const meetings = [
  {
    visitor: 'John Jones',
    host: 'Bill Smith',
    meetDayTime: Date.now(),
    meetingRoom: 'room 2',
    description: 'Interview for Hr position',
  },
  {
    visitor: 'Sally Sanders',
    host: 'Ted Turner',
    meetDayTime: Date.now(),
    meetingRoom: 'room 2',
    description: 'Expanding markets',
  },
  {
    visitor: 'Andy Birch',
    host: 'Don Johnson',
    meetDayTime: Date.now(),
    meetingRoom: 'room 1',
    description: 'Review meeting notes',
  },
  {
    visitor: 'Drake Schmidt',
    host: 'Carl Evans',
    meetDayTime: Date.now(),
    meetingRoom: 'room 3',
    description: 'Interview for Hr position',
  },
];

export default meetings;
