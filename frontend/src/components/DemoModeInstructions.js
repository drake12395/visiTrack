import React from 'react';

const DemoModeInstructions = () => {
  return (
    <div>
      <h4>Demo Mode Details</h4>
      <h5>
        This application uses a webcam for creating a visitor ID card. You may
        continue without using the web cam if you would like.
      </h5>
      <h5>
        This check-in system has two types of user interfaces, visitor and host.
        Use the following credentials to access the system for each type of
        user. Feel free to create an account, though you will not have a meeting
        scheduled. Signing in with the demo accounts will show full
        functionality.
      </h5>

      <p>
        visitor email: jane@example.com
        <br />
        visitor password: 123456
        <br />
        host email: host@example.com
        <br />
        host password: 123456
      </p>
    </div>
  );
};

export default DemoModeInstructions;
