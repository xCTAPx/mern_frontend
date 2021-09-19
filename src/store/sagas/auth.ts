import { AxiosResponse } from 'axios';
import {
  spawn,
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import { authApi, IPasswords } from '../../api';
import { redirectTo } from '../../utils';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  LOGIN_SUCCEED,
  REGISTRATION_SUCCEED,
  RESTORE_PASSWORD,
  SET_NEW_PASSWORD,
  CHECK_ACCESS,
} from '../actions';

function* registrationSaga(
  action: Action<IUserDataRegister>
): SagaWorker<IUserDataRegister> {
  const user = yield spawn(
    authApi.register,
    action.payload
  );
  yield put({ type: REGISTRATION_SUCCEED, payload: user });
}

function* loginSaga(
  action: Action<IUserDataLogin>
): SagaWorker<IUserDataLoginResponse> {
  const response = yield call(
    authApi.login,
    action.payload
  );

  const resp =
    response as unknown as AxiosResponse<IUserDataLoginResponse>; // because typescript

  yield put({
    type: LOGIN_SUCCEED,
    payload: resp.data,
  });

  const { tokens } = resp.data;
  const { accessToken, refreshToken } = tokens;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  redirectTo('/home');
}

function* logoutSaga(): SagaWorker<void> {
  yield spawn(authApi.logout);
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  redirectTo('/auth');
}

function* restoreSaga(
  action: Action<string>
): SagaWorker<void> {
  yield spawn(authApi.restore, action.payload);
}

function* setPasswordSaga(
  action: Action<IPasswords>
): SagaWorker<void> {
  yield spawn(authApi.setPassword, action.payload);
}

function* workerSaga(action: Action<IPasswords>) {
  yield spawn<SpawnEffect>(loginSaga, action);
}

function* checkAccessSaga() {
  yield spawn(authApi.checkAccess);
}

export function* watchAuth(): WatchAuth {
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(LOGIN, workerSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(RESTORE_PASSWORD, restoreSaga);
  yield takeEvery(SET_NEW_PASSWORD, setPasswordSaga);

  yield takeEvery(CHECK_ACCESS, checkAccessSaga);
}
