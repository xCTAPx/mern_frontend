import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers.Authorization = `Bearer ${
      localStorage.getItem('accessToken') || ''
    }`;

    return config;
  }
);
