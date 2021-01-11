/****************************************************************
 * File name: FormController.js
 * **************************************************************
 * File purpose:
 * This file houses a container component used throughout the
 * application. It lies toward the root of the react tree and
 * centers all child data in a React-Bootstrap column based on
 * the size of the users display.
 ***************************************************************/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
