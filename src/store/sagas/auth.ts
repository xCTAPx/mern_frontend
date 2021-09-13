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
} from '../actions';

function* registrationSaga(
  action: IAction<IUserDataRegisterResponse>
): SagaWorker<IUserDataRegisterResponse> {
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
    payload: (
      response as unknown as AxiosResponse<IUserDataLoginResponse>
    ).data, // because typescript
  });

  redirectTo('/home');
}

function* logoutSaga(): SagaWorker<void> {
  yield spawn(authApi.logout);
  redirectTo('/auth');
}

function* restoreSaga(
  action: IAction<string>
): SagaWorker<void> {
  yield spawn(authApi.restore, action.payload);
}

function* setPasswordSaga(
  action: IAction<IPasswords>
): SagaWorker<void> {
  yield spawn(authApi.setPassword, action.payload);
}

function* workerSaga(action: IAction<IPasswords>) {
  yield spawn<SpawnEffect>(loginSaga, action);
}

export function* watchAuth(): WatchAuth {
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(LOGIN, workerSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(RESTORE_PASSWORD, restoreSaga);
  yield takeEvery(SET_NEW_PASSWORD, setPasswordSaga);
}
