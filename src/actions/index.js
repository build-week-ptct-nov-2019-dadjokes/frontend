import { axiosWithAuth as axios } from "../utils/axiosConfig";

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILED = "FETCH_JOKES_FAILED";

export const getPublicJokes = () => dispatch => {
  dispatch({ type: FETCH_JOKES_START });
  axios
    .get(`/api/jokes/public`)
    .then(res => dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_JOKES_FAILED, payload: err.response })
    );
};
