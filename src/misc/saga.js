import { takeLatest, call, put } from 'redux-saga/effects';

export function* checkRoot() {
  try {
    // TODO: check for any initial calls
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest("ROOT", checkRoot);
}
