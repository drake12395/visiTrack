import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Form } from 'react-bootstrap';
import PassPreviewScreen from '../screens/PassPreviewScreen';
import meetings from '../meetings';
import Meeting from '../screens/Meeting';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const WebcamCapture = ({ match }) => {
  const meeting = meetings.find((m) => m._id === 3);
  console.log(meeting);
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

  const handleSubmit = (e) => {
    setToggle(true);

    e.preventDefault();
    // console.log(funFact);
  };

  return (
    <>
      <h1>Welcome to Visitrack</h1>
      <strong>
        Thank you for visiting our Company. This is our automated signin system
        that will get you set up with a visitor pass to wear during your time at
        our facility. Click "Capture photo" once you are ready for your picture
        to be taken. Feel free to take as many as you want until you see one
        that you like. Review your visitor pass on the right and click "Print
        visitor Pass" when you are ready.
      </strong>
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
                <Link to='/meeting' component={Meeting} funFact={funFact}>
                  print pass and meeting details
                </Link>
                <Button
                  variant='secondary'
                  type='submit'
                  onClick={handleSubmit}
                >
                  view visitor pass
                </Button>
              </Form>
            </Col>
            <Col>
              {imgSrc === null ? (
                <div style={{ width: 380, height: 220 }}>
                  <Image
                    className='placeHolder'
                    variant='top'
                    src='images/personPlaceholder.png'
                    // fluid
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
        ></PassPreviewScreen>
      )}
    </>
  );
};

export default WebcamCapture;
