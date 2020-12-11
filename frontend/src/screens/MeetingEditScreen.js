import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listMeetingDetails, updateMeeting } from '../actions/meetingActions';
import { MEETING_UPDATE_RESET } from '../constants/meetingConstants';

const MeetingEditScreen = ({ match, history }) => {
  const meetingId = match.params.id;

  const [visitor, setVisitorName] = useState('');
  const [host, setHostName] = useState('');
  const [meetDayTime, setDayTime] = useState('');
  const [meetingRoom, setMeetingRoom] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const meetingDetails = useSelector((state) => state.meetingDetails);
  const { loading, error, meeting } = meetingDetails;

  const meetingUpdate = useSelector((state) => state.meetingUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = meetingUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: MEETING_UPDATE_RESET });
      history.push('/hostmeetings');
    } else {
      if (meeting._id !== meetingId) {
        dispatch(listMeetingDetails(meetingId));
      } else {
        setVisitorName(meeting.visitor);
        setHostName(meeting.host);
        setDayTime(meeting.meetDayTime);
        setMeetingRoom(meeting.meetingRoom);
        setDescription(meeting.description);
      }
    }
  }, [dispatch, history, meetingId, meeting, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateMeeting({
        _id: meetingId,
        visitor,
        host,
        meetDayTime,
        meetingRoom,
        description,
      })
    );
  };

  return (
    <>
      <Link to='/hostmeetings' className='btn btn-light my-3'>
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit Meeting</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='host'>
              <Form.Label>Host</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter host name'
                value={host}
                onChange={(e) => setHostName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='visitor'>
              <Form.Label>Visitor</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter visitor name'
                value={visitor}
                onChange={(e) => setVisitorName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='meetDayTime'>
              <Form.Label>Day / Time</Form.Label>
              <Form.Control
                type='Date'
                value={meetDayTime}
                onChange={(e) => setDayTime(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='meetingRoom'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter location of meeting'
                value={meetingRoom}
                onChange={(e) => setMeetingRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                type='text'
                placeholder='Enter meeting details'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default MeetingEditScreen;
