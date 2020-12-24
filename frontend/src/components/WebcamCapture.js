import React, { useState, useEffect } from 'react';
import WelcomeText from './WelcomeText';
import { Redirect } from 'react-router-dom';
import PrintInstructions from './PrintInstructions';
import { useDispatch, useSelector } from 'react-redux';
import Webcam from 'react-webcam';
import PassPreviewScreen from '../screens/PassPreviewScreen';
import { listMeetings } from '../actions/meetingActions';
import { logout } from '../actions/userActions';

import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';

const WebcamCapture = () => {
  const dispatch = useDispatch();

  const [funFact, setFunFact] = useState('');
  const [toggle, setToggle] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listMeetings());
  }, [dispatch]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  function handleFunFact(e) {
    setFunFact(e.target.value);
  }

  const handleSubmit = () => {
    setToggle(false);
  };

  const handleSubmitToPass = () => {
    setToggle(true);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      {!userInfo && <Redirect to='/login' />}
      {userInfo && userInfo.isHost && <Redirect to='/hostmeetings' />}
      {!toggle ? <WelcomeText /> : <PrintInstructions />}

      {toggle && (
        <div className='d-flex justify-content-center'>
          <Button type='button' onClick={handleSubmit} className='m-3'>
            Go Back
          </Button>

          <Button type='button' onClick={() => window.print()} className='m-3'>
            Print
          </Button>
          <Button type='button' onClick={logoutHandler} className='m-3'>
            Logout
          </Button>
        </div>
      )}

      {!toggle ? (
        <Container fluid>
          <Row>
            <Col>
              <Webcam
                audio={false}
                height={220}
                width={380}
                ref={webcamRef}
                videoConstraints={videoConstraints}
                screenshotFormat='image/jpeg'
              />
              <br />
              <Button variant='primary' onClick={capture}>
                Capture photo
              </Button>
              <Form className='guestSignIn' onSubmit={handleSubmit}>
                <Form.Label>Fun Fact</Form.Label>
                <Form.Group controlId='funFact'>
                  <Form.Control
                    type='text'
                    placeholder='Tell us a fun fact about yourself.'
                    onChange={handleFunFact}
                  ></Form.Control>
                </Form.Group>

                <Button
                  variant='secondary'
                  type='button'
                  onClick={handleSubmitToPass}
                >
                  view visitor pass
                </Button>
              </Form>
            </Col>
            <Col>
              {imgSrc === null ? (
                <div
                  className='placeHolder '
                  style={{ width: 380, height: 220 }}
                >
                  <Image
                    className='placeHolder '
                    variant='top'
                    src='images/personPlaceholder.png'
                  />
                </div>
              ) : (
                <Image className='placeHolder ' variant='top' src={imgSrc} />
              )}
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <PassPreviewScreen
            funFact={funFact}
            imgSrc={imgSrc}
            toggle={toggle}
          ></PassPreviewScreen>
        </div>
      )}
    </>
  );
};

export default WebcamCapture;
