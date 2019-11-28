import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from './navigation/reduxNavigation';
import rootSaga from './rootSaga';

export const reducers = combineReducers({
  navigation: require("./navigation/reducer").reducer,
  home: require("./containers/home/reducer"),
})

function configureStore(rootReducer, rootSaga) {
  const middleware = [];
  const enhancers = [];
  middleware.push(routerMiddleware);
  const sagaMonitor = null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./')
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./rootSaga').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
