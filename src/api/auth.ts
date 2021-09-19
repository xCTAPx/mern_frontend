import { AxiosResponse } from 'axios';
import httpClient from '../httpClient';

const REQUEST_URL = '/auth';

export interface IPasswords {
  password: string;
  passwordConfirmation: string;
}

interface IAuthApi {
  register: (
    userData: IUserDataRegister
  ) => Promise<AxiosResponse<IUserDataResponse>>;
  login: (
    userData: IUserDataLogin
  ) => Promise<AxiosResponse<IUserDataLoginResponse>>;
  logout: () => Promise<AxiosResponse<void>>;
  restore: (email: string) => Promise<AxiosResponse<void>>;
  setPassword: (
    passwords: IPasswords
  ) => Promise<AxiosResponse<void>>;
  checkAccess: () => Promise<AxiosResponse<void>>;
}

const { post, put, get } = httpClient;

export const authApi: IAuthApi = {
  register: (userData) =>
    post(`${REQUEST_URL}/registration`, userData),
  login: (userData) =>
    post(`${REQUEST_URL}/login`, userData),
  logout: () => post(`${REQUEST_URL}/logout`),
  restore: (email) => post(`${REQUEST_URL}/restore`, email),
  setPassword: (passwords) =>
    put(`${REQUEST_URL}/createNewPassword`, passwords),
  checkAccess: () => get(`${REQUEST_URL}/checkAccess`),
};
