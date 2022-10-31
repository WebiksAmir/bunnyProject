import axios from "axios";
const URL = "http://localhost:8000";



export const getAllBunnies = () => {
  return axios
    .get(`${URL}/bunnies`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => alert(error.response));
};
