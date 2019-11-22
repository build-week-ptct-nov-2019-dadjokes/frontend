import { axiosWithAuth as axios } from "../utils/axiosConfig";

export const FETCH_ALL_JOKES_START = "FETCH_ALL_JOKES_START";
export const FETCH_ALL_JOKES_SUCCESS = "FETCH_ALL_JOKES_SUCCESS";
export const FETCH_ALL_JOKES_FAILED = "FETCH_ALL_JOKES_FAILED";

export const getAllJokes = () => dispatch => {
  dispatch({ type: FETCH_ALL_JOKES_START });
  axios()
    .get(`/api/jokes`)
    .then(res => dispatch({ type: FETCH_ALL_JOKES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_ALL_JOKES_FAILED, payload: err.response })
    );
};
