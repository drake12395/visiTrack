import React, { useState } from 'react';
import WelcomeText from './WelcomeText';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Form } from 'react-bootstrap';
import PassPreviewScreen from '../screens/PassPreviewScreen';
import meetings from '../meetings';
import Meeting from '../screens/Meeting';

import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const WebcamCapture = ({ match }) => {
  // const meeting = meetings.find((m) => m._id === 3);
  // console.log(meeting);
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

  const [visitor, setVisitor] = useState('');
  const [funFact, setFunFact] = useState('');
  const [toggle, setToggle] = useState(false);

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

  return (
    <>
      <WelcomeText />
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
        <PassPreviewScreen
          visitor={visitor}
          funFact={funFact}
          imgSrc={imgSrc}
          toggle={toggle}
        ></PassPreviewScreen>
      )}
      {toggle ? (
        <Button type='button' onClick={handleSubmit}>
          Go Back
        </Button>
      ) : (
        ''
      )}
    </>
  );
};

export default WebcamCapture;
