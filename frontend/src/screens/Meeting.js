import React from 'react';

import { Card, ListGroup } from 'react-bootstrap';

const Meeting = ({ meetings, visitor }) => {
  const visitorName = visitor.toLowerCase().trim();

  const meeting = meetings.find((m) => m._id === '1');

  console.log(meeting);
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Header>Meeting Details</Card.Header>
    //   <ListGroup variant='flush'>
    //     <ListGroup.Item>Guest Name: {meeting.guest}</ListGroup.Item>
    //     <ListGroup.Item>Host Name: {meeting.host}</ListGroup.Item>
    //     <ListGroup.Item>Date: {meeting.day}</ListGroup.Item>
    //     <ListGroup.Item>Time: {meeting.time}</ListGroup.Item>
    //     <ListGroup.Item>Location: {meeting.location}</ListGroup.Item>
    //   </ListGroup>
    // </Card>
    <div>sd</div>
  );
};

export default Meeting;
