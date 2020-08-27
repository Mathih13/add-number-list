import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


import rootReducer from '../reducers/index';

const logger = createLogger({
  colors: true
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise(), thunk, logger)
  ));

export default store;
