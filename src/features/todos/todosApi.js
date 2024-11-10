import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE_URL + '/todos',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token ?? localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', 'Bearer ' + token);
            }
            return headers;
        },
    }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (listId) => `?listId=${listId}`, // Filtra per lista
            transformResponse: (response) => ({
                todos: response.data,
                success: response.success,
                message: response.message,
                error: response.error,
            }),
            providesTags: ['Todo'],
        }),
        getTodo: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['Todo'],
        }),
        createTodo: builder.mutation({
            query: (newTodo) => ({
                url: '',
                method: 'POST',
                body: newTodo,
            }),
            transformErrorResponse: (resp) => {
                console.error('Error in createTodo:', resp);
                return resp.data.error;
            },
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...todoObj }) => ({
                url: '/' + id,
                method: 'PATCH',
                body: todoObj,
            }),
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: '/' + id,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo'],
        }),
    }),
});

export default todosApi;
export const {
    useGetTodosQuery,
    useGetTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todosApi;
