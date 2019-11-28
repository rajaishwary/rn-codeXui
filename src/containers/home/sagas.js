import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actionsTypes, getHomeList, getHomeSuccess } from './actions';

export function* fetchHomeList() {
  try {
    const data = { home: 1 };
    yield put(getHomeSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* homeSaga() {
  yield takeLatest(actionsTypes.GET_HOME_LIST_REQUEST, fetchHomeList);
}

export default function * root () {
  yield all([
    call(homeSaga),
  ])
}
