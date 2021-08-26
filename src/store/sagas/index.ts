import { all } from 'redux-saga/effects';
import { watchRegister } from './login';

export function* rootSaga() {
  yield all([watchRegister()]);
}
