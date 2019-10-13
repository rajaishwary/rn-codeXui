import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const staticReducers = {
  navigation: require('./navigation/reducer').reducer,
  // misc: require('./misc/redux').reducer,
};

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), fromJS(initialState), compose(...enhancers));
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.replaceReducer(createReducer(store.injectedReducers));
  return store;
}

export function createReducer(injectedReducers) {
  console.log('createReducer', injectedReducers);
  return combineReducers({
    ...staticReducers,
    ...injectedReducers,
  });
}
