import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

import { getUserDetails, updateUserProfile } from '../actions/userActions';

// Standard registration form for new users.
// All users are entered and visitors and may be updated to host by another host.

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, user, history, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password.length >= 0 && password.length < 6) {
      setMessage('Password needs to contain at least six characters');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessageSuccess('Password updated');
      setMessage(null);
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <FormContainer>
      <h2>User Profile</h2>

      {message && <Message variant='danger'>{message}</Message>}
      {messageSuccess && <Message variant='success'>{messageSuccess}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {/* {success && <Message variant='success'>Profile Updated</Message>} */}
      {/* {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <LinkContainer to='/'>
          <Button variant='primary' className='btn-sm'>
            Go Back
          </Button>
        </LinkContainer>
        {/* <Button to='/' variant='primary'>
          Go Back
        </Button> */}
        <Button className='float-right' type='submit' variant='warning'>
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;
