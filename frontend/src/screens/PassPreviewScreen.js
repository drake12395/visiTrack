import React from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';
import Meeting from './Meeting';

const PassPreviewScreen = ({ visitor, funFact, imgSrc }) => {
  const expiresOn = moment().format('LL');

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
              <h4 className='passText'>{visitor}</h4>
              <h6 className='passText'>{funFact}</h6>
              <p className='passText'>Expires: {expiresOn}</p>
            </div>
          </div>
        </div>
        <br />

        {/* <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Link className='btn btn-primary my-3' to='/'>
              Go Back
            </Link>
            <Button onClick={handleClick}>Go Back</Button>
          </Col>
          <Col md='auto'>
            <Button>Print</Button>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default PassPreviewScreen;
