/****************************************************************
 * File name: Meeting.js
 * **************************************************************
 * File purpose:
 * Return a view of the meeting to a visitor. This file is
 * consumed by PassPreviewScreen.js.
 * **************************************************************
 * File Features:
 * A list of meetings is captured from the store. The logged in
 * visitor name is compared to visitor names stored in previously
 * created meetings. If the said comparison finds a match, the
 * respective meeting entry is returned and available for the
 * visitor to view.
 ***************************************************************/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { listMeetings } from '../actions/meetingActions';

// Returns the correct meeting based logged in name and visitor name from database.

const Meeting = ({ userInfo }) => {
  const dispatch = useDispatch();

  const meetingList = useSelector((state) => state.meetingList);
  const { meetings } = meetingList;

  useEffect(() => {
    dispatch(listMeetings());
  }, [dispatch]);

  return (
    <>
      {meetings.map(
        (meeting) =>
          meeting.visitor.toLowerCase().trim() ===
            userInfo.name.toLowerCase().trim() && (
            <Card style={{ width: '18rem' }} key={meeting._id}>
              <Card.Header>Meeting Details</Card.Header>
              <ListGroup variant='flush'>
                <ListGroup.Item>Guest Name: {meeting.visitor}</ListGroup.Item>
                <ListGroup.Item>Host Name: {meeting.host}</ListGroup.Item>
                <ListGroup.Item>
                  Date: {meeting.meetDayTime.substring(0, 10)}
                </ListGroup.Item>

                <ListGroup.Item>Location: {meeting.meetingTime}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {meeting.description}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          )
      )}
    </>
  );
};

export default Meeting;
