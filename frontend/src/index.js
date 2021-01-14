/****************************************************************
 * File name: index.js
 * **************************************************************
 * File purpose:
 * This file renders the root div in index.html. Serves as the
 * root of the Javascript/React files and is wrapped in Provider
 * to allow for store access throughout the application.
 ***************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min (5).css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
