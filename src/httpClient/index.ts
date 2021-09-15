import axios, {
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { isProduction } from '../utils';

interface IRefreshResponse {
  accessToken: string;
  refreshToken: string;
}

const baseURL = isProduction
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:5000/api';

const httpClient: AxiosInstance = axios.create({
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

httpClient.interceptors.response.use(
  (config) => config,
  async (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IRefreshResponse>(
          `${baseURL}/auth/refresh`,
          { withCredentials: true }
        );

        const { accessToken } = response.data;

        localStorage.setItem('accessToken', accessToken);

        return httpClient.request(originalRequest);
      } catch (e) {
        throw new Error('Unauthtorized');
      }
    } else throw error;
  }
);

export default httpClient;
