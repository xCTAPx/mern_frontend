import axios, {
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';

export const httpClient: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers.Authorization = `Bearer ${
      localStorage.getItem('accessToken') || ''
    }`;

    return config;
  }
);
