import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const api = axios.create({ baseURL });

export const GET = async (url, params = {}, token = '') => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
    params,
  };
  const response = await api.get(url, config);
  return response;
};

export const POST = async (url, data = {}, token = '') => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
  };
  const response = await api.post(url, data, config);
  return response;
};
