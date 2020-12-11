import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import WebcamCapture from './components/WebcamCapture';
import Meeting from './screens/Meeting';
// import PassPreviewScreen from './screens/PassPreviewScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HostMeetings from './screens/HostMeetings';
import MeetingEditScreen from './screens/MeetingEditScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          {/* <VisitorSignInScreen /> */}
          <Route exact path='/' component={WebcamCapture} />
          <Route path='/meeting/:id' component={Meeting} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />

          <Route path='/hostmeetings' component={HostMeetings} />
          <Route path='/host/meeting/:id/edit' component={MeetingEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
