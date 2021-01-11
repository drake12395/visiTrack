/****************************************************************
 * File name: Message.js
 * **************************************************************
 * File purpose:
 * This file houses the Message component that is made possible
 * by the react bootstrap Alert feature.  This feature is used
 * throughout the application where a user expects some feedback
 * from the system (ex. "your profile has been updated").
 ***************************************************************/

import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
