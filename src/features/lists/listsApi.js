import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const listsApi = createApi({

    reducerPath:'lists',
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_API_BASE_URL + '/lists'}),
    tagTypes:['List'],
    endpoints:(builder) =>(
        {
            getLists:builder.query({
                    query:() => '',
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
                    invalidatesTags: ['List']
                    }
        )
            ,  
            updateList: builder.mutation(
                {
                    query: ({ id, ...listObj }) => ({
                        url: '/' + listObj.id,
                        method: 'post',
                        body: listObj
                    }),
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