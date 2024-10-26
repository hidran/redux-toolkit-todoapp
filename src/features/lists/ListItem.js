import React from 'react';
import { useDispatch } from 'react-redux';
import { removeList } from './listsSlice';

function ListItem({ list }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeList({ id: list.id }));
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>{list.name}</strong> <br />
                <small>Created at: {new Date(list.created_at).toLocaleString()}</small>
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleRemove}>
                <i className="bi bi-trash"></i> {/* Bootstrap icon */}
            </button>
        </li>
    );
}

export default ListItem;
