import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import WebcamCapture from './components/WebcamCapture';
import Meeting from './screens/Meeting';
import PassPreviewScreen from './screens/PassPreviewScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          {/* <VisitorSignInScreen /> */}
          <Route exact path='/' component={WebcamCapture} />
          <Route path='/meeting/:id' component={Meeting} />
          {/* <Route path='/createmeeting' component={CreateMeeting} />

          <Route path='/hostmeetings' component={HostMeetings} /> */}

          {/* <Route
            path='/passpreviewscreen'
            render={(props) => (
              <PassPreviewScreen {...props} title={`Props through render`} />
            )}
          /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
