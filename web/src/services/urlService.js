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

export const getCodesService = ({ userId }) => {
  console.log(userId);
  return axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/getcodes/${userId}`,
  );
};

export const deleteCodesService = ({ id }) => {
  console.log(id);
  return axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/deletecode/${id}`
  );
};