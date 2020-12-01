import React, { useState, useEffect } from 'react';
import WelcomeText from './WelcomeText';
import PrintInstructions from './PrintInstructions';

import Webcam from 'react-webcam';
import { Form } from 'react-bootstrap';
import PassPreviewScreen from '../screens/PassPreviewScreen';
import Meeting from '../screens/Meeting';
import axios from 'axios';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const WebcamCapture = () => {
  const [meetings, setMeetings] = useState([]);

  const [visitor, setVisitor] = useState('');
  const [funFact, setFunFact] = useState('');
  const [toggle, setToggle] = useState(false);
  const [toggleMeeting, setToggleMeeting] = useState(false);

  // make a request to the backend, this runs as soon as the component loads
  // use axios instead of fetch becuase its easier and has greater functionality
  // create a function within useEffect so async await can be used
  useEffect(() => {
    const fetchMeetings = async () => {
      const { data } = await axios.get('/api/meetings');
      setMeetings(data);
    };
    fetchMeetings();
  }, []);

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

  function handleVisitor(e) {
    setVisitor(e.target.value);
  }

  function handleFunFact(e) {
    setFunFact(e.target.value);
  }

  const handleSubmit = () => {
    setToggle(false);
  };

  const handleSubmitToPass = () => {
    setToggle(true);
  };

  const handleMeeting = () => {
    setToggleMeeting(true);
  };

  return (
    <>
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
                <Form.Group controlId='guestName'>
                  <Form.Label>
                    Full Name<span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    // name='visitor'
                    // value={visitor}
                    onChange={handleVisitor}
                    placeholder='Please provide your first and last name.'
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='funFact'>
                  <Form.Label>
                    Fun Fact<span style={{ color: 'red' }}>*</span>
                  </Form.Label>
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

                {/* <Link to='/passpreviewscreen'>passPrev</Link> */}
              </Form>
            </Col>
            <Col>
              {imgSrc === null ? (
                <div style={{ width: 380, height: 220 }}>
                  <Image
                    className='placeHolder'
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
            visitor={visitor}
            funFact={funFact}
            imgSrc={imgSrc}
            toggle={toggle}
          ></PassPreviewScreen>
          <Meeting meetings={meetings} visitor={visitor} />
        </div>
      )}
      {toggle ? (
        <div className='d-flex justify-content-center'>
          <Button type='button' onClick={handleSubmit} className='m-3'>
            Go Back
          </Button>

          <Button type='button' onClick={handleSubmit} className='m-3'>
            Print
          </Button>
          <Button type='button' onClick={handleMeeting} className='m-3'>
            Meeting Details
          </Button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default WebcamCapture;
