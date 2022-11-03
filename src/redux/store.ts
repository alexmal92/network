import { configureStore } from '@reduxjs/toolkit';
import { dialogsApi } from '../api/dialogsApi';
import { rootReducer } from './rootReducers'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dialogsApi.middleware),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

