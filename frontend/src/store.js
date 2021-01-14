/****************************************************************
 * File name: store.js
 * **************************************************************
 * File purpose:
 * This file provides global state to the application.
 * Acts as a connection hub for all reducers and middleware.
 ***************************************************************/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  meetingListReducer,
  meetingDeleteReducer,
  meetingUpdateReducer,
  meetingtDetailsReducer,
  meetingCreateReducer,
} from './reducers/meetingReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  meetingList: meetingListReducer,
  meetingDelete: meetingDeleteReducer,
  meetingUpdate: meetingUpdateReducer,
  meetingDetails: meetingtDetailsReducer,
  meetingCreate: meetingCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// what we want to be loaded when the store loads initially
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
