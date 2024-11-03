import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import { useGetListsQuery } from './listsApi';
function Lists() {
    //const lists = useSelector(state => state.lists);
    const {data: lists, error, isLoading}  = useGetListsQuery();
    if(isLoading){
        return <p>Loading...</p>; 
    }
     if(error){
        return <p>{error.message}</p>; 
    }
    return (
        <div>
            <h2>Your Lists</h2>
            <ul className="list-group">
                {lists.map(list => (
                    <ListItem key={list.id} list={list} />
                ))}
            </ul>
        </div>
    );
}

export default Lists;
