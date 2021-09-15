import { all, AllEffect } from 'redux-saga/effects';
import { watchAuth } from './auth';

type RootSaga = Generator<AllEffect<WatchAuth>, void, void>;

export function* rootSaga(): RootSaga {
  yield all([watchAuth()]);
}
