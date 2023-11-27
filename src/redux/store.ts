import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from './bookApi';
import searchParamsReducer from './searchParamsSlice'; 

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    searchParams: searchParamsReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;