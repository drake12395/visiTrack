/****************************************************************
 * File name: meetingReducers.js
 * **************************************************************
 * File purpose:
 * This file contains meeting reducers that take current state
 * and an action and return a new state.
 * **************************************************************
 * use switch to evaluate type (request, success, failure).
 * request - return part of the state (loading, and empty meeting
 * array).
 * success - loading is done and meeting array now has a payload.
 * fail - loading is done and send an error in the payload.
 * default - just return initial state from args.
 ***************************************************************/

import {
  MEETING_LIST_REQUEST,
  MEETING_LIST_SUCCESS,
  MEETING_LIST_FAIL,
  MEETING_DELETE_FAIL,
  MEETING_DELETE_REQUEST,
  MEETING_DELETE_SUCCESS,
  MEETING_UPDATE_FAIL,
  MEETING_UPDATE_REQUEST,
  MEETING_UPDATE_RESET,
  MEETING_UPDATE_SUCCESS,
  MEETING_DETAILS_FAIL,
  MEETING_DETAILS_REQUEST,
  MEETING_DETAILS_SUCCESS,
  MEETING_CREATE_FAIL,
  MEETING_CREATE_REQUEST,
  MEETING_CREATE_RESET,
  MEETING_CREATE_SUCCESS,
} from '../constants/meetingConstants';

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

export const meetingDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MEETING_DELETE_REQUEST:
      return { loading: true };
    case MEETING_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MEETING_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const meetingUpdateReducer = (state = { meeting: {} }, action) => {
  switch (action.type) {
    case MEETING_UPDATE_REQUEST:
      return { loading: true };
    case MEETING_UPDATE_SUCCESS:
      return { loading: false, success: true, meeting: action.payload };
    case MEETING_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MEETING_UPDATE_RESET:
      return { meeting: {} };
    default:
      return state;
  }
};

export const meetingtDetailsReducer = (state = { meeting: {} }, action) => {
  switch (action.type) {
    case MEETING_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MEETING_DETAILS_SUCCESS:
      return { loading: false, meeting: action.payload };
    case MEETING_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const meetingCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MEETING_CREATE_REQUEST:
      return { loading: true };
    case MEETING_CREATE_SUCCESS:
      return { loading: false, success: true, meeting: action.payload };
    case MEETING_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case MEETING_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
