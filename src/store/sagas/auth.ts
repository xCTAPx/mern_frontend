import { AxiosResponse } from 'axios';
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { createApi } from '../../api';

export type WatchRegister = Generator<ForkEffect<never>>;
type AuthSaga = Generator<
  | PutEffect<{ type: string, user: unknown }>
  | CallEffect<AxiosResponse<IUserData>>
>;

const api = createApi();

function* authSaga(action: IAction): AuthSaga {
  const user = yield call(api.register, action.payload);
  yield put({ type: 'LOGIN_SUCCEEDED', user });
}

export function* watchRegister(): WatchRegister {
  yield takeEvery('LOGIN_FORM_SEND_DATA', authSaga);
}
