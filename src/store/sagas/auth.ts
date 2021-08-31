import { AxiosResponse } from 'axios';
import {
  spawn,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { createApi } from '../../api';

export type WatchRegister = Generator<ForkEffect<never>>;
type AuthSaga = Generator<
  | ForkEffect<AxiosResponse<IUserData>>
  | PutEffect<IAction<IUserData>>
>;

const api = createApi();

function* authSaga(action: IAction<IUserData>): AuthSaga {
  const user = yield spawn(api.register, action.payload);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  yield put({ type: 'LOGIN_SUCCEEDED', user });
}

export function* watchRegister(): WatchRegister {
  yield takeEvery('LOGIN_FORM_SEND_DATA', authSaga);
}
