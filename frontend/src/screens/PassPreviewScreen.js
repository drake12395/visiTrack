import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Col, Row, Button, Container } from 'react-bootstrap';
import Meeting from '../screens/Meeting';
import moment from 'moment';

const PassPreviewScreen = ({ visitor, funFact, imgSrc, toggle }) => {
  const expiresOn = moment().format('LL');
  let history = useHistory();
  // console.log(toggle);
  // console.log(visitor);

  // const handleClick = () => {
  //   toggle = false;
  //   console.log(toggle);
  // };

  return (
    <>
      <Container>
        <div className='pass'>
          <div className='passTitleRow'>
            <h1>VISITOR</h1>
          </div>

          <div className='visitorInfoRow'>
            <div className='visitorImgCol left'>
              {imgSrc === null ? (
                <img
                  alt=''
                  className='passImage'
                  src='images/default-placeholder-image.png'
                ></img>
              ) : (
                <img alt='' className='passImage' src={imgSrc} />
              )}
            </div>
            <div className='visitorTextCol right'>
              {/* holds: first, last, funfact, expiration  */}
              <h4 className='passText'>{visitor}</h4>
              <h6 className='passText'>{funFact}</h6>
              <p className='passText'>Expires: {expiresOn}</p>
            </div>
          </div>
        </div>
        <br />
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            {/* <Link className='btn btn-primary my-3' to='/'>
              Go Back
            </Link> */}
            {/* <Button onClick={handleClick}>Go Back</Button> */}
          </Col>
          <Col md='auto'>
            <Button>Print</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PassPreviewScreen;
