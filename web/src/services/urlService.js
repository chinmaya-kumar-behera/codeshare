import axios from "axios";

export const getCodeService = (id) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/${id}`);
};

export const createCodeService = (data) => {
    console.log(data)
    const { id, code } = data;
  return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/${id}`,);
};