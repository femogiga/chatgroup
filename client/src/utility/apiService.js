import axios from 'axios';

const baseUrl = 'http://localhost:9000';
const token = localStorage.getItem('token');

const get = (url) => {
  return axios.get(`${baseUrl}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};

const post = (url, data) => {
  return axios.post(`${baseUrl}${url}`, data);
};

const getById = (url, id) => {
  return axios.get(`${baseUrl}${url}${id}`);
};

export default { get, post, getById };
