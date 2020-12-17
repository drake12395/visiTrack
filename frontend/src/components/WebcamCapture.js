import React, { useState, useEffect } from 'react';
import WelcomeText from './WelcomeText';
import { Redirect } from 'react-router-dom';
import PrintInstructions from './PrintInstructions';
import { useDispatch, useSelector } from 'react-redux';
import Webcam from 'react-webcam';
import PassPreviewScreen from '../screens/PassPreviewScreen';
import { listMeetings } from '../actions/meetingActions';

import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { MEETING_NOTIFY_RESET } from '../constants/meetingConstants';

const WebcamCapture = ({ location }) => {
  const dispatch = useDispatch();

  const [funFact, setFunFact] = useState('');
  const [toggle, setToggle] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const meetingDetails = useSelector((state) => state.meetingDetails);
  // const { meeting } = meetingDetails;

  const notifyHost = useSelector((state) => state.notifyHost);
  const { success: successNotify } = notifyHost;

  // if the url query string exists, split
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (successNotify) {
      dispatch({ MEETING_NOTIFY_RESET });
    }

    dispatch(listMeetings());
  }, [dispatch, successNotify]);

  // TODO --- get timestamp of when host checks in and display it in host meeting detail log.
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

  // const notifyHostHandler = () => {
  //   dispatch(meetingNotification(meeting));
  // };

  return (
    <>
      {userInfo && userInfo.isHost && <Redirect to='/hostmeetings' />}
      {!toggle ? <WelcomeText /> : <PrintInstructions />}

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
                <Image variant='top' src={imgSrc} />
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
      {toggle ? (
        <div className='d-flex justify-content-center'>
          <Button type='button' onClick={handleSubmit} className='m-3'>
            Go Back
          </Button>

          <Button type='button' onClick={() => window.print()} className='m-3'>
            Print
          </Button>
          {/* <Button type='button' onClick={notifyHostHandler} className='m-3'>
            notify host
          </Button> */}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default WebcamCapture;
