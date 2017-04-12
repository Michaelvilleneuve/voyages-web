import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [
    ReduxThunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(reducers, initialState, compose(...enhancers));
  store.asyncReducers = {};

  return store;
}
