import { IPasswords } from '../../api';
import {
  CHECK_ACCESS,
  LOGIN,
  LOGOUT,
  REGISTER,
  RESTORE_PASSWORD,
  SET_NEW_PASSWORD,
} from '../actions';

export const loginAction = (
  loginData: IUserDataLogin
): Action<IUserDataLogin> => ({
  type: LOGIN,
  payload: loginData,
});

export const registrationAction: ActionCreator<IUserDataRegister> =
  (registrationData) => ({
    type: REGISTER,
    payload: registrationData,
  });

export const logoutAction: ActionCreator = () => ({
  type: LOGOUT,
  payload: undefined,
});

export const checkAccessAction: ActionCreator = () => ({
  type: CHECK_ACCESS,
  payload: undefined,
});

export const restorePasswordAction: ActionCreator<string> =
  (email) => ({
    type: RESTORE_PASSWORD,
    payload: email,
  });

export const setPasswordAction: ActionCreator<IPasswords> =
  (passwords) => ({
    type: SET_NEW_PASSWORD,
    payload: passwords,
  });
