import React from 'react';
import ListItem from './ListItem';
import { useGetListsQuery } from './listsApi';
import { Error } from '../../app/components/Error';
function Lists() {
    //const lists = useSelector(state => state.lists);
    const { data ,error, isLoading}  = useGetListsQuery();
   
    console.log(data,error);
    if(isLoading){
        return <p>Loading...</p>; 
    }
     if(error){
         return <Error>{error.data.message}</Error>; 
    }
    if(data && !data.success){
        return <Error>{data.message}</Error>; 
    }
    const lists = data.lists;

    return (
        <div>
            <h2>Your Lists</h2>
            {lists.length?
            <ul className="list-group">
                {lists.map(list => (
                    <ListItem key={list.id} list={list} />
                ))}
            </ul>
            :<h3>No lists found</h3>
}
        </div>
    );
}

export default Lists;
