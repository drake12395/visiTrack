import React, { useState } from 'react';
import WebcamCapture from '../components/WebcamCapture';
import { Button } from 'react-bootstrap';
import Meeting from './Meeting';
import PassPreviewScreen from './PassPreviewScreen';

const VisitorSignInScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // create visitor name and fun fact state here, pass it down to WebcamCapture. (pass as props??)
  //pass name, funFact and isSignedIn to webcamCapture
  //In webcamcapture, get user input for name and fact and pass it to PassPreviewScreen

  return (
    <div>
      <WebcamCapture />
    </div>
  );
};

export default VisitorSignInScreen;
