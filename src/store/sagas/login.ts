import { call, put, takeLatest } from 'redux-saga/effects';
import { createApi } from '../../api';

interface IAction {
  type: string;
  payload?: any;
}

const api = createApi();

function* authSaga(action: IAction): Generator<any> {
  const user = yield call(api.register, action.payload);
  yield put({ type: 'LOGIN_SUCCEEDED', user });
}

export function* register(): Generator<any> {
  yield takeLatest('LOGIN_FORM_SEND_DATA', authSaga);
}
