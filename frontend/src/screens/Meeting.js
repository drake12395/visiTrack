import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { listMeetings } from '../actions/meetingActions';

const Meeting = ({ userInfo }) => {
  // const visitorName = visitor.toLowerCase().trim();
  const dispatch = useDispatch();

  const meetingList = useSelector((state) => state.meetingList);
  const { meetings } = meetingList;

  useEffect(() => {
    dispatch(listMeetings());
  }, [dispatch]);

  console.log(meetings);
  console.log(userInfo.name);

  // const meeting = meetings.find(
  //   (m) => m.visitor.toLowerCase().trim() === userInfo.name.toLowerCase().trim()
  // );
  // console.log(meeting);

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

              <ListGroup.Item>Location: {meeting.location}</ListGroup.Item>
            </ListGroup>
          </Card>
        ) : (
          ''
        )
      )}
    </>

    // <div>blahs</div>
  );
};

export default Meeting;
