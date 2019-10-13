import { takeLatest, call, put } from 'redux-saga/effects';
import { actionsTypes, getHomeList, getHomeSuccess } from './actions';

export function* fetchHomeList() {
  try {
    const data = { home: 1 };
    yield put(getHomeSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(actionsTypes.GET_HOME_LIST_REQUEST, getHomeList);
}
