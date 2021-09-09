import { AxiosResponse } from 'axios';
import { httpClient } from '../httpClient';

const REQUEST_URL = '/auth';

export interface IPasswords {
  password: string;
  passwordConfirmation: string;
}

interface IAuthApi {
  register: (
    userData: IUserDataRegisterResponse
  ) => Promise<AxiosResponse<IUserDataRegisterResponse>>;
  login: (
    userData: IUserDataLogin
  ) => Promise<AxiosResponse<IUserDataLoginResponse>>;
  restore: (email: string) => Promise<AxiosResponse<void>>;
  setPassword: (
    passwords: IPasswords
  ) => Promise<AxiosResponse<void>>;
}

const { post, put } = httpClient;

const createApi = (): IAuthApi => ({
  register: (userData) =>
    post(`${REQUEST_URL}/registration`, userData),
  login: (userData) =>
    post(`${REQUEST_URL}/login`, userData),
  restore: (email) => post(`${REQUEST_URL}/restore`, email),
  setPassword: (passwords) =>
    put(`${REQUEST_URL}/createNewPassword`, passwords),
});

export const authApi = createApi();
