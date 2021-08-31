import axios, {
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { isProduction } from '../utils';

const baseURL = isProduction
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:5000/api';

export const httpClient: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken)
      config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  }
);
