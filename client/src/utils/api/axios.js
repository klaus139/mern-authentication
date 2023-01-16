import axios from "axios";

const baseUrl = "http://localhost:5001";

export const apiGet = (path) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.post(`${baseUrl}${path}`, data, config);
};