import axios from "axios";

const url = "https://warm-crag-23503.herokuapp.com/api";

export const getRequest = (endpoint) => {
  const res = axios.get(`${url}/${endpoint}`).then((res) => {
    return res.data;
  });
  return res;
};

export const postRequest = (endpoint, data = {}) => {
  const res = axios.get(`${url}/${endpoint}`, data);
  return res;
};

export const deleteRequest = (endpoint) => {
  const res = axios.delete(`${url}/${endpoint}`);
  return res;
};
