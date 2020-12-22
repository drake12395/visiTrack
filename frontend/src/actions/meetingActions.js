import axios from 'axios';
import {
  MEETING_LIST_REQUEST,
  MEETING_LIST_SUCCESS,
  MEETING_LIST_FAIL,
  MEETING_DELETE_FAIL,
  MEETING_DELETE_REQUEST,
  MEETING_DELETE_SUCCESS,
  MEETING_UPDATE_FAIL,
  MEETING_UPDATE_REQUEST,
  MEETING_UPDATE_SUCCESS,
  MEETING_DETAILS_FAIL,
  MEETING_DETAILS_REQUEST,
  MEETING_DETAILS_SUCCESS,
  MEETING_CREATE_SUCCESS,
  MEETING_CREATE_FAIL,
  MEETING_CREATE_REQUEST,
  MEETING_NOTIFY_FAIL,
  MEETING_NOTIFY_REQUEST,
  MEETING_NOTIFY_RESET,
  MEETING_NOTIFY_SUCCESS,
} from '../constants/meetingConstants';
import { logout } from './userActions';

// all actions that deal with meetings go here
// create constant, reducer, action, then fire it off in components

// action creator
// async request handled by thunk
// dispatch actions to the reducer
export const listMeetings = (keyword = '') => async (dispatch) => {
  try {
    // calls meetinglistrequest in reducer (switch)
    dispatch({ type: MEETING_LIST_REQUEST });
    // get data
    const { data } = await axios.get(`/api/meetings?keyword=${keyword}`);
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

export const deleteMeeting = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEETING_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/meetings/${id}`, config);

    dispatch({
      type: MEETING_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: MEETING_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateMeeting = (meeting) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEETING_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/meetings/${meeting._id}`,
      meeting,
      config
    );

    dispatch({
      type: MEETING_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: MEETING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: MEETING_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const createMeeting = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MEETING_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // PICK UP HERE (BELOW) - looks like route is not found (hitting  404)

    const { data } = await axios.post(`/api/meetings`, {}, config);

    dispatch({
      type: MEETING_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: MEETING_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listMeetingDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MEETING_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/meetings/${id}`);

    dispatch({
      type: MEETING_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MEETING_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const meetingNotification = (meeting) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: MEETING_NOTIFY_REQUEST });

//     // const {
//     //   userLogin: { userInfo },
//     // } = getState();

//     const { data } = await axios.put(`/api/meetings/${meeting._id}/notify`, {});

//     dispatch({
//       type: MEETING_NOTIFY_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: MEETING_NOTIFY_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
