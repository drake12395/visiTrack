/****************************************************************
 * File name: PrintInstructions.js
 * **************************************************************
 * File purpose:
 * This file houses the some printing instructions that were
 * placed here to reduce bloat in the WebcamCapture file.
 ***************************************************************/

import React from 'react';

const PrintInstructions = () => {
  return (
    <div className='HeaderText'>
      <h1>Your Visitor Pass</h1>
      <h6>
        Please print the pass and insert it into the protective case attached to
        the lanyard that has been provided. Please logout when finished and your
        host will be with you shortly.
      </h6>
    </div>
  );
};

export default PrintInstructions;
