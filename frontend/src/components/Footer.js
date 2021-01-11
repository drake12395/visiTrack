/****************************************************************
 * File name: Footer.js
 * **************************************************************
 * File purpose:
 * This file houses the footer component that is seen at the
 * bottom of each view throughout the application.
 ***************************************************************/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; visitrack</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
