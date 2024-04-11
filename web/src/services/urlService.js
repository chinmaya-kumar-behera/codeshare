import axios from "axios";

export const getCodeService = ({ id, userId }) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/${id}`, {
    params: { userId },
  });
};

export const createCodeService = (data) => {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/${data.id}`,
    data
  );
};