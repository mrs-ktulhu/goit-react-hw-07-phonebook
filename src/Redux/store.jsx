import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contactsSlice';
import { filter } from './filter';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ contacts, filter });

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);