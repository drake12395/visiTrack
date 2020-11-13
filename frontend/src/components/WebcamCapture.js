import React from 'react';
import Webcam from 'react-webcam';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const WebcamCapture = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Container>
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
            <Button variant='primary' onClick={capture}>
              Capture photo
            </Button>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} border='secondary'>
              <Card.Img variant='top' src={imgSrc} />
              <Card.Body>
                <Card.Title>Guest Name</Card.Title>
                <Card.Text>
                  Guest info: Bob is here to see Bill at 1:30
                </Card.Text>
              </Card.Body>
            </Card>
            <Button variant='secondary'>Print Guest Pass</Button>
          </Col>
        </Row>
      </Container>

      {/* {imgSrc && <img src={imgSrc} alt={imgSrc} />} */}
    </>
  );
};

export default WebcamCapture;
