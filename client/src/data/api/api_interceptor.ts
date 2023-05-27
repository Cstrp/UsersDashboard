import axios from 'axios';
import { API_URL } from '.';
import { getItem } from '../utils';

export const API = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

API.interceptors.response.use(
  (value) => value,
  (error) => Promise.reject(error),
);

API.interceptors.request.use((config) => {
  const data = getItem('data');

  if (data) {
    config.headers['Authorization'] = data.token;
    config.headers['status'] = data.status;
  }
  return config;
});
