import React from 'react';
import meetings from '../meetings';
import { Card, ListGroup } from 'react-bootstrap';

const Meeting = ({ meeting }) => {
  //   let { match } = this.props;
  //   const meeting = meetings.find((m) => m._id === match.params.id);
  //   console.log(props.location.state);
  console.log({ meeting });
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
    <div>
      This is the contents of the meeting screen
      {/* {visitor} */}
    </div>
  );
};

export default Meeting;
