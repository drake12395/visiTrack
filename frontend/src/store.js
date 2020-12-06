// where all reducers and middleware are connected
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { meetingListReducer } from './reducers/meetingReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  meetingList: meetingListReducer,
  userLogin: userLoginReducer,
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
