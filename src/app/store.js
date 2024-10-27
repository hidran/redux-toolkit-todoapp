import { configureStore } from '@reduxjs/toolkit';

import todosReducer from '../features/todos/todoSlice';
import listsReducer from '../features/lists/listsSlice';
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    lists: listsReducer,
    auth: authReducer
  },
});
