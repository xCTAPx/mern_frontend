import { AxiosResponse } from 'axios';
import {
  spawn,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { authApi } from '../../api';
import {
  LOGIN,
  REGISTER,
  LOGIN_SUCCEED,
  REGISTRATION_SUCCEED,
  RESTORE_PASSWORD,
  SET_NEW_PASSWORD,
} from '../actions';

export type WatchAuth = Generator<
  ForkEffect<never>,
  void,
  void
>;
type RegistrationSaga = Generator<
  | ForkEffect<AxiosResponse<IUserDataRegisterResponse>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;
type LoginSaga = Generator<
  | ForkEffect<AxiosResponse<IUserDataLoginResponse>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;
type RestoreSaga = Generator<
  | ForkEffect<AxiosResponse<void>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;
type SetPasswordSaga = Generator<
  | ForkEffect<AxiosResponse<void>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;

function* registrationSaga(
  action: IAction<IUserDataRegisterResponse>
): RegistrationSaga {
  const user = yield spawn(
    authApi.register,
    action.payload
  );
  yield put({ type: REGISTRATION_SUCCEED, payload: user });
}

function* loginSaga(
  action: IAction<IUserDataLoginResponse>
): LoginSaga {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user = yield spawn(authApi.login, action.payload);
  yield put({ type: LOGIN_SUCCEED, payload: user });
}

function* restoreSaga(action: IAction): RestoreSaga {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield spawn(authApi.restore, action.payload);
}

function* setPasswordSaga(
  action: IAction
): SetPasswordSaga {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield spawn(authApi.setPassword, action.payload);
}

export function* watchAuth(): WatchAuth {
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(RESTORE_PASSWORD, restoreSaga);
  yield takeEvery(SET_NEW_PASSWORD, setPasswordSaga);
}
