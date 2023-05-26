import axios from 'axios';
import { API_URL } from '.';

export const API = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

API.interceptors.response.use(
  (value) => value,
  (error) => Promise.reject(error),
);

API.interceptors.request.use((config) => {
  return config;
});
