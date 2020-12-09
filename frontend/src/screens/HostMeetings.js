import React, { useEffect } from 'react';
import { Table, Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  listMeetings,
  deleteMeeting,
  createMeeting,
} from '../actions/meetingActions';

const HostMeetings = () => {
  const dispatch = useDispatch();

  const meetingList = useSelector((state) => state.meetingList);
  const { meetings } = meetingList;

  useEffect(() => {
    dispatch(listMeetings());
  }, [dispatch]);

  // TODO - create deleteMeeting to be dispatched
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteMeeting(id));
    }
  };

  const createMeetingHandler = () => {
    dispatch(createMeeting());
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Meetings</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createMeetingHandler}>
            <i className='fas fa-plus'></i> Create Meeting
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Day / Time</th>
            <th>Location</th>
            <th>VISITOR</th>
            <th>Description</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting._id}>
              <td>{meeting._id}</td>
              <td>{meeting.meetDayTime}</td>
              <td>{meeting.location}</td>
              <td>{meeting.visitor}</td>
              <td></td>
              <td>
                <LinkContainer to={`/host/meeting/${meeting._id}/edit`}>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                  </Button>
                </LinkContainer>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(meeting._id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HostMeetings;
