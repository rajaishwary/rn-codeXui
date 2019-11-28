import { takeLatest, all, call } from 'redux-saga/effects'
import API from './services'

import HomeSagaRoot from "./containers/home/sagas";

const api = API.create();

export default function * root () {
  yield all([
    call(HomeSagaRoot, api),
  ])
}
