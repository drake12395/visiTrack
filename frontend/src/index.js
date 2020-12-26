import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min (5).css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// All components are wrapped with Provider to allow store access.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
