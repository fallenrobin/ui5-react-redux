import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './_root.reducer';
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;