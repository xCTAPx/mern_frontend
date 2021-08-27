import { all, AllEffect } from 'redux-saga/effects';
import { WatchRegister, watchRegister } from './auth';

type RootSaga = Generator<
  AllEffect<WatchRegister>,
  void,
  void
>;

export function* rootSaga(): RootSaga {
  yield all([watchRegister()]);
}
