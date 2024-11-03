import { configureStore } from '@reduxjs/toolkit';

import todosReducer from '../features/todos/todoSlice';
import listsApi from '../features/lists/listsApi';
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [listsApi.reducerPath]: listsApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(listsApi.middleware);
  }
});
