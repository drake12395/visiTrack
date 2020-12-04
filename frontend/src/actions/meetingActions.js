import axios from 'axios';
import {
  MEETING_LIST_REQUEST,
  MEETING_LIST_SUCCESS,
  MEETING_LIST_FAIL,
} from '../constants/meetingConstants';

// all actions that deal with meetings go here
// create constant, reducer, action, then fire it off in components

// action creator
// async request handled by thunk
// dispatch actions to the reducer
export const listMeetings = () => async (dispatch) => {
  try {
    // calls meetinglistrequest in reducer (switch)
    dispatch({ type: MEETING_LIST_REQUEST });
    // get data
    const { data } = await axios.get('/api/meetings');
    // if above line works, dispatch success
    dispatch({
      type: MEETING_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //if getting data fails, dispatch fail
    // get backend errors and send them to front end state
    dispatch({
      type: MEETING_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
