import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './_root.reducer';

export const store = configureStore({
  reducer: {
    rootReducer, 
    applyMiddleware
  },
});
