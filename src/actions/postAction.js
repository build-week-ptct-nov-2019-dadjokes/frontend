import { axiosWithAuth as axios } from "../utils/axiosConfig";

export const POST_JOKES_START = "POST_JOKES_START";
export const POST_JOKES_SUCCESS = "POST_JOKES_SUCCESS";
export const POST_JOKES_FAILED = "POST_JOKES_FAILED";

export const postJokes = () => dispatch => {
  dispatch({ type: POST_JOKES_START });
  axios()
    .post(`/api/auth/jokes/`)
    .then(res => dispatch({ type: POST_JOKES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_JOKES_FAILED, payload: err.response }));
};
