import {
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILED
} from "../actions";

export const initialState = {
  jokes: [],
  isLoading: false,
  error: "",
  loggedIn: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        error: ""
      };
    case FETCH_JOKES_FAILED:
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
