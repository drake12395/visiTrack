import React, { useState } from 'react';
import WebcamCapture from '../components/WebcamCapture';
import { Button } from 'react-bootstrap';
import Meeting from './Meeting';
import PassPreviewScreen from './PassPreviewScreen';

const VisitorSignInScreen = () => {
  return (
    <div>
      <WebcamCapture />
    </div>
  );
};

export default VisitorSignInScreen;
