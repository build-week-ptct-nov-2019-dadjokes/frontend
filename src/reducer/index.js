import {
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILED
} from "../actions";
import {
  FETCH_ALL_JOKES_START,
  FETCH_ALL_JOKES_SUCCESS,
  FETCH_ALL_JOKES_FAILED
} from "../actions/allJokesAction";
import {
  POST_JOKES_START,
  POST_JOKES_SUCCESS,
  POST_JOKES_FAILED
} from "../actions/postAction";
import {
  PUT_JOKES_START,
  PUT_JOKES_SUCCESS,
  PUT_JOKES_FAILED
} from "../actions/putAction";
import {
  DELETE_JOKES_START,
  DELETE_JOKES_SUCCESS,
  DELETE_JOKES_FAILED
} from "../actions/deleteAction";

export const initialState = {
  jokes: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_START ||
      FETCH_ALL_JOKES_START ||
      POST_JOKES_START ||
      PUT_JOKES_START ||
      DELETE_JOKES_START:
      return {
        ...state,
        jokes: [],
        isLoading: true,
        error: ""
      };
    case FETCH_JOKES_SUCCESS ||
      FETCH_ALL_JOKES_SUCCESS ||
      POST_JOKES_SUCCESS ||
      PUT_JOKES_SUCCESS ||
      DELETE_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        error: ""
      };
    case FETCH_JOKES_FAILED ||
      FETCH_ALL_JOKES_FAILED ||
      POST_JOKES_FAILED ||
      PUT_JOKES_FAILED ||
      DELETE_JOKES_FAILED:
      return {
        ...state,
        isLoading: false,
        jokes: [],
        error: action.payload
      };
    default:
      return state;
  }
};
