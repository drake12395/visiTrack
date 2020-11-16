import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import WebcamCapture from './components/WebcamCapture';
import HostMeetings from './screens/HostMeetings';
import CreateMeeting from './screens/CreateMeeting';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Route exact path='/createmeeting' component={CreateMeeting} />
          <Route path='/hostmeetings' component={HostMeetings} />
          <Route exact path='/' component={WebcamCapture} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
