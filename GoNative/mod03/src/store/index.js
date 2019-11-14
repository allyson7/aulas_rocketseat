import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddlewares);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddlewares.run(rootSaga);

export default store;
