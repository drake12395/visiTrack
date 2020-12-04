// where all reducers and middleware are connected
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { meetingListReducer } from './reducers/meetingReducers';

const reducer = combineReducers({
  meetingList: meetingListReducer,
});

// what we want to be loaded when the store loads initially
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
