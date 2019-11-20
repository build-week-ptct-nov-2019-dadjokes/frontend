import { axiosWithAuth as axios } from "../utils/axiosConfig";

export const DELETE_JOKES_START = "DELETE_JOKES_START";
export const DELETE_JOKES_SUCCESS = "DELETE_JOKES_SUCCESS";
export const DELETE_JOKES_FAILED = "DELETE_JOKES_FAILED";

export const deleteJokes = id => dispatch => {
  dispatch({ type: DELETE_JOKES_START });
  axios()
    .delete(`/api/auth/jokes/${id}`)
    .then(res => dispatch({ type: DELETE_JOKES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: DELETE_JOKES_FAILED, payload: err.response })
    );
};
