/****************************************************************
 * File name: Loader.js
 * **************************************************************
 * File purpose:
 * This file houses the Loader component that is used throughout
 * the application. For components that require some time to load
 * (ex. data coming from the database) this feature precedes the
 * data that is coming. This allows the user to understand that
 * his/her experience is only briefly being delayed and will
 * continue as intended as soon as intended data is loaded. React
 * Bootstrap makes this loader possible and its attributes are
 * specified below.
 ***************************************************************/

import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
