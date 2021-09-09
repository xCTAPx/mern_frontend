/* eslint-disable @typescript-eslint/no-unsafe-call */
import { AxiosResponse } from 'axios';
import {
  spawn,
  ForkEffect,
  put,
  call,
  PutEffect,
  takeEvery,
  CallEffect,
} from 'redux-saga/effects';
import { authApi, IPasswords } from '../../api';
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

type SagaSpawn<T> = Generator<
  | ForkEffect<AxiosResponse<T>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;

type SagaWorker<T> = Generator<
  | CallEffect<AxiosResponse<T>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;

function* registrationSaga(
  action: IAction<IUserDataRegisterResponse>
): SagaSpawn<IUserDataRegisterResponse> {
  const user = yield spawn(
    authApi.register,
    action.payload
  );
  yield put({ type: REGISTRATION_SUCCEED, payload: user });
}

function* loginSaga(
  action: IAction<IUserDataLogin>
): SagaWorker<IUserDataLoginResponse> {
  const response = yield call(
    authApi.login,
    action.payload
  );

  yield put({
    type: LOGIN_SUCCEED,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    payload: response.data.user,
  });
}

function* restoreSaga(
  action: IAction<string>
): SagaSpawn<void> {
  yield spawn(authApi.restore, action.payload);
}

function* setPasswordSaga(
  action: IAction<IPasswords>
): SagaSpawn<void> {
  yield spawn(authApi.setPassword, action.payload);
}

function* workerSaga(action: IAction<IPasswords>) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield spawn(loginSaga, action);
}

export function* watchAuth(): WatchAuth {
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(LOGIN, workerSaga);
  yield takeEvery(RESTORE_PASSWORD, restoreSaga);
  yield takeEvery(SET_NEW_PASSWORD, setPasswordSaga);
}
