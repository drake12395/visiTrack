// where all reducers and middleware are connected
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
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
  meetingList: meetingListReducer,
  meetingDelete: meetingDeleteReducer,
  meetingUpdate: meetingUpdateReducer,
  meetingDetails: meetingtDetailsReducer,
  meetingCreate: meetingCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
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
