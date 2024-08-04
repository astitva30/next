import { all } from 'redux-saga/effects';
import authSaga from '../saga/authSaga';
import logoutSaga from './logoutSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    logoutSaga(),
    // Add other sagas here
  ]);
}
