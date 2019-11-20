import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://lambda-dad-jokes.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
