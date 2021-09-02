import { AxiosResponse } from 'axios';
import { httpClient } from '../httpClient';

const REQUEST_URL = '/auth';

interface IAuthApi {
  register: (
    userData: IUserDataRegisterResponse
  ) => Promise<AxiosResponse<IUserDataRegisterResponse>>;
  login: (
    userData: IUserDataLogin
  ) => Promise<AxiosResponse<IUserDataLoginResponse>>;
}

const { post } = httpClient;

const createApi = (): IAuthApi => ({
  register: (userData) =>
    post(`${REQUEST_URL}/registration`, userData),
  login: (userData) =>
    post(`${REQUEST_URL}/login`, userData),
});

export const authApi = createApi();
