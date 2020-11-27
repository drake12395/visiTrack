import React from 'react';
import { Card, Row } from 'react-bootstrap';
import Meeting from '../screens/Meeting';
import moment from 'moment';

const PassPreviewScreen = ({ visitor, funFact, imgSrc }) => {
  const expiresOn = moment().add(1, 'days').calendar();
  return (
    <>
      <div className='pass'>
        <div className='passTitleRow'>
          <h1>VISITOR</h1>
        </div>

        <div className='visitorInfoRow'>
          <div className='visitorImgCol left'>
            {imgSrc === null ? (
              <img
                className='passImage'
                src='images/default-placeholder-image.png'
              ></img>
            ) : (
              <img className='passImage' src={imgSrc} />
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
    </>
  );
};

export default PassPreviewScreen;
