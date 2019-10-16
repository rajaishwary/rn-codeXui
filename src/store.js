import { createStore, compose } from 'redux'
import { combineReducers } from 'redux-immutable';
import { applyMiddleware } from '@redux-dynostore/redux-subspace';
import createSagaMiddleware from '@redux-dynostore/redux-subspace-saga';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { dynamicSagas } from '@redux-dynostore/redux-saga';


const staticReducers = {
  navigation: require('./navigation/reducer').reducer,
  misc: require('./misc/redux').reducer,
};

const rootReducer = combineReducers(staticReducers);
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    dynostore(dynamicReducers(), dynamicSagas(sagaMiddleware))
  )
);

export default store;