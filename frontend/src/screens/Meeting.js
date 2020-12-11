import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { listMeetings } from '../actions/meetingActions';

const Meeting = ({ userInfo }) => {
  const dispatch = useDispatch();

  const meetingList = useSelector((state) => state.meetingList);
  const { meetings } = meetingList;

  useEffect(() => {
    dispatch(listMeetings());
  }, [dispatch]);

  return (
    <>
      {meetings.map((meeting) =>
        meeting.visitor.toLowerCase().trim() ===
        userInfo.name.toLowerCase().trim() ? (
          <Card style={{ width: '18rem' }} key={meeting._id}>
            <Card.Header>Meeting Details</Card.Header>
            <ListGroup variant='flush'>
              <ListGroup.Item>Guest Name: {meeting.visitor}</ListGroup.Item>
              <ListGroup.Item>Host Name: {meeting.host}</ListGroup.Item>
              <ListGroup.Item>Date: {meeting.meetDayTime}</ListGroup.Item>

              <ListGroup.Item>Location: {meeting.meetingRoom}</ListGroup.Item>
            </ListGroup>
          </Card>
        ) : (
          ''
        )
      )}
    </>
  );
};

export default Meeting;
