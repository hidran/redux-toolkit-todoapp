import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const listsApi = createApi({

    reducerPath:'lists',
    baseQuery: fetchBaseQuery(
        {
        baseUrl:process.env.REACT_APP_API_BASE_URL + '/lists',
        credentials:'include',
        prepareHeaders:(headers, {getState}) =>{
            const token = getState().auth.token ?? localStorage.getItem('token');
            if(token){
                headers.set('Authorization','Bearer ' + token);
            }
        }
    }),
    tagTypes:['List'],
    endpoints:(builder) =>(
        {
            getLists:builder.query({
                    query:() => '',
                    transformResponse:(response) =>({
                        lists:response.data,
                        success:response.success,
                        message:response.message,
                        error:response.error
                    }),
                    providesTags:['List']
                }
            ),
            getList: builder.query({
                query: (id) => '/' + id,
                providesTags: ['List']
            }),
            createList:builder.mutation(
                {
                        query:(newList) => ({
                            url:'',
                            method:'post',
                            body:newList
                    }),
                    transformErrorResponse:(resp)=>{
                        console.log('data transformErrorResponse',resp)
                        return resp.data.error
                        
                    },
                    invalidatesTags: ['List']
                    }
        )
            ,  
            updateList: builder.mutation(
                {
                    query: ({ id, ...listObj }) => ({
                        url: '/' + id,
                        method: 'put',
                        body: listObj
                    })
                   ,
                    invalidatesTags:['List']
                }
            ),
            deleteList: builder.mutation(
                {
                    query: (id) => ({
                        url: '/' + id,
                        method: 'delete'
                    }),
                    invalidatesTags: ['List']
                }
            ),
        }
)
});
export default listsApi;
export const { useGetListQuery, useDeleteListMutation, useUpdateListMutation, useCreateListMutation,useGetListsQuery } = listsApi