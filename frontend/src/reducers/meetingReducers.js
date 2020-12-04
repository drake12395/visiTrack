import {
  MEETING_LIST_REQUEST,
  MEETING_LIST_SUCCESS,
  MEETING_LIST_FAIL,
} from '../constants/meetingConstants';
// use switch to evaluate type (request, success, failure)
// request - return part of the state (loading, and empty meeting array)
// success - loading is done and meeting array now has a payload
// fail - loading is done and send an error in the payload
// default - just return initial state from args
export const meetingListReducer = (state = { meetings: [] }, action) => {
  switch (action.type) {
    case MEETING_LIST_REQUEST:
      return { loading: true, meetings: [] };
    case MEETING_LIST_SUCCESS:
      return { loading: false, meetings: action.payload };
    case MEETING_LIST_FAIL:
      return { laoding: false, error: action.payload };
    default:
      return state;
  }
};
