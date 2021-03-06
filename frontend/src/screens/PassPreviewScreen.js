/****************************************************************
 * File name: PassPreviewScreen.js
 * **************************************************************
 * File purpose:
 * This file allows for a visitor to view her/his visitor pass
 * and meeting once a desired photo of the visitor has been
 * captured. This screen is consumed by WebcamCapture.js.
 * **************************************************************
 * File features:
 * Global state allows for the Meeting component to match the
 * correct meeting to be displayed.
 ***************************************************************/

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import Meeting from './Meeting';

// Creates a visitor pass that shows the picture and fun fact selected by the user

const PassPreviewScreen = ({ funFact, imgSrc }) => {
  const expiresOn = moment().format('LL');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <Container>
        <Row>
          <Col>
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
                  <h4 className='passText'>{userInfo.name}</h4>
                  <h6 className='passText'>{funFact}</h6>
                  <p className='passText'>Expires: {expiresOn}</p>
                </div>
              </div>
            </div>
            <br />
          </Col>
          <Col>
            <Meeting userInfo={userInfo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PassPreviewScreen;
