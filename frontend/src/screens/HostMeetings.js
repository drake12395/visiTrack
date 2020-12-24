import React, { useEffect } from 'react';
import { Table, Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  listMeetings,
  deleteMeeting,
  createMeeting,
} from '../actions/meetingActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SearchBox from '../components/SearchBox';
import { MEETING_CREATE_RESET } from '../constants/meetingConstants';

const HostMeetings = ({ history, match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const meetingList = useSelector((state) => state.meetingList);
  const { meetings } = meetingList;

  const meetingDelete = useSelector((state) => state.meetingDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = meetingDelete;

  const meetingCreate = useSelector((state) => state.meetingCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    meeting: createdMeeting,
  } = meetingCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: MEETING_CREATE_RESET });

    if (!userInfo || !userInfo.isHost) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/host/meeting/${createdMeeting._id}/edit`);
    } else {
      dispatch(listMeetings(keyword));
    }
  }, [
    dispatch,
    keyword,
    history,
    userInfo,
    successCreate,
    successDelete,
    createdMeeting,
  ]);

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
        <Col>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createMeetingHandler}>
            <i className='fas fa-plus'></i> Create Meeting
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>yyyy-mm-dd</th>
            <th>Time</th>
            <th>VISITOR</th>
            <th>Description</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map(
            (meeting) =>
              meeting.host.toLowerCase().trim() ===
                userInfo.name.toLowerCase().trim() && (
                <tr key={meeting._id}>
                  <td>{meeting._id}</td>
                  <td>{meeting.meetDayTime.substring(0, 10)}</td>
                  <td>{meeting.meetingTime}</td>
                  <td>{meeting.visitor}</td>
                  <td>{meeting.description}</td>
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
              )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default HostMeetings;
