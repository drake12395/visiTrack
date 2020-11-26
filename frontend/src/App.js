import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import WebcamCapture from './components/WebcamCapture';
import HostMeetings from './screens/HostMeetings';
import CreateMeeting from './screens/CreateMeeting';
import PassPreviewScreen from './screens/PassPreviewScreen';
import Meeting from './screens/Meeting';
import VisitorSignInScreen from './screens/VisitorSignInScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <VisitorSignInScreen />
          {/* <Route exact path='/' component={WebcamCapture} />
          <Route path='/meeting' component={Meeting} />
          <Route path='/createmeeting' component={CreateMeeting} />

          <Route path='/hostmeetings' component={HostMeetings} />

          <Route path='/passpreviewscreen' component={PassPreviewScreen} /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
