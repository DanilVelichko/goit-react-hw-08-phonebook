import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';


export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);