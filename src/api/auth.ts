import { AxiosResponse } from 'axios';
import { httpClient } from '../httpClient';

const REQUEST_URL = '/auth';

interface IAuthApi {
  register: (
    userData: IUserData
  ) => Promise<AxiosResponse<IUserData>>;
}

const { post } = httpClient;

export const createApi = (): IAuthApi => ({
  register: (userData) =>
    post(`${REQUEST_URL}/registration`, userData),
});
