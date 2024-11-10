import { configureStore } from '@reduxjs/toolkit';

import todosApi from '../features/todos/todosApi';
import listsApi from '../features/lists/listsApi';

import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [listsApi.reducerPath]: listsApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(listsApi.middleware, todosApi.middleware);
  }
});
