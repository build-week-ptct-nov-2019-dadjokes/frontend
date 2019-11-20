import { axiosWithAuth as axios } from "../utils/axiosConfig";

export const PUT_JOKES_START = "PUT_JOKES_START";
export const PUT_JOKES_SUCCESS = "PUT_JOKES_SUCCESS";
export const PUT_JOKES_FAILED = "PUT_JOKES_FAILED";

export const putJokes = id => dispatch => {
  dispatch({ type: PUT_JOKES_START });
  axios()
    .put(`/api/auth/jokes/${id}`)
    .then(res => dispatch({ type: PUT_JOKES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: PUT_JOKES_FAILED, payload: err.response }));
};