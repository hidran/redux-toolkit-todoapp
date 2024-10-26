import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function Lists() {
    const lists = useSelector(state => state.lists);

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
