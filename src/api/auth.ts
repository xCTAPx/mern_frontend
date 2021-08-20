import { AxiosResponse } from 'axios';
import { httpClient } from '../httpClient';

const REQUEST_URL = '/auth';

interface IUserData {
  email: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
}

interface IAuthApi {
  register: (userData: IUserData) => Promise<AxiosResponse>;
}

const { post } = httpClient;

export const createApi = (): IAuthApi => ({
  register: (userData) =>
    post(`${REQUEST_URL}/registration`, userData),
});
