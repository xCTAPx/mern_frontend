import { AxiosResponse } from 'axios';
import {
  spawn,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { createApi } from '../../api';

export type WatchRegister = Generator<
  ForkEffect<never>,
  void,
  void
>;
type AuthSaga = Generator<
  | ForkEffect<AxiosResponse<IUserDataResponse>>
  | PutEffect<IAction<unknown>>,
  void,
  void
>;

const api = createApi();

function* authSaga(action: IAction<IUserData>): AuthSaga {
  const user = yield spawn(api.register, action.payload);
  yield put({ type: 'LOGIN_SUCCEEDED', payload: user });
}

export function* watchRegister(): WatchRegister {
  yield takeEvery('LOGIN_FORM_SEND_DATA', authSaga);
}
