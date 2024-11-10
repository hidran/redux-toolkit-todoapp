import React from 'react';
import ListItem from './ListItem';
import { useGetListsQuery } from './listsApi';
import { Error } from '../../app/components/Error';

function Lists() {
    const { data, error, isLoading } = useGetListsQuery();

    if (isLoading) return <p>Loading...</p>;

    if (error) {
        const errorMessage = error?.data?.message || error?.error || "An unknown error occurred";
        return <Error>{errorMessage}</Error>;
    }

    if (data && !data.success) {
        return <Error>{data.message}</Error>;
    }

    const lists = data?.lists || [];

    return (
        <div>
            <h2>Your Lists</h2>
            {lists.length ? (
                <ul className="list-group">
                    {lists.map((list) => (
                        <ListItem key={list.id} list={list} />
                    ))}
                </ul>
            ) : (
                <h3>No lists found</h3>
            )}
        </div>
    );
}

export default Lists;
