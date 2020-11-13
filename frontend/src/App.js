import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import WebcamCapture from './components/WebcamCapture';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Visitrack</h1>
          <WebcamCapture />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
