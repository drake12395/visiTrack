import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Meeting from '../screens/Meeting';

const PassPreviewScreen = ({ visitor, funFact, imgSrc }) => {
  return (
    <Col>
      <Card style={{ width: '18rem' }} border='secondary'>
        {imgSrc === null ? (
          <Card.Img variant='top' src='images/default-placeholder-image.png' />
        ) : (
          <Card.Img variant='top' src={imgSrc} />
        )}

        <Card.Body>
          <Card.Title className='text-center'>VISITOR</Card.Title>
          <br />
          <Card.Subtitle name='visitor' value={visitor}>
            Name:
            {visitor}
          </Card.Subtitle>
          <br />
          <Card.Text name='funFact' value={funFact}>
            Fun Fact: {funFact}
          </Card.Text>
          <Card.Text name='room'>Meeting Room: 1</Card.Text>
        </Card.Body>
      </Card>
      <Meeting />
    </Col>
  );
};

export default PassPreviewScreen;
