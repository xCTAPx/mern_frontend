import { IPasswords } from '../../api';
import {
  CHECK_ACCESS,
  LOGIN,
  LOGOUT,
  REGISTER,
  RESTORE_PASSWORD,
  SET_NEW_PASSWORD,
} from '../actions';

export const LoginAction = (
  loginData: IUserDataLogin
): Action<IUserDataLogin> => ({
  type: LOGIN,
  payload: loginData,
});

export const RegistrationAction: ActionCreator<IUserDataRegister> =
  (registrationData) => ({
    type: REGISTER,
    payload: registrationData,
  });

export const LogoutAction: ActionCreator = () => ({
  type: LOGOUT,
  payload: undefined,
});

export const CheckAccessAction: ActionCreator = () => ({
  type: CHECK_ACCESS,
  payload: undefined,
});

export const RestorePasswordAction: ActionCreator<string> =
  (email) => ({
    type: RESTORE_PASSWORD,
    payload: email,
  });

export const SetPasswordAction: ActionCreator<IPasswords> =
  (passwords) => ({
    type: SET_NEW_PASSWORD,
    payload: passwords,
  });
