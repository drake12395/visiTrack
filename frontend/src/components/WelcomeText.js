/****************************************************************
 * File name: WelcomeText.js
 * **************************************************************
 * File purpose:
 * This file contains text for a visitor that has signed in. This
 * component is consumed by WebcamCapture.js.
 ***************************************************************/

import React from 'react';

const WelcomeText = () => {
  return (
    <div className='HeaderText'>
      <h1>Welcome to Visitrack</h1>
      <h6>
        Thank you for visiting our Company. This is our automated sign in system
        that will get you set up with a visitor pass to wear during your time at
        our facility. Click "Capture photo" once you are ready for your picture
        to be taken. Feel free to take as many as you want until you see one
        that you like.
      </h6>
    </div>
  );
};

export default WelcomeText;
