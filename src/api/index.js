import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const api = axios.create({ baseURL });

export const GET = async (url, params = {}, token = '') => {
  const config = {
    url,
    params,
    method: 'GET',
    headers: { Authorization: token },
  };

  const response = await api.request(config);
  return response;
};

export const POST = async (url, data = {}, token = '', params = {}) => {
  const config = {
    url,
    params,
    data,
    method: 'POST',
    headers: { Authorization: token },
  };

  const response = await api.request(config);
  return response;
};

export const PUT = async (url, params = {}, data = {}, token = '') => {
  const config = {
    url,
    params,
    data,
    method: 'PUT',
    headers: { Authorization: token },
  };

  const response = await api.request(config);
  return response;
};

export const DELETE = async (url, params = {}, token = '') => {
  const config = {
    url,
    params,
    method: 'DELETE',
    headers: { Authorization: token },
  };

  const response = await api.request(config);
  return response;
};
