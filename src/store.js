import {createStore, combineReducers} from 'redux';

const staticReducers = {
  navigation: require('./navigation/reducer').reducer,
  misc: require('./misc/redux').reducer,
};

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
